import React, { useState } from "react";
import { Button, Row, Col } from "antd";
import { SocialLink as Link } from "../../types";
import { SocialLink } from "../SocialLink";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
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
      <Row key={link.id} className="full-width" align="middle">
        <Col span={23}>
          <SocialLink
            link={link}
            onLinkChanged={(link) => onLinkPropertyChanged(index, link)}
          />
        </Col>
        <Col span={1}>
          <Button
            type="text"
            shape="circle"
            icon={<DeleteOutlined />}
            size="small"
            onClick={() => {}}
          />
        </Col>
      </Row>
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
        {links.map((link) => getRenderedItem(link))}
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
