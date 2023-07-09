import React from "react";
import { Menu } from "antd";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Item 1", "1", <PieChartOutlined />),
  getItem("Item 2", "2", <DesktopOutlined />),
  getItem("Navigation Two", "sub1", <UserOutlined />, [
    getItem("Option 1", "3"),
    getItem("Option 2", "4"),
    getItem("Option 3", "5"),
  ]),
  getItem("Item 3", "6", <SettingOutlined />),
];

export const MainMenu = ({ theme, mode }) => {
  return (
    <Menu theme={theme} defaultSelectedKeys={["1"]} mode={mode} items={items} />
  );
};

MainMenu.defaultProps = {
  theme: "dark",
  mode: "horizontal",
};
