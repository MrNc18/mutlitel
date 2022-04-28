import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
 
import Vendors from "../components/atoms/Vendors";

function IpTelephony() {
  return (
    <>
    <LandingPage>
      <ServiceBanner title="IP Telephony" />
      <Vendors />
    
    </LandingPage>
    </>
  );
}

export default IpTelephony;
