import React from 'react'
import ServiceBanner from '../components/atoms/ServiceBanner'
import LandingPage from '../components/LandingPage'
import Breadcrumb from "react-bootstrap/Breadcrumb";
const Webservices = () => {

  function Webservice({ data }) {
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
        <div className='dotcol'>
          <ul>
            <li>{data.tag1}</li>
          </ul>
        </div>

        <div className='dotcol'>
          <ul>
           <b> <li>{data.tag2}</li></b>
          </ul>
          <div className='web_service dotcol'>
          <ul>
            <li>{data.tag3}</li>
            <li>{data.tag4}</li>  
            <li>{data.tag5}</li>  
            <li>{data.tag6}</li>
          </ul>
        </div>
        </div>
  </div>

      </>
    )
  }


  const obj = {

    heading1: "Web Services",
    description: "We present a set of web solutions that aim to improve the visibility of companies and their businesses onthe internet. These solutions bring immediate results with minimal costs and greater visibility rate for the  target audience ",
    heading2: "Web Solution offerd by Multitel: ",
    tag1: "Websites(institutioanl sites ,Portals and online stores)",
    tag2: " Web Marketting",
    tag3:"Definition of the Communication Strategy",
    tag4:"Social network management",
    tag5:"Publications/Sponsored Publications",
    tag6:"SEO optimization"
  }
  return (
    <>

      <LandingPage woproducts >
        <ServiceBanner title="Web Services" regnPage />

        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-6 col-4 bredcrumb">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Start</Breadcrumb.Item>

                <Breadcrumb.Item href=" ">Digital</Breadcrumb.Item>
                <Breadcrumb.Item active style={{ color: "#0C7CB8" }}>WEB Services</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
      <div className="container">
      <div className="row">
            <div style={{ display: "flex" }} className="pt-5  col-12 col-lg-4">
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
            <div className=" pt-5 col-lg-8">
              <Webservice data={obj} />
            </div>
          </div>
      </div>
        </div>
      </LandingPage>
    </>
  )
}

export default Webservices