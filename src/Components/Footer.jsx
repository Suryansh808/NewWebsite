import React from 'react';
import {Link} from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
 
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
 
export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full max-[600px]:w-full max-[600px]:px-0 bg-[#1E2222] text-white px-[6.5rem]">
      <div className="mx-auto w-full max-w-7xl px-8 pt-5">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <h1 className=''>
            Company Name
          </h1>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <h2
                
                  className="mb-3 max-[600px]:mb-5  font-medium"
                >
                  {title}
                </h2>
                {items.map((link) => (
                  <li key={link}>
                    <Link to='/'
                      className="py-1.5 max-[600px]:pb-1 opacity-[0.7]  inline-block font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
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
  );
}