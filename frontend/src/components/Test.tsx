import React, { useRef, useEffect, RefObject } from "react";

export const Test = (props: { componentRef: RefObject<HTMLDivElement> }) => {
  // const componentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log((props.componentRef.current as HTMLDivElement)!.innerHTML);
  // }, []);

  return (
    <div ref={props.componentRef}>
      <div
        style={{
          border: "1px dotted blue",
          padding: "16px",
          backgroundColor: "yellow",
        }}
      >
        <h2>Test component</h2>
        <div style={{ display: "-webkit-flex", WebkitAlignItems: "center" }}>
          <div style={{ width: "30%", border: "1px solid red" }}>
            <img
              style={{ width: "100px", height: "100px" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            Darya
          </div>
          <div style={{ width: "30%", border: "1px solid green" }}>Markova</div>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  );
};
