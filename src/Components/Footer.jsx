import React, { useState } from 'react';
import {Link , useLocation } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Overview from './Products/Overview';
import Features from './Products/Features';
 
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];
 
const currentYear = new Date().getFullYear();


 
export default function FooterWithSocialLinks() {

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [openFeature, setOpenFeature] = useState(false);
  const [scrollFeature, setScrollFeature] = useState('paper');


  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleFeature = (scrollType) => () => {
    setOpenFeature(true);
    setScrollFeature(scrollType);
    console.log("clicked");
  };

  const handleClose = () => {
    setOpen(false);
    setOpenFeature(false);
  };

  const location = useLocation();
  const noHeaderFooterRoutes = ['/DashBoard', '/Login', '/Profile'];
  const showHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (
   <>
   {
    showHeaderFooter && 
    <footer className="relative w-full max-[600px]:w-full max-[600px]:px-0 bg-[#1E2222] text-white px-[6.5rem]">
    <div className="mx-auto w-full max-w-7xl px-8 pt-5">
      <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
        <h1 className=''>
          Company Name
        </h1>
        <div >
        {/* {LINKS.map(({ title, items }) => (
            <ul key={title}>
              <h2  className="mb-3 max-[600px]:mb-5  font-medium">
                {title}
              </h2>
              {items.map((link) => (
                <li key={link}>
                  <Link 
                    onClick={handleClickOpen('paper')}
                    className="py-1.5 max-[600px]:pb-1 opacity-[0.7]  inline-block font-normal transition-colors hover:text-blue-gray-900">
                    {link}
                  </Link>
                </li>
              ))}
            
              <li  onClick={handleClickOpen('paper')}>Feature</li>
            </ul>
          ))}  */}
          <table className=''>
          <tr className='flex items-center gap-5'>
            <th className=''>Products</th>
            <th className=''>Company</th>
            <th className=''>Resource</th>
          </tr>
          <tr className='flex items-center gap-6'>
            <td onClick={handleClickOpen('paper')} className='cursor-pointer'>Overview</td>
            <td>About Us</td>
            <td>Blog</td>
          </tr>
          <tr onClick={handleFeature('paper')} className='flex items-center gap-6'>
            <td  className='cursor-pointer'>Features</td>
            <td>Careers</td>
            <td>Newsletter</td>
          </tr>
          {/* <tr className='flex items-center gap-6'>
            <td>Solutions</td>
            <td>Press</td>
            <td>Events</td>
          </tr>
          <tr className='flex items-center gap-6'>
            <td>Tutorials</td>
            <td>News</td>
            <td>Help Center</td>
          </tr> */}
          {/* <tr className='flex gap-2'>
            <td>Overview</td>
            <td>About Us</td>
            <td>Blog</td>
          </tr>
          <tr className='flex gap-2'>
            <td>Overview</td>
            <td>About Us</td>
            <td>Blog</td>
          </tr> */}
          </table>
        </div>

            {/* <li  onClick={handleClickOpen('paper')}>Overview</li> */}
          <Overview open={open} scroll={scroll} handleClose={handleClose} />
          <Features open={openFeature} scroll={scrollFeature} handleClose={handleClose}/>
      </div>
      <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <p
          className="mb-4 text-center font-normal  md:mb-0"
        >
          &copy; {currentYear} <a href="https://material-tailwind.com/">Company Name</a>. All
          Rights Reserved.
        </p>
        <div className="flex gap-4  sm:justify-center">
          <Link to='/' className="opacity-80 transition-opacity hover:opacity-100">
          <FaLinkedin className="h-5 w-5"/>
          </Link>
          <Link  to='/' className="opacity-80 transition-opacity hover:opacity-100">
          <FaXTwitter className="h-5 w-5"/>                     
          </Link>
          <Link  to='/' className="opacity-80 transition-opacity hover:opacity-100">
         <FaInstagram className="h-5 w-5"/>          
          </Link>
          <Link  to='/' className="opacity-80 transition-opacity hover:opacity-100">  
         <FaYoutube className="h-5 w-5"/>
          </Link>
          <Link  to='/' className="opacity-80 transition-opacity hover:opacity-100">
           <FaFacebookF className="h-5 w-5"/>
          </Link>
        </div>
      </div>
    </div>
    </footer> 
   }
   </>
  );
};

