import React, { FunctionComponent } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const withDroppable = (Component: FunctionComponent<any>) => {
  return function (props: {
    items: any[];
    getRenderedItem: () => FunctionComponent<any>;
  }) {
    return (
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <Component {...props} provider={provided} snapshot={snapshot} />
          )}
        </Droppable>
      </DragDropContext>
    );
  };
};
