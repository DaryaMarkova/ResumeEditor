import React, { RefObject, useEffect, useState, useRef } from "react";
import { useStore } from "../../utils/useStore";
import { useDebounce } from "../../utils/useDebounce";
import { pdfjs } from "react-pdf";
import axios, { CancelTokenSource } from "axios";
import fileDownload from "js-file-download";
import { PDFDocumentProxy, PDFRenderTask } from "pdfjs-dist";
import { Button } from "antd";
import "./index.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CancelToken = axios.CancelToken;
let source: CancelTokenSource | null = null;

export const Viewer = (props: { templateRef?: RefObject<HTMLDivElement> }) => {
  const { store } = useStore();
  const [countPages, setCountPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const debouncedStore = useDebounce(store.profile, 300);
  const documentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    // not on the whole storage update
    updatePdfDocument();
  }, [debouncedStore]);

  async function loadPdfDocument(): Promise<PDFDocumentProxy | undefined> {
    if (renderTask) {
      renderTask.cancel();
    }

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
    setLoading(true);

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

        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const onDownloadPdfButtonClicked = () => {
    axios
      .post(
        "/pdf",
        {},
        {
          responseType: "blob",
        }
      )
      .then((response) => fileDownload(response.data, "resume.pdf"))
      .catch((err) => console.log(err));
  };

  return (
    <div ref={documentRef} className="viewer">
      <div className="viewer__loading">
        {loading && <span>&nbsp; Loading...</span>}
      </div>
      <div className="viewer__canvas">
        <canvas ref={canvasRef}></canvas>
        {!loading && (
          <Button
            className="viewer__downloadbtn"
            type="primary"
            onClick={onDownloadPdfButtonClicked}
          >
            Download pdf
          </Button>
        )}
      </div>
    </div>
  );
};
