import React, { useState } from "react";
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

    // const [data, setData] = useState();

    // useEffect(() => {
    //   fetch("http://localhost:3001/Job")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       setData(data);
    //     })
    //     .catch((err) => console.log(err));
    // }, []);
  
    // console.log(data);
     
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
        <section className="w-full h-[85vh] -mt-5 flex max-[600px]:flex-col">
          <div className="right w-1/3 h-full p-1 max-[600px]:w-full">
            <div className="w-full h-full p-1 border overflow-y-scroll">
            <div className="w-full h-20 mb-1 border rounded-md shadow-xl flex items-center gap-2">
                <div>
                  <img
                    className="h-20"
                    src="https://imgs.search.brave.com/kGfuy37GuLwf4YeAAQIGyn6PmU9qlcwec4ExsbhRAq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1otQWxw/aGFiZXQtUE5HLnBu/Zw"
                    alt=""
                  />
                </div>
                <div>
                  <h1></h1>
                  <h1>Company Name</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="left w-full h-full p-1">
            <div className="w-full h-full p-2 border overflow-y-scroll">
              <div className="part-1 w-full border rounded-md shadow-xl bg-white p-2">
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
                <div className="apply-btn">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md">Apply Now</button>
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
              <div className="part-4 w-full border rounded-md shadow-xl bg-white p-2">
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
            </div>
          </div>
        </section>
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
