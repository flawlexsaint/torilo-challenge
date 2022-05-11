import { Menu, Drawer } from "antd";
import { useState } from "react";
import MerchantModule from "../../page/merchant-module/merchant-module";
import IconsComponent from "../components/icons-component";
import Sider from "./sidebar";
import Topbar from "./topbar";

const Layout = () => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      <Topbar />
      <i
        onClick={toggle}
        class="material-icons chevron_arrows drawer_icon lg_hide xl_hide"
      >
        menu
      </i>
      <div className="d-flex">
        <Sider />
        <div className="vw-100">
          <MerchantModule />
        </div>
      </div>

      <Drawer
        closable={false}
        placement="left"
        width={270}
        onClose={toggle}
        visible={collapse}
      >
        <Menu expandIcon mode="inline">
          <div className="d-flex justify-content-center">
            <div className="sidebar_tag p-4 pt-2 pb-2 mt-4 mb-4">
              <button className="generate_invoice_btn">Generate Invoice</button>
            </div>
          </div>
          <h5 className="mt-4 menu_items ms-4">Main</h5>
          <Menu.Item
            className="menu_items"
            key="Overview"
            icon={<IconsComponent props="overview" />}
          >
            Overview
          </Menu.Item>
          <h5 className="menu_items ms-4 mt-5">Payments</h5>
          <Menu.Item
            className="menu_items"
            key="All Payments"
            icon={<IconsComponent props="all payments" />}
          >
            All Payments
          </Menu.Item>
          <Menu.Item
            className="menu_items"
            key="Reconcilled Payments"
            icon={<IconsComponent props="reconcilled payments" />}
          >
            Reconcilled Payments
          </Menu.Item>
          <Menu.Item
            className="menu_items"
            key="Un-Reconcilled Payments"
            icon={<IconsComponent props="unreconcilled payments" />}
          >
            Un-Reconcilled Payments
          </Menu.Item>
          <Menu.Item
            className="menu_items"
            key="Manual Settlement"
            icon={<IconsComponent props="manual settlement" />}
          >
            Manual Settlement
          </Menu.Item>
          <h5 className="menu_items ms-4 mt-5">Orders</h5>
          <Menu.Item
            className="menu_items"
            key="All Orders"
            icon={<IconsComponent props="all orders" />}
          >
            All Orders
          </Menu.Item>
          <Menu.Item
            className="menu_items"
            key="Pending Orders"
            icon={<IconsComponent props="pending orders" />}
          >
            Pending Orders
          </Menu.Item>
          <Menu.Item
            className="menu_items"
            key="Reconcilled Orders"
            icon={<IconsComponent props="reconcilled orders" />}
          >
            Reconcilled Orders
          </Menu.Item>
          <Menu.Item
            className="menu_items"
            key="Merchant Profile"
            icon={<IconsComponent props="merchant profile" />}
          >
            Merchant Profile
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default Layout;
