import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile";
import Icon from "@mui/material/Icon";
import Signout from "components/Signout";
import Evaluation from "components/Evaluation";
import ChatBot from "components/ChatBot";
import Arlearning from "components/Arlearning";
import TrackingPosture from "components/TrackingPosture";
import VirtualTryOn from "components/VirtualTryOn";
import SwipeableVideos from "components/ReelSection";
const questions = [
  'What type of clothes do you usually prefer?',
  
];

const options = [
  ['Casual Wear', 'Fancy Wear', 'Athleisure', 'Streetwear' , 'boho/chic', 'vintage/retro'],
 
];

const correctAnswers = ['optionA', 'optionC', 'optionC', 'optionA', 'optionB', 'optionA'];

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  {
    type: "collapse",
    name: "#ARCloset",
    key: "evaluation",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/evaluation",
    component: <Evaluation />,
  },
  {
    type: "collapse",
    name: "#ShopLiveNow",
    key: "VirtualTryOn",
    icon: <Icon fontSize="small">VR</Icon>,
    route: "/VirtualTryOn",
    component: <TrackingPosture />
    
  },
 
  {
    type: "collapse",
    name: "#SwipetoStyle",
    key: "SwipeableVideos",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/reels",
    component: <SwipeableVideos />
    
  },
  {
    type: "collapse",
    name: "#StyleGenie",
    key: "chatbot",
    icon: <Icon fontSize="small">VR training</Icon>,
    route: "/chatbot",
    component: <ChatBot />,
  },
  {
    type: "collapse",
    name: "#PerfectlyYou",
    key: "arlearning",
    icon: <Icon fontSize="small">VR training</Icon>,
    route: "/arlearning",
    component: <Arlearning />,
  },

  
  
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in",
  //   component: <SignIn />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-out",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-out",
    component: <Signout />,
  },
];

export default routes;
