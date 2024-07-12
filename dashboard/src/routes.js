import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Icon from "@mui/material/Icon";
import Signout from "components/Signout";
import Evaluation from "components/Evaluation";
import ChatBot from "components/ChatBot";
import Arlearning from "components/Arlearning";
import TrackingPosture from "components/TrackingPosture";

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
    name: "GEN'Z data",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "collapse",
    name: "Evaluation",
    key: "evaluation",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/evaluation",
    component: <Evaluation questions={questions} options={options} correctAnswers={correctAnswers} />,
  },
  {
    type: "collapse",
    name: "AI Chatbot Assistant",
    key: "chatbot",
    icon: <Icon fontSize="small">VR training</Icon>,
    route: "/chatbot",
    component: <ChatBot />,
  },
  {
    type: "collapse",
    name: "AR Try Ons",
    key: "arlearning",
    icon: <Icon fontSize="small">VR training</Icon>,
    route: "/arlearning",
    component: <Arlearning />,
  },
  // {
  //   type: "collapse",
  //   name: "Movement/Posture Tracking",
  //   key: "opencv",
  //   icon: <Icon fontSize="small">Tracking</Icon>,
  //   route: "/trackpos",
  //   component: <TrackingPosture />,
  // },

  {
    type: "collapse",
    name: "Virtual World",
    key: "virtualtryon",
    icon: <Icon fontSize="small">VR</Icon>,
    route: "/TryOn",
    component: <TrackingPosture />,
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
