import React, { useState } from "react";
import { SocialLink as Link } from "../../types";
import { SocialLink } from "../SocialLink";
import { DraggableList } from "../../shared/DraggableList/DraggableList";
import "./index.css";

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

  return (
    <>
      <div className="widget-link__list">
        <DraggableList
          items={links}
          getItemInstance={() => {
            return {
              id: links.length,
              isActive: true,
              label: "",
              href: "",
            };
          }}
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
    </>
  );
};
