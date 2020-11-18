import React, { RefObject, useEffect, useState } from "react";
import { useStore } from "../../utils/useStore";
import { useDebounce } from "../../utils/useDebounce";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import axios from "axios";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Viewer = (props: { templateRef?: RefObject<HTMLDivElement> }) => {
  const { store } = useStore();

  const [iframeKey, setIframeKey] = useState<number>(new Date().getTime());
  const [countPages, setCountPages] = useState(1);

  const debouncedStore = useDebounce(store.profile, 1000);

  // automatic rerendering doesn't work
  useEffect(() => {
    generatePdf();
  }, [debouncedStore]);

  const generatePdf = () => {
    axios
      .post("/render_pdf", {
        firstName: store.profile.firstName,
        lastName: store.profile.lastName,
        summary: store.profile.summary,
      })
      .then((response) => {
        setIframeKey(new Date().getTime());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        width: "fit-content",
        margin: "16px auto",
      }}
    >
      <Document
        // key={iframeKey}
        file={"/resume.pdf"}
        onLoadSuccess={({ numPages }) => setCountPages(numPages)}
      >
        <Page pageNumber={1} />
      </Document>
    </div>

    // <iframe
    //   key={iframeKey}
    //   src="http://localhost:3005/resume.pdf"
    //   style={{ width: "100%", height: "100%" }}
    // />
  );
};
