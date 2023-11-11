import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Items from "./data_navigation";
import { RightOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

import "./Layout.scss";
import CustomModalProfile from "../modal/profile/profile";

const ComponentLayout = ({ children }) => {
  const navigate = useNavigate();

  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  // const [breadcrumb, setBreadcrumb] = useState('');

  const onClickMenu = (info) => {
    const { key } = info;

    navigate(`/${key}`);
    // setBreadcrumb(info.key);
  };

  // const onHandleSignOut = () => {
  // 	localStorage.setItem('token', 'logout');
  // 	window.location.replace('/');
  // };
  const onProfile = () => {
    window.location = "#modal-profile";
  };

  const roleId = parseInt(localStorage.getItem("lnkl34r"));

  return (
    <Layout id="layout">
      <Sider theme="light" collapsible collapsed={collapsed}>
        <div className={`logo ${collapsed ? "active" : null} `}>
          {collapsed ? "D" : "Deri"}
        </div>
        <Menu
          theme="light"
          mode="inline"
          className="menu-list"
          defaultSelectedKeys={["Dashboard"]}
          onClick={(info) => onClickMenu(info)}
          items={parseInt(roleId) === 1 ? Items.AdminRoute : Items.MemberRoute}
        />
      </Sider>

      <Layout className="site-layout">
        <Header className="header-layout-background">
          <div className="triger-layout">
            <button
              className={`trigger ${collapsed ? "active" : null}`}
              onClick={() => setCollapsed(!collapsed)}
            >
              <RightOutlined />
            </button>
          </div>

          <div className="client-profile" onClick={() => onProfile()}>
            <img
              width="30px"
              src="https://cdn.pixabay.com/photo/2016/08/31/11/55/icon-1633250_640.png"
              alt="user-from-google"
            />
            <span>Michel</span>
            <RightOutlined className="icon-profile" />
          </div>
        </Header>

        <Content
          className="site-layout-background"
          style={{
            margin: "10px 16px 0px 16px",
          }}
        >
          {children}
        </Content>
      </Layout>
      <CustomModalProfile />
    </Layout>
  );
};
export default ComponentLayout;
