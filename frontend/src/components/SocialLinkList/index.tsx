import React, { useState, useEffect } from "react";
import { SocialLink as Link } from "../../types";
import { SocialLink } from "../SocialLink";
import { DraggableList } from "../../shared/DraggableList/DraggableList";
import "./index.css";

export const SocialLinkList = (props: {
  onSocialLinksListChanged: (links: Link[], property: string) => void;
}) => {
  const [links, setLinks] = useState<Array<Link & { isActive?: boolean }>>([]);

  useEffect(() => {
    props.onSocialLinksListChanged(links, "links");
  }, [links]);

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
            return {
              ...draggableStyle,
            };
          }}
        />
      </div>
    </>
  );
};
