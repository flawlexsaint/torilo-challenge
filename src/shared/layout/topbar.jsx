import FloatInput from "../components/float-input";
import IconsComponent from "../components/icons-component";
import { avatar } from "../components/image-component";

const Topbar = () => {
  return (
    <>
      <div className="container-fluid shadow-sm mb-1">
        <div className="d-flex py-4 align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <h6 className="me-5 brand_title mb-0">TransMonitor</h6>
            <div className="xs_hide">
              <FloatInput
                props={{
                  type: "search",
                  placeholder: "Search",
                  style: "topbar_search",
                }}
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <span className="xs_hide">
              <a href="#" className="topbar_link text-decoration-none">
                Support
              </a>
            </span>
            <span className="xs_hide">
              <a href="#" className="mx-5 topbar_link text-decoration-none">
                FAQ
              </a>
            </span>
            <span className="xs_hide">
              <a href="#" className="text-decoration-none me-5">
                <IconsComponent props="notification" />
              </a>
            </span>
            <div className="d-flex align-items-center">
              <div className="me-3">
                <h6 className="mb-0 topbar_link text-end">Hello</h6>
                <h6 className="mb-0 topbar_link text-end">Oluwaleke Ojo</h6>
              </div>
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
