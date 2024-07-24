// import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
// import List from '@mui/material/List';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import CustomizedAccordions from './CustomizedAccordions';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import CssBaseline from "@mui/material/CssBaseline";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
// import { IoSearch } from "react-icons/io5";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import AOS  from "aos";
// import  "aos/dist/aos.css";


const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: "relative",
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Profile() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const jobList = [
  //   {jobTitle : "Web developer" , companyName : "jio" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Data Science" , companyName : "Amazon" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  //   {jobTitle : "Full stack developer" , companyName : "Wipro" , companyLogo : "https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"},
  // ]
  const [data, setData] = useState();
  const [courseData, setCourseData] = useState(null);
  const [searchInput, setSearchInput] = useState();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/Job")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (item) => {
    setCourseData(item);
  };
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCourseData(filteredData.length > 0 ? filteredData[0] : null);
  };

  const navigate = useNavigate();
  let handleReadMore = (contentItem, el) => {
    navigate("/ReadMoreCourseDetails", { state: { contentItem, el } });
  };
   

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Company Name with Logo
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        {/* <section className="w-full h-[85vh] -mt-5 flex gap-2 max-[600px]:flex-col">
          <div className="right w-1/3 h-full p-1 max-[600px]:w-full">
            <div className="w-full h-full p-1  overflow-y-scroll scrollbar-hide">
            {
              jobList.map((job) => {
                return <>
                <div className="w-full cursor-pointer h-20 mb-1 border rounded-md shadow-xl flex items-center gap-2">
                <div>
                  <img
                    className="h-20"
                    src={job.companyLogo}
                    alt=""
                  />
                </div>
                <div>
                  <h1>{job.jobTitle}</h1>
                  <h1>{job.companyName}</h1>
                </div>
              </div>
                </>
                })
            }
            </div>
          </div>

          <div className="left w-full h-full p-1">
            <div className="w-full h-full p-2  overflow-y-scroll scrollbar-hide">
              <div className="part-1 w-full  rounded-md shadow-xl bg-white p-2">
                 <div className="job-and-apply-btn flex items-center justify-between px-5">
                 <div className="job-title flex items-center gap-2">
                  <div>
                    <img
                      className="h-20"
                      src="https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>job title</h1>
                    <h1>Company Name</h1>
                  </div>
                </div>
                 </div>
                <h1>location:</h1>
                <h1>updated on:</h1>
              </div>
              <div className="part-2 w-full border rounded-md shadow-xl bg-white p-2">
                <h1>Eligibility</h1>
                <p>Experienced Professionals</p>
              </div>
              <div className="part-3 w-full border rounded-md shadow-xl bg-white p-2">
                <h1>Job Description</h1>
                <strong>Responsibilities of the Candidate:</strong> <br />
                Drive rider growth for the region, effectively collaborating
                with multiple local and global cross-functional stakeholders
                across demand-generation initiatives. <br />
                Analyze rider data, including rider segment profiling, rider
                funnel analysis, rider lifecycle management, etc. to extract
                insights that drive growth, and to formulate and implement
                strategies for rider acquisition and engagement.
                <br />
                Leverage problem-solving skills to identify consumer pain
                points. Use data analytics and qualitative research to test
                hypotheses, make sound business judgments, and decide on the
                next steps.
                <br />
                Show agility and execution excellence in addressing these issues
                in a time-bound manner.
                <br />
                Develop a coherent insight-driven business strategy to scale
                rider growth for the region.
                <br />
                <strong>Requirements:</strong> <br />
                MBA degree or equivalent with 2 years of experience in growth, analytics, and customer experience management roles. <br />
                Experience in marketing firms, consumer goods, and app management (product, growth, CRM, CLM) preferred.<br />
                Ability to relate to riders and come up with qualitative insights after speaking to , observing, and interviewing riders.<br />
                Ability to do independent analysis on customer data, and big data using advanced tools like SQL, Python, Excel, SAS, or equivalent.<br />
              </div>
              <div className="part-4 w-full border rounded-md  bg-white p-2">
                <strong>Additional Information</strong>
                <div className="w-full h-20 mb-2 mt-2 p-3 rounded-md shadow-md bg-[#fff]">
                    <h1>Job Location</h1>
                </div>
                <div className="w-full h-20 mb-2 p-3 rounded-md shadow-md bg-[#fff]">
                     <h1>salary</h1>
                </div>
                <div className="w-full h-20 mb-2 p-3 rounded-md shadow-md bg-[#fff]">
                     <h1>Experience</h1>
                </div>
                <div className="w-full h-20 mb-2 p-3 rounded-md shadow-md bg-[#fff]">
                   <h1>Work Details</h1>
                </div>
                <div className="w-full h-20 mb-2 p-3 rounded-md shadow-md bg-[#fff]">
                   <h1>Job type / Timing </h1>
                </div>
              </div>
               <div className="flex items-center justify-end px-5 mt-3">
               <div className="apply-btn ">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md">Apply Now</button>
                </div>
               </div>
            </div>
            
          </div>
        </section> */}
         <div className="grid grid-cols-12 h-[78vh] overflow-hidden">
          {!data ? (
            <Box sx={{ width: "100vw" }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          ) : (
            <>
              <div className="col-span-12">
                 <div className=''>
                  <div data-aos="fade-down" className="flex items-center justify-center p-3">
                   <div className=' relative inline-block shadow-lg w-[25vw] rounded-xl overflow-hidden'>
                   <input
                      type="search"
                      value={searchInput}
                      onChange={handleSearch}
                      placeholder="Search course here....."
                      className="w-full rounded-xl px-3  border border-slate-950"
                    />
                    {/* <IoSearch className="absolute z-10" /> */}
                   </div>
                  </div>
                </div>
              </div>
              <div className="px-2 py-3  overflow-y-scroll no-scrollbar col-span-3">
                <div >
                  <ul>
                    {data.map((job, index) => (
                      <li key={index} className="pb-1">
                        <button
                          className="border-2 hover:scale-105 ease-linear duration-300 shadow-sm flex items-center gap-2 bg-zinc-100 w-full px-1 text-left rounded-md"
                          onClick={() => handleClick(group)}>
                          <span className='hover:scale-125 ease-linear duration-300'><BsFillArrowRightCircleFill/></span>
                          {job.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div  className="overflow-y-scroll no-scrollbar col-span-9">
                {/* {courseData ? (
                  <div className="w-full p-2 flex items-center justify-start gap-2 flex-wrap">
                    {courseData.map((contentItem, contentIndex) => (
                      <div                       
                        key={contentIndex}
                        className="w-[20vw]  hover:scale-105 ease-linear duration-500 border-2 bg-white shadow-xl rounded-md overflow-hidden"
                      >
                        <img
                          src={contentItem.image}
                          alt="image"
                          className="w-[100%]"
                        />
                        <div className="p-2 text-black">
                          <h4 className="text-md font-bold tracking-tighter ">
                            {contentItem.courseName}
                          </h4>
                          <p className="text-sm py-2">{contentItem.category}</p>
                          <p className="line-clamp-2 tracking-tighter">
                            {contentItem.description}
                          </p>
                          <p>
                            <span>&#8377;</span> {contentItem.price}
                          </p>
                          <p>{contentItem.duration}</p>
                        </div>
                        <button
                          onClick={() => handleReadMore(contentItem)}
                          className="relative group cursor-pointer text-sky-50  overflow-hidden  w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
                        >
                          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                          <p className="z-10 text-bold text-xl">Read more</p>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-start px-2 py-3 flex-wrap overflow-y-scroll no-scrollbar col-span-9">
                    {data.map((elem, index) => {
                      return elem.map((el, idx) => {
                        return (
                          <div>
                            {(el.category.includes("Programming") ||
                              el.category.includes("Web Designing")) && (
                              <div key={`elem_${index}_${idx}`}  className="w-[20vw]  hover:scale-105 ml-1 ease-linear duration-500 border-2 bg-white shadow-xl rounded-md overflow-hidden">
                                <img
                                  src={el.image}
                                  alt="image"
                                  className="w-[100%]"
                                />
                                <div className="p-2 text-black">
                                  <h4 className="text-md font-bold tracking-tighter ">
                                    {el.courseName}
                                  </h4>
                                  <p className="text-sm py-2">{el.category}</p>
                                  <p className="line-clamp-2 tracking-tighter">
                                    {el.description}
                                  </p>
                                  <p>
                                    <span>&#8377;</span> {el.price}
                                  </p>
                                  <p>{el.duration}</p>
                                </div>
                                <button
                                  onClick={() => handleReadMore(el)}
                                  className="relative group cursor-pointer text-sky-50  overflow-hidden  w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
                                >
                                  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                                  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                                  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                                  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                                  <p className="z-10 text-bold text-xl">
                                    Read more
                                  </p>
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      });
                    })}
                  </div>
                )} */}
              </div>
            </>
          )}
        </div>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div>
          <div>
            {" "}
            <img src="" alt="ImageProfile" />
          </div>
          <div>
            {" "}
            <h3> Name : </h3>
          </div>
          <div>
            {" "}
            <h3> Email : </h3>
          </div>
        </div>
        <div className="flex items-center flex-col gap-2">
          <button>Download Resume</button>
          <button>Report</button>
        </div>
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Divider />
        <div>
          <div>
            <h3>Status</h3>
          </div>
        </div>
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}
