import React, { useState } from "react";
import { Popup, List } from "antd-mobile";

import { NavContainer } from "./nav.style";
import logo from "../../assets/image/logo.png";
import menuIcon from "../../assets/image/menu@2x.png";

const menus = [
  {
    id: "about",
    href: "#about",
    title: "ABOUT　US",
  },
  {
    id: "information",
    href: "#information",
    title: "メッセージ",
  },
  {
    id: "introduce",
    href: "#introduce",
    title: "講師陣紹介",
  },
  {
    id: "seminar",
    href: "#seminar",
    title: "開催中のセミナー",
  },
  {
    id: "reason",
    href: "#reason",
    title: "なぜ勉強が必要か",
  },
  {
    id: "your-voice",
    href: "#voice",
    title: "お客様の声",
  },
  {
    id: "video",
    href: "#form",
    title: "投資動画の受け取り",
  },
  {
    id: "faq",
    href: "#FAQ",
    title: "よくある質問",
  },
];

function Navigation({ closePopup }) {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(false)
    closePopup()
  }

  return (
    <>
      <NavContainer>
        <img src={logo} className="logo" alt="logo"/>

        <>
          <img
            alt="menu"
            src={menuIcon}
            className="menu-icon"
            onClick={() => setVisible(!visible)}
          />
          <Popup
            visible={visible}
            onMaskClick={() => {
              setVisible(false);
            }}
            maskClassName="nav-popup"
            bodyClassName="nav-popup-body"
            position="right"
            bodyStyle={{ width: "51vw" }}
          >
            <List className="nav-list">
              {menus.map((menu, index) => (
                <a href={menu.href} key={menu.id}>
                  <List.Item
                    key={menu.id}
                    arrow={false}
                    style={{
                      fontSize: "1rem",
                      lineHeight: 2.2,
                      color: "#545454",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                    onClick={handleClick}
                  >
                    {menu.title}
                  </List.Item>
                </a>
              ))}
            </List>
          </Popup>
        </>
      </NavContainer>
    </>
  );
}

export default Navigation;
