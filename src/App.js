import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./App.css";
import Corporate from "./containers/Corporate";
import Home from "./containers/Home";
import Example from "./staticCard";
// import Example from "./containers/example";
import AdLanding from "./components/Admin/AdLanding";
import Categories from "./components/Admin/categories";
import Products from "./components/Admin/products";
import AddProduct from "./components/Admin/AddProduct";
import Dashboard from "./components/Admin/Dashboard";
import Settings from "./components/Admin/settings";
import StaticPage from "./components/Admin/staticPage";
// import InternetServices from "./containers/InternetServices";
import Marketplace from "./containers/Marketplace";
// import NetworkEquipments from "./containers/NetworkEquipments";
import Promotions from "./containers/Promotions";
import OtherProducts from "./containers/OtherProducts";
import ClientRegistration from "./containers/ClientRegistration";
import Account from "./containers/Account";
import CPE from "./containers/CPE";
import EditProfile from "./containers/EditProfile";
import MyProducts from "./containers/MyProducts";
import HelpDesk from "./containers/HelpDesk";
import Invoice from "./containers/Invoice";
import InvoiceDetails from "./containers/InvoiceDetails";
import InternetQualityGraph from "./containers/InternetQualityGraph";
import ForgotPassword from "./containers/ForgotPassword";
import ResetPassword from "./containers/ResetPassword";
import ProductDetail from "./containers/ProductDetail";
import VerifyEmail from "./containers/VerifyEmail";
import RegnConfirmation from "./containers/RegnConfirmation";
import Login from "./components/Admin/Login";
// import store from "./components/redux/store"
import { RedirectComponent } from "./containers/RedirectPage";
import AdPromotions from "./components/Admin/Promotions";
import AdinternetServices from "./components/Admin/internetServices";
import Category from "./containers/Category";
import PromotionDetail from "./containers/PromotionDetail";
import InternetServicesDetail from "./containers/InternetServicesDetail";
import Contact from "./components/Admin/Contact";
import IpTelephony from "./containers/IpTelephony";
import NetworkEquipmentVendors from "./containers/NetworkEquipmentVendors";
import ContactPromotion from "./containers/ContactPromotion";
import ContactOtherProductSerPart from "./containers/ContactOtherProductSerPart";
import ContactTelecom from "./containers/ContactTelecom";
import ContactEquip from "./containers/ContactEquip";
import ContactCPE from "./containers/ContactCPE";
import InformaticAndAccessories from "./containers/InformaticAndAccessories";
import ServicesCategory from "./components/Admin/ServicesCategory";
import WishList from "./containers/WishList";
import VendorDetails from "./containers/VendorDetails";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";
import PaymentMethod from "./containers/PaymentMethod";
import Orders from "./components/Admin/orders";
import { MenuPhase_2 } from "./components/Admin/MenuPhase_2";
import WhoWeR from "./components/Admin/WhoWeR/WhoWeR";
import AdRecruitment from "./components/Admin/WhoWeR/Recruitment";
import AdSustainabilty from "./components/Admin/WhoWeR/Sustainabilty";
import AdNews from "./components/Admin/WhoWeR/New";
import Multipride from "./components/Admin/WhoWeR/Multipride";
import CoorparateBody from "./components/Admin/WhoWeR/CoorparateBody";
import Sustainability from "./containers/Sustainability";
import MultitelPride from "./containers/MultitelPride";
import PrivateNetwork from "./containers/PrivateNetwork";
import News from "./containers/News";
import MissionAndValue from "./containers/MissionAndValue";
import MessageFromManag from "./containers/MessageFromManag";
import CorporateBodies from "./containers/CorporateBodies";
import Networkinfra from "./containers/Networkinfra";
import DataCenter from "./containers/DataCenter";
import ConsultingTraining from "./containers/ConsultingTraining";
import IPvoice from "./containers/IPvoice";
import CyberSecurity from "./containers/CyberSecurity";
import Webservices from "./containers/Webservices";
import AutomationElectric from "./containers/AutomationElectric";
import Software from "./containers/Software";
import VSAT from "./containers/VSAT";
import NewsFirst from "./components/atoms/NewsFirst";
import NewsSecond from "./components/atoms/NewsSecond";
import Recruitment from "./containers/Recruitment";
import RecruitmentForm from "./components/atoms/RecruitmentForm";
import ADPrivateNetwork from "./components/Admin/Telecommunications/PrivateNetwork";
import Tele from "./components/Admin/Telecommunications/Tele";
import VideoConference from "./containers/VideoConference";
import Cpes from "./containers/Cpes";
import WhoWeAre from "./containers/Whoweare";
// import WhoWeAre from "./containers/WhoWeAre";
import Commercial from "./components/atoms/Commercial";
// import GraphicDesigner from "./components/atoms/GraphicDesigner";
import OtherService from "./containers/OtherService";
import SpecialService from "./components/atoms/SpecialService";
import CustomizedService from "./components/atoms/CustomizedService";
import OutSourcing from "./components/atoms/OutSourcing";
import OMG from "./components/atoms/OMG";
import Telecommunication from "./containers/Telecommunication";
import ContactUs from "./containers/ContactUs";
import ContactUsForm from "./components/atoms/ContactUsForm";
import Digitotal from "./containers/Digitotal";
import WhoWeAreSlug from "./containers/WhoWeAreSlug";
import RecruitmentSlug from "./containers/RecruitmentSlug";
import NewsCard from "./components/atoms/NewsCard";
import MarketingandCommunicationTechnique from "./components/atoms/MarketingandCommunicationTechnique";
import OtherServices from "./components/OtherServices";
import CustomizedSolutions from "./containers/CustomizedSolutions";
import Internet from "./containers/Internet";
import Digital from "./containers/Digital";
import SpecialServices from "./containers/SpecialServices";
import InternetUser from "./containers/Internet";

