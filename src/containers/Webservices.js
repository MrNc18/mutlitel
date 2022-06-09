import React from 'react'
import ServiceBanner from '../components/atoms/ServiceBanner'
import LandingPage from '../components/LandingPage'
import Breadcrumb from "react-bootstrap/Breadcrumb";
const Webservices = () => {

  function Webservice({ data }) {
    return (
      <>
        <div>
          <h2 style={{ color: "#1D3557" }}>{data.heading1}</h2>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        <div>
          <h6 style={{ color: "#1D3557" }}>{data.heading2}</h6>
        </div>
        <div className='dotcol'>
          <ul>
            <li>{data.tag}</li>
            <li>{data.tag1}</li>
          </ul>

        </div>

      </>
    )
  }


  const obj = {

    heading1: "Web Services",
    description: "We present a set of web solution that aim to improve the visibility of  companies and their  bussiness ofthe internet. ",
    heading2: "Web Solution offerd by Multitel: ",
    tag: "Websites(institutioanl sites ,Portals and online stores)",
    tag1: " Web Marketting",


  }
  return (
    <>

      <LandingPage>
        <ServiceBanner title="Web Services" />

        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Digital</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>WEB Services</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="row">
            <div style={{ display: "flex" }} className="pt-5  col-12 col-md-4">
              <img
                className="img-fluid"
                height={250}
                width={350}
                style={{ borderRadius: "10px" }}
                src="https://images.unsplash.com/photo-1539193143244-c83d9436d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
                alt=""
                srcset=""
              />
            </div>
            <div className=" pt-5 col-md-8">
              <Webservice data={obj} />
            </div>
          </div>
        </div>
      </LandingPage>
    </>
  )
}

export default Webservices