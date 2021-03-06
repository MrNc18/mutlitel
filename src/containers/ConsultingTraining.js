import React from "react";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";

import Breadcrumb from "react-bootstrap/Breadcrumb";
const ConsultingTraining = () => {
  function Consultingtraining({ data }) {
    return (
      <>
        <div className="pt-4">
          <div>
            <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
          </div>
          <div>
            <p>{data.description}</p>
          </div>
          <div>
            <h6 style={{ color: "#1D3557" }}>{data.heading2}</h6>
          </div>
          <div className="dotcol">
            <ul>
              <li>{data.tag1}</li>
              <li>{data.tag2}</li>
              <li>{data.tag3}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  const obj = {
    heading1: " On-Job Consulting and Training ",
    description:
      "The On-job Consultancy and Training service strengthens the close relationship and partnership thatexists with our customers in problem solving, support, design and implementation of tailor-madesolutions, as well as training our customersâ€™ teams in the following areas",

    heading2: "Areas",
    tag1: "Networks (WAN, LAN, WLAN, Telecommunications and Equipment)",
    tag2: "Information security (Definition of policies and firewalls) ",
    tag3: "Information systems (Servers, Virtualization, NMS, Storage and Backup)",
  };
  return (
    <>
      <LandingPage woproducts>
        <ServiceBanner title="Consulting and Training On Job" regnPage />
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Digital</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>
                  {" "}
                  On-Job Consulting and Training
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div
                style={{ display: "flex" }}
                className="pt-5  col-12 col-lg-4"
              >
                <img
                  className="img-fluid"
                  height={250}
                  width={350}
                  style={{ borderRadius: "10px" }}
                  src="https://images.unsplash.com/photo-1539193143244-c83d9436d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
                  alt="image here"
                  srcset=""
                />
              </div>
              <div className=" pt-5 col-lg-8">
                <Consultingtraining data={obj} />
              </div>
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  );
};

export default ConsultingTraining;