function App() {
  return (
    <>
      <ToastContainer
        transition={Slide}
        position="bottom-center"
        hideProgressBar
        newestOnTop={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Corporate />} />
          <Route path="/home" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/products/:name" element={<ProductDetail />} />
          <Route path="/categories/:slug" element={<Category />} />

          {/* <Route path="/network-equipments" element={<NetworkEquipments />} /> */}
          {/* <Route path="/internet-services" element={<InternetServices />} />    */}
          <Route
            path="/categories/internet-services/:tag"
            element={<InternetServicesDetail />}
          />
          <Route
            path="/categories/promotions/:slug"
            element={<PromotionDetail />}
          />
          {/* <Route path="/otherproducts" element={<OtherProducts />} /> */}
          <Route path="/register" element={<ClientRegistration />} />
          <Route
            path="/register-confirmation/:token"
            element={<RegnConfirmation />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/redirect" element={<RedirectComponent />} />

          <Route path="/cpe" element={<CPE />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdLanding />}>
            <Route path="" element={<Dashboard />} />
            <Route path="categories" element={<Categories />} />
            <Route path="products" element={<Products />} />
            <Route path="products/newproduct" element={<AddProduct />} />
            <Route path="staticpages" element={<StaticPage />} />
            <Route path="settings" element={<Settings />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Service-categories" element={<ServicesCategory />} />
            <Route path="internetServices" element={<AdinternetServices />} />
            <Route path="promotions" element={<AdPromotions />} />
            <Route path="orders" element={<Orders />} />
            <Route path="menu" element={<MenuPhase_2 />} />
            <Route path="who_we_are" element={<WhoWeR />} />
            <Route path="who_we_are/recruitment" element={<AdRecruitment />} />
            <Route
              path="who_we_are/sustainability"
              element={<AdSustainabilty />}
            />
            <Route path="who_we_are/news" element={<AdNews />} />
            <Route path="who_we_are/multipride" element={<Multipride />} />
            <Route path="who_we_are/corporate" element={<CoorparateBody />} />
            <Route path="telecommunications" element={<Tele />} />
            {/* <Route path="telecommunications/internet" element={<Internet/>}/>
          <Route path="telecommunications/vsat" element={<Vsat/>}/>
          <Route path="telecommunications/Cpe" element={<Cpe_Admin/>}/>
          <Route path="telecommunications/video" element={<Video/>}/> */}
            <Route
              path="telecommunications/privatenetwork"
              element={<ADPrivateNetwork />}
            />
          </Route>

          {/* <Route path="/whoweare/:mfm" element={<WhoWeAreSlug />} /> */}

      
      
      
      
          {/* Who We Are */}



          <Route path="/messagefrommanager" element={<MessageFromManag />} />
          <Route path="/missionandvalue" element={<MissionAndValue />} />
          <Route path="/corporbodies" element={<CorporateBodies />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/news" element={<News />} />
          <Route path="/newscard/:name" element={<NewsFirst />} />
          <Route path="/newsfirst" element={<NewsFirst />} />
          <Route path="/newssecond" element={<NewsSecond />} />
          <Route path="/multitelpride" element={<MultitelPride />} />
           <Route path="/recruitment" element={<Recruitment />} />
          {/* <Route path="/recruitment/:slug" element={<RecruitmentSlug />} /> */}
          <Route path="/recruitmentform" element={<RecruitmentForm />} />

        
        
        
        
        
        
          {/* Telecommunication */}

          <Route path="/telecommunication" element={<Telecommunication />} />
          <Route path="/privatenetwork" element={<PrivateNetwork />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/VSAT" element={<VSAT />} />
          <Route path="/cpes" element={<Cpes />} />
           <Route path="/videoconference" element={<VideoConference />} />
         <Route  path="/marketingandcommunicationtechnique"  element={<MarketingandCommunicationTechnique />}  />

          <Route path="/specialservices" element={<SpecialServices />} />
          <Route  path="/customizedsolutions" element={<CustomizedSolutions />} />
          <Route path="/outsourcing" element={<OutSourcing />} />

          <Route path="/digital" element={<Digital />} />

          <Route path="/whoweare" element={<WhoWeAre />} />
          {/* <Route path="/whoweare/:slug" element={<WhoWeAreSlug/>} /> */}
          <Route path="/otherservice" element={<OtherService />} />

          <Route path="/omg" element={<OMG />} />

          <Route path="/internet" element={<InternetUser />} />

          <Route path="/contactusform" element={<ContactUsForm />} />

        {/* <Route path="/whoweare/:mfm" element={<WhoWeAreSlug />} /> */}
        <Route path="/messagefrommanager" element={ <MessageFromManag />} />
        <Route path="/missionandvalue" element={ <MissionAndValue /> } />
        <Route path="/corporatebodies" element={ <CorporateBodies />} />
        <Route path="/networkinfrastructure" element={ <Networkinfra />  } />
        <Route path="/datacenterandcloud" element={ <DataCenter /> } />
         <Route path="/consultingtraining" element={ <ConsultingTraining/>} />
         <Route path="/ipvoice"  element ={ < IPvoice />}/>
         <Route path="/cybersecurity" element={<CyberSecurity/>} />
         <Route path="/webservice" element={ <Webservices/>} />
         <Route  path="/automationelectronic"    element={<AutomationElectric />}  />
         <Route path="/software" element={<Software/> } />
         <Route path="/VSAT" element={<VSAT />} />
         <Route path="/cpes" element={<Cpes/>}/>
         <Route path="/whoweare" element={<WhoWeAre/>}/>
         <Route path="/internet" element={<Internet/>}/>
         <Route path="/marketingandcommunicationtechnique" element={<MarketingandCommunicationTechnique />}/>
         <Route path="/otherservices" element={<OtherServices/>}/>
         <Route path="/specialservices" element={<SpecialServices/>}/>
         <Route path="/customizedsolutions" element={<CustomizedSolutions/>}/>
         <Route path="/outsourcing" element={<OutSourcing/>} />
         <Route path="/omg" element={<OMG/>}/>
         <Route path="/digital" element={<Digital/>} />
 
    
         
         
         
          {/* digitotal */}





          <Route path="/digitotal" element={<Digitotal />} />
          <Route path="/networkinfrastructure" element={<Networkinfra />} />
          <Route path="/datacenterandcloud" element={<DataCenter />} />
          <Route path="/consultingtraining" element={<ConsultingTraining />} />
          <Route path="/ipvoice" element={<IPvoice />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/webservice" element={<Webservices />} />
          <Route
            path="/automationelectronic"
            element={<AutomationElectric />}
          />
          <Route path="/software" element={<Software />} />
          <Route path="/otherservices" element={<OtherServices />} />
          <Route path="/omg" element={<OMG />} />
          <Route path="/specialservice" element={<SpecialService />} />
          <Route path="/customizedservice" element={<CustomizedService />} />
          <Route path="/outsourcing" element={<OutSourcing />} />
          <Route path="/contactus" element={<ContactUs />} />












          <Route path="/promotions" element={<Promotions />} />
          <Route path="/otherproducts" element={<OtherProducts />} />
          {/* <Route path="/admin" element={<AdLanding/>}> */}
          <Route path="/register" element={<ClientRegistration />} />
          <Route path="/profile" element={<Account />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/myproducts" element={<MyProducts />} />
          <Route path="/helpdesk" element={<HelpDesk />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/invoicedetails" element={<InvoiceDetails />} />
          <Route
            path="/internetqualitygraph"
            element={<InternetQualityGraph />}
          />
          <Route path="/iptelephony" element={<IpTelephony />} />
          <Route
            path="/informaticandaccesories"
            element={<InformaticAndAccessories />}
          />
          <Route
            path="/networkequipmentvendors"
            element={<NetworkEquipmentVendors />}
          />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/otherproducts" element={<OtherProducts />} />
          {/* <Route path="/admin" element={<AdLanding/>}> */}
          <Route path="/register" element={<ClientRegistration />} />
          <Route path="/contactpromotion" element={<ContactPromotion />} />
          <Route
            path="/contactotherproductserpart"
            element={<ContactOtherProductSerPart />}
          />
          <Route path="/contacttelecom" element={<ContactTelecom />} />
          <Route path="/contactequip" element={<ContactEquip />} />
          <Route path="/contactcpe" element={<ContactCPE />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/otherproducts" element={<OtherProducts />} />
          <Route path="/register" element={<ClientRegistration />} />
          <Route path="client" element={<Example />} />
          <Route path="profile" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment-methods" element={<PaymentMethod />} />

          {/* Contact Routes */}
          <Route path="contacts/:cat" element={<VendorDetails />} />

          {/* admin Routes */}
          {/* <Route path="/admin" element={<AdLanding />}>
          <Route path="" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} />
          <Route path="products/newproduct" element={<AddProduct />} />
          <Route path="staticpages" element={<StaticPage />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
