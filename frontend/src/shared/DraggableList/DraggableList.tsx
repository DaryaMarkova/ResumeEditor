import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DroppableStateSnapshot,
  DraggingStyle,
  NotDraggingStyle,
} from "react-beautiful-dnd";
import { Button, Row, Col } from "antd";
import { IdentifiedEntity } from "../../types";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

export const DraggableList = (props: {
  items: IdentifiedEntity[];
  getItemInstance: () => IdentifiedEntity;
  onItemsChanged: (items: IdentifiedEntity[]) => void;
  getRenderedItem: (item: IdentifiedEntity) => JSX.Element;
  getItemStyle: (
    isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined
  ) => object;
}) => {
  const [items, setItems] = useState<IdentifiedEntity[]>([]);

  useEffect(() => setItems(props.items), [props.items]);

  const reorder = (list: Array<any>, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    props.onItemsChanged(newItems);
  };

  const onItemDeleted = (index: number) => {
    const newItems = items.slice(0, index).concat(items.slice(index + 1));
    props.onItemsChanged(newItems);
  };

  const onItemAdded = () => {
    const newItems = [
      ...items.map((it) => {
        return { ...it, isActive: false };
      }),
      props.getItemInstance(),
    ];

    props.onItemsChanged(newItems);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={props.getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Row align="middle">
                        <Col span={23}>{props.getRenderedItem(item)}</Col>
                        <Col span={1}>
                          <Button
                            type="text"
                            shape="circle"
                            icon={<DeleteOutlined />}
                            size="small"
                            onClick={() => onItemDeleted(index)}
                          />
                        </Col>
                      </Row>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Button
        type="link"
        shape="round"
        size="small"
        icon={<PlusOutlined />}
        onClick={onItemAdded}
        style={{ marginLeft: "-10px" }}
      >
        Add
      </Button>
    </>
  );
};
