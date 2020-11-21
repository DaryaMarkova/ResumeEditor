import React, {
  RefObject,
  useEffect,
  useState,
  useRef,
  ReactElement,
} from "react";
import ReactDOM from "react-dom";
import { useStore } from "../../utils/useStore";
import { useDebounce } from "../../utils/useDebounce";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import axios, { CancelTokenSource } from "axios";
import { PDFDocumentProxy, PDFRenderTask } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CancelToken = axios.CancelToken;
let source: CancelTokenSource | null = null;

export const Viewer = (props: { templateRef?: RefObject<HTMLDivElement> }) => {
  const { store } = useStore();
  const [countPages, setCountPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  const debouncedStore = useDebounce(store.profile, 300);
  const documentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null); // bad approach

  let renderTask: PDFRenderTask | null = null;

  useEffect(() => {
    (async function () {
      const pdf = await loadPdfDocument();

      if (pdf) {
        setCountPages(pdf?.numPages);
      }
    })();
  }, []);

  useEffect(() => {
    updatePdfDocument();
  }, [debouncedStore]);

  async function loadPdfDocument(): Promise<PDFDocumentProxy | undefined> {
    if (renderTask) {
      renderTask.cancel();
    }
    // if (!renderTask?.promise.isRejected) {
    //   return;
    // }
    const pdf = await pdfjs.getDocument("/resume.pdf").promise;
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 0.8 });
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    renderTask = page.render(renderContext);

    renderTask.promise.then(() => {}, loadPdfDocument);

    return pdf;
  }

  const updatePdfDocument = () => {
    if (source) {
      source.cancel("Cancel previous request");
    }

    source = CancelToken.source();

    axios
      .post(
        "/render_pdf",
        {
          firstName: store.profile.firstName,
          lastName: store.profile.lastName,
          summary: store.profile.summary,
        },
        {
          cancelToken: source.token,
        }
      )
      .then(async (response) => {
        const pdf = await loadPdfDocument();

        if (pdf) {
          setCountPages(pdf?.numPages);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      ref={documentRef}
      style={{
        width: "fit-content",
        margin: "36px auto",
      }}
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
