import { Routes, Route} from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import WhatWeDo from "./Components/WhatWeDo";
import WhoWeAre from "./Components/WhoWeAre";
import Insights from "./Components/Insights";
import Career from "./Components/Career";
import ContactUs from "./Components/ContactUs";
import ReadMore from "./Components/ReadMore";
import FooterWithSocialLinks from "./Components/Footer";
// import CareerPortal from "./Components/CareerPortal";
// import CareerPortalLayout from './layouts/CareerPortalLayout';
import Login from "./Components/Login";
import DashBoard from "./layouts/DashBoard";
import Profile from "./layouts/Profile";

const App = () => {
  

  return (
    <div>
       <HashRouter>
        <Navbar/>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route index path="/what-we-do" element={<WhatWeDo/>} />
          <Route index path="/who-we-are" element={<WhoWeAre/>} />
          <Route index path="/insights" element={<Insights/>} />
          <Route index path="/career" element={<Career/>} />
          <Route index path="/contact-us" element={<ContactUs/>} />
          <Route index path="/read-more" element={<ReadMore/>} />
          <Route index path="/login" element={<Login/>} />
          <Route index path="/DashBoard" element={<DashBoard/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          {/* <Route path="/Profile" element={</>}/> */}

          {/* <Route index path="/CareerPortal" element={<CareerPortal/>} /> */}
         {/* <Route path="/CareerPortal" element={<CareerPortalLayout><CareerPortal/></CareerPortalLayout>} /> */}
        </Routes>
        <FooterWithSocialLinks/>
      </HashRouter>
    </div>
  )
}

export default App;