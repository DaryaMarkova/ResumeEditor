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
import axios from "axios";
import {
  PDFDocumentProxy,
  PDFPageProxy,
  PDFRenderParams,
  PDFRenderTask,
} from "pdfjs-dist";
import { render } from "@testing-library/react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Viewer = (props: { templateRef?: RefObject<HTMLDivElement> }) => {
  const { store } = useStore();

  const [iframeKey, setIframeKey] = useState<number>(new Date().getTime());
  const [countPages, setCountPages] = useState(1);

  const pageNumber = 1;
  const debouncedStore = useDebounce(store.profile, 300);
  const documentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<any>(null); // bad approach

  let renderTask: PDFRenderTask | null = null;

  async function loadPdf() {
    if (renderTask) {
      renderTask.cancel();
    }

    // if (!renderTask?.promise.isRejected) {
    //   return;
    // }

    // const canvas = document.createElement("canvas");
    const pdf = await pdfjs.getDocument("/resume.pdf").promise;
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 0.8 });

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    if (context) {
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      renderTask = page.render(renderContext);

      renderTask.promise.then(function () {
        console.log("pdf has been reloaded");
      }, loadPdf);

      // documentRef.current?.childNodes.forEach((child) => child.remove());
      // documentRef.current?.appendChild(canvas);
    }
  }

  useEffect(() => {
    loadPdf();
  }, []);

  useEffect(() => {
    generatePdf();
  }, [debouncedStore]);

  const generatePdf = () => {
    // cancel axios request if newone is upcoming
    axios
      .post("/render_pdf", {
        firstName: store.profile.firstName,
        lastName: store.profile.lastName,
        summary: store.profile.summary,
      })
      .then(async (response) => {
        // await renderPdfToCanvas();
        // setIframeKey(new Date().getTime());
        loadPdf();
      })
      .catch((err) => console.log(err));
  };

  const onLoadSuccess = (pdf: PDFDocumentProxy) => {
    setCountPages(pdf.numPages);
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

  return (
    <>
      <div
        style={{
          width: "fit-content",
          margin: "16px auto",
        }}
      >
        <div ref={documentRef}>
          <Document
            file={"/resume.pdf"}
            key={iframeKey}
            // loading={() => {
            //   const childNode = documentRef.current?.childNodes[0];
            //   const cloneNode = childNode?.cloneNode(true);

            //   return (
            //     <div
            //       ref={(nodeElement) => {
            //         nodeElement &&
            //           cloneNode &&
            //           nodeElement.appendChild(cloneNode);
            //       }}
            //     ></div>
            //   );
            // }}
            onLoadSuccess={onLoadSuccess}
          >
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </>
    // <iframe
    //   key={iframeKey}
    //   src="http://localhost:3005/resume.pdf"
    //   style={{ width: "100%", height: "100%" }}
    // />
  );
};
