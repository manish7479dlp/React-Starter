import DashboardTemplate from '../Template/DashboardTemplate';
import { GrOverview } from "react-icons/gr";
import { AiFillWechat } from "react-icons/ai";

const DATA = [
  {
    haveSubMenu: false,
    name: "Overview",
    icon: <GrOverview />,
    to: "overview",
    subMenu: [
      {
        name: "Fontend",
        icon: "",
        to: "fontend"
      },
    ]
  },
  {
    haveSubMenu: false,
    name: "Chat",
    icon: <AiFillWechat size={"30px"} />,
    to: "chat",
    subMenu: [

    ]
  },
  {
    haveSubMenu: false,
    name: "Settings",
    icon: <GrOverview />,
    to: "settings",
    subMenu: [

    ]
  },
  {
    haveSubMenu: false,
    name: "Profile",
    icon: <GrOverview />,
    to: "profile",
    subMenu: [

    ]
  }

]

const Dashboard = () => {
  return (
    <>
      <DashboardTemplate sidebarData={DATA} />
    </>
  );
};

export default Dashboard;

// const DATA = [
//   {
//     haveSubMenu: true,
//     name: "Developer",
//     icon: "",
//     to: "",
//     subMenu: [
//       {
//         name: "Fontend",
//         icon: "",
//         to: "fontend"
//       },
//       {
//         name: "Backend",
//         icon: "",
//         to: "backend"
//       },
//       {
//         name: "Devops",
//         icon: "",
//         to: "devops"
//       }
//     ]
//   },
//   {
//     haveSubMenu: false,
//     name: "Settings",
//     icon: <GrOverview />,
//     to: "settings",
//     subMenu: [
//       {
//         name: "Fontend",
//         icon: "",
//         to: "fontend"
//       },
//       {
//         name: "Backend",
//         icon: "",
//         to: "backend"
//       },
//       {
//         name: "Devops",
//         icon: "",
//         to: "devops"
//       }
//     ]
//   },
//   {
//     haveSubMenu: true,
//     name: "Profile",
//     icon: "",
//     to: "profile",
//     subMenu: [
//       {
//         name: "Fontend",
//         icon: "",
//         to: "fontend"
//       },
//       {
//         name: "Backend",
//         icon: "",
//         to: "backend"
//       },
//       {
//         name: "Devops",
//         icon: "",
//         to: "devops"
//       }
//     ]
//   }
// ]

