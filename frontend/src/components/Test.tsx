import React, { useState, useEffect } from "react";
import { DraggableList } from "../shared/DraggableList/DraggableList";

// https://codesandbox.io/s/k260nyxq9v?file=/index.js
export const Test = () => {
  const [items, setItems] = useState<any[]>([]);
  const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    padding: "16px",
    border: "1px solid red",
    background: isDragging ? "lightgreen" : "grey",
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: "8px",
    margin: "16px 24px",
    width: 250,
  });

  useEffect(() => {
    setItems(
      Array.from({ length: 5 }, (v, k) => k).map((k) => ({
        id: `item-${k}`,
        content: `item ${k}`,
      }))
    );
  }, []);

  return (
    <DraggableList
      items={items}
      onItemsReordered={(items) => setItems(items)}
      getRenderedItem={(item) => <div>{item.content}</div>}
      getItemStyle={getItemStyle}
    />
  );
};
