import { useState } from "react";
import { Menu, Drawer } from "antd";
import IconsComponent from "../components/icons-component";

const Sider = () => {
  const [openKeys, setOpenKeys] = useState(["Overview"]);
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <Menu
        expandIcon
        mode="inline"
        openKeys={openKeys}
        className={`sidebar md_hide ${!collapse && "sidebar_width"} `}
        inlineCollapsed={collapse}
      >
        {!collapse && (
          <div className="d-flex justify-content-center">
            <div className="sidebar_tag p-4 pt-2 pb-2 mt-4 mb-4">
              <button className="generate_invoice_btn">Generate Invoice</button>
            </div>
          </div>
        )}
        <h5 className="mt-4 menu_items ms-4">{!collapse && "Main"}</h5>
        <Menu.Item
          className="menu_items"
          key="Overview"
          icon={<IconsComponent props="overview" />}
        >
          {!collapse && "Overview"}
        </Menu.Item>
        <h5 className="menu_items ms-4 mt-5">{!collapse && "Payments"}</h5>
        <Menu.Item
          className="menu_items"
          key="All Payments"
          icon={<IconsComponent props="all payments" />}
        >
          {!collapse && "All Payments"}
        </Menu.Item>
        <Menu.Item
          className="menu_items"
          key="Reconcilled Payments"
          icon={<IconsComponent props="reconcilled payments" />}
        >
          {!collapse && "Reconcilled Payments"}
        </Menu.Item>
        <Menu.Item
          className="menu_items"
          key="Un-Reconcilled Payments"
          icon={<IconsComponent props="unreconcilled payments" />}
        >
          {!collapse && "Un-Reconcilled Payments"}
        </Menu.Item>
        <Menu.Item
          className="menu_items"
          key="Manual Settlement"
          icon={<IconsComponent props="manual settlement" />}
        >
          {!collapse && "Manual Settlement"}
        </Menu.Item>
        <h5 className="menu_items ms-4 mt-5">{!collapse && "Orders"}</h5>
        <Menu.Item
          className="menu_items"
          key="All Orders"
          icon={<IconsComponent props="all orders" />}
        >
          {!collapse && "All Orders"}
        </Menu.Item>
        <Menu.Item
          className="menu_items"
          key="Pending Orders"
          icon={<IconsComponent props="pending orders" />}
        >
          {!collapse && "Pending Orders"}
        </Menu.Item>
        <Menu.Item
          className="menu_items"
          key="Reconcilled Orders"
          icon={<IconsComponent props="reconcilled orders" />}
        >
          {!collapse && "Reconcilled Orders"}
        </Menu.Item>
        <Menu.Item
          className="menu_items"
          key="Merchant Profile"
          icon={<IconsComponent props="merchant profile" />}
        >
          {!collapse && "Merchant Profile"}
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Sider;
