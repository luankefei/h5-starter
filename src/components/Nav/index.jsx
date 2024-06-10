import React, { useEffect, useState } from "react";
// import { useSwiper } from "swiper/react";
// import { Link } from 'react-scroll'
import { Popup, List } from "antd-mobile";

import { NavContainer } from "./nav.style";
import logo from "../../assets/image/logo.png";
import menuIcon from "../../assets/image/menu@2x.png";

const menus = [
  {
    id: "about",
    href: "about",
    title: "ABOUT　US",
  },
  {
    id: "information",
    href: "information",
    title: "メッセージ",
  },
  {
    id: "introduce",
    href: "introduce",
    title: "講師陣紹介",
  },
  {
    id: "seminar",
    href: "seminar",
    title: "開催中のセミナー",
  },
  {
    id: "reason",
    href: "reason",
    title: "なぜ勉強が必要か",
  },
  {
    id: "your-voice",
    href: "voice",
    title: "お客様の声",
  },
  {
    id: "video",
    href: "video",
    title: "投資動画の受け取り",
  },
  {
    id: "FAQ",
    href: "FAQ",
    title: "よくある質問",
  },
];

function Navigation({ swiper }) {
  const [visible, setVisible] = useState(false);
  // const swiper = useSwiper();

  // const onNavClick = (id) => () => {};

  return (
    <>
      <NavContainer>
        <img src={logo} className="logo" />

        <>
          <img
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
                // <Link
                //   key={menu.id}
                //   offset={-66}
                //   to={menu.href}
                //   smooth={true}
                //   duration={500}
                // >
                <a href={`#${menu.id}`}>
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
                  >
                    {menu.title}
                  </List.Item>
                </a>
                // </Link>
              ))}
            </List>
          </Popup>
        </>
      </NavContainer>
    </>
  );
}

export default Navigation;
