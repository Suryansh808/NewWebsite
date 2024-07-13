import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";


import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import WhatWeDo from "./Components/WhatWeDo";
import WhoWeAre from "./Components/WhoWeAre";
import Insights from "./Components/Insights";
import Career from "./Components/Career";
import ContactUs from "./Components/ContactUs";
import ReadMore from "./Components/ReadMore";
import { FooterWithSocialLinks } from "./Components/Footer";

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
        </Routes>
        <FooterWithSocialLinks/>
      </HashRouter>
    </div>
  )
}

export default App;