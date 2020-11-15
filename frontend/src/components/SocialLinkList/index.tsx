import React, { useState } from "react";
import { Button, Row, Col } from "antd";
import { SocialLink as Link } from "../../types";
import { SocialLink } from "../SocialLink";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.css";
import { DraggableList } from "../../shared/DraggableList/DraggableList";

export const SocialLinkList = (props: {}) => {
  const [links, setLinks] = useState<Array<Link & { isActive?: boolean }>>([]);

  const onLinkPropertyChanged = (index: number, updatedLink: Link) => {
    setLinks(
      links.map((link, _index) => (_index == index ? updatedLink : link))
    );
  };

  const getRenderedItem = (link: Link & { isActive?: boolean }) => {
    const index = links.indexOf(link);

    return (
      <SocialLink
        link={link}
        onLinkChanged={(link) => onLinkPropertyChanged(index, link)}
      />
    );
  };

  const addLink = () => {
    setLinks([
      ...links.map((it) => {
        return { ...it, isActive: false };
      }),
      {
        id: links.length,
        isActive: true,
        label: "",
        href: "",
      },
    ]);
  };

  return (
    <>
      <div className="widget-link__list">
        <DraggableList
          items={links}
          onItemsChanged={(items) => setLinks(items as Link[])}
          getRenderedItem={(item) => getRenderedItem(item as Link)}
          getItemStyle={(isDragging: boolean, draggableStyle: any) => {
            // if (isDragging) {
            //   return {
            //     ...draggableStyle,
            //     background: "rgb(242, 245, 250)",
            //   };
            // }

            return {
              ...draggableStyle,
            };
          }}
        />
      </div>

      <Button
        type="link"
        onClick={addLink}
        className="widget-skill__list-addbutton"
      >
        <PlusOutlined />
        Add link
      </Button>
    </>
  );
};
