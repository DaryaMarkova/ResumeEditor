import React, { RefObject, useEffect, useState } from "react";
import { useStore } from "../../utils/useStore";
import { useDebounce } from "../../utils/useDebounce";
import axios from "axios";

export const Viewer = (props: { templateRef?: RefObject<HTMLDivElement> }) => {
  const { store } = useStore();
  const debouncedStore = useDebounce(store, 500);
  const [iframeKey, setIframeKey] = useState<number>(new Date().getTime());

  useEffect(() => {
    generatePdf();
  }, [debouncedStore]);

  // PASS SOME DATA HERE
  const generatePdf = () => {
    axios
      .post("http://localhost:3005/render_pdf")
      .then(({ data }) => {
        console.log(data);
        setIframeKey(new Date().getTime());
      })
      .catch((err) => console.log(err));
  };

  // reloading iframe
  return (
    <iframe
      key={iframeKey}
      src="http://localhost:3005/resume.pdf"
      style={{ width: "100%", height: "100%" }}
    />
  );
};
