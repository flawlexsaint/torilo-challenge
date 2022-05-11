import ChartComponent from "../../shared/components/chartComponent";
import { DatePicker, Menu, Dropdown, Space } from "antd";
import IconsComponent from "../../shared/components/icons-component";
import DropdownComponent from "../../shared/components/dropdown";
import FloatInput from "../../shared/components/float-input";
import { DownOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const menu = (
  <Menu
    items={[
      {
        label: <a href="#">Option A</a>,
      },
    ]}
  />
);

const MerchantModule = () => {
  return (
    <>
      <div className="merchant_bg">
        <div className="row">
          {[1, 2, 3, 4].map((transactions) => (
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="bg-white p-4">
                <div className="d-flex justify-content-between">
                  <div className="me-3">
                    <h6 className="transaction_header">
                      Daily Transaction Volume
                    </h6>
                    <h5 className="transaction_body">2,342</h5>
                  </div>
                  <IconsComponent props="small chart" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="bg-white p-4">
              <div className="d-flex align-items-center mb-3 xs_block justify-content-between">
                <h1 className="chart_date_title">Today: 5, Aug 2018</h1>
                <div className="d-flex align-items-center xs_block">
                  <Space size={6}>
                    <RangePicker className="range_picker" picker="week" />
                  </Space>
                  <div className="d-flex align-items-center mt-2 mt-md-0">
                    <button className="ms-md-4 me-2 arrow_btn">
                      <i className="material-icons chevron_arrows">
                        chevron_left
                      </i>
                    </button>
                    <button className="arrow_btn">
                      <i className="material-icons chevron_arrows">
                        chevron_right
                      </i>
                    </button>
                  </div>
                </div>
              </div>
              <ChartComponent />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-white p-4 py-5">
              <div className="row">
                <div className="col-12">
                  <h4 className="order_header">Orders</h4>
                  <p className="order_body">
                    Pending Orders:
                    <span className="fw-bold text-warning">20</span>
                  </p>
                  <p className="order_body">
                    Reconcilled Orders:
                    <span className="fw-bold text-success">80</span>
                  </p>
                  <p className="order_body">
                    Total Orders:
                    <span className="fw-bold text-primary">100</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 py-5 mt-3">
              <div className="row">
                <div className="col-12">
                  <h4 className="order_header">Payments</h4>
                  <p className="order_body">
                    Un-reconcilled Payments:
                    <span className="fw-bold text-warning">20</span>
                  </p>
                  <p className="order_body">
                    Reconcilled Payments:
                    <span className="fw-bold text-success">80</span>
                  </p>
                  <p className="order_body">
                    Total Payments:
                    <span className="fw-bold text-primary">100</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <h4 className="payment_title mb-0">Payments</h4>
            <div className="d-flex xs_block align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <p className="mb-0 xs_hide md_hide">Showing</p>
                <div className="xs_hide md_hide">
                  <DropdownComponent
                    props={{
                      placeholder: 20,
                      items: [10, 20, 50, 100],
                      style: "border-0 bg-transparent",
                    }}
                  />
                </div>
                <p className="mb-0 ms-3 me-5 xs_hide md_hide">
                  out of 500 payments
                </p>
                <FloatInput
                  props={{
                    type: "search",
                    placeholder: "Search payments",
                    style: "border-0 bg-transparent border-bottom",
                  }}
                />
              </div>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-3">Show</p>
                <DropdownComponent
                  props={{
                    placeholder: "All",
                    items: [
                      "All",
                      "Recncilled",
                      "Un-reconclled",
                      "Settled",
                      "Unsettled",
                    ],
                    style: "border-0 bg-transparent h_50",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="xs_scroll">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <td scope="col">Item Type</td>
                    <td scope="col">Price</td>
                    <td scope="col">Transaction No</td>
                    <td scope="col">Time</td>
                    <td scope="col">Status</td>
                    <td scope="col"></td>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "success",
                    "warning",
                    "success",
                    "success",
                    "warning",
                    "muted",
                    "success",
                    "muted",
                    "warning",
                  ].map((item) => (
                    <tr className="border-bottom">
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="initial_bg d-flex align-items-center justify-content-center text-white">
                            VW
                          </div>
                          <p className="mb-0 ms-3 table_text item_text">
                            Apple Mac Book 15” 250 SSD 12GB
                          </p>
                        </div>
                      </td>
                      <td className="table_text">$73430</td>
                      <td className="table_text">1234567890</td>
                      <td className="table_text">
                        <div className="d-flex table_text align-items-center"></div>
                        <p className="mb-0">12:30</p>
                      </td>
                      <td className="table_text">
                        <button
                          className={`status text-${item} d-flex align-items-center`}
                        >
                          <div className={`dot bg-${item} me-3`}></div> Pending
                        </button>
                      </td>
                      <td className="table_text">
                        <Dropdown overlay={menu}>
                          <a onClick={(e) => e.preventDefault()}>
                            <Space>
                              <DownOutlined />
                            </Space>
                          </a>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex mt-4 align-items-center justify-content-between">
              <p className="mb-0 xs_hide sm_hide">
                Showing 1 to 10 of 500 entries
              </p>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MerchantModule;
