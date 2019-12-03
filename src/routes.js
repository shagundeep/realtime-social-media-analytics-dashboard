// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import FetchDashboard from "views/Dashboard/FetchDashboard";
import FetchUser from "views/UserProfile/FetchUser";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Real Time Monitoring terror related activities",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: FetchDashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: FetchUser,
    layout: "/admin"
  },
  {
    path: "/newsPages",
    name: "News Pages",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/keywords",
    name: "Keywords",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/heatMap",
    name: "Heat Map",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Maps,
    layout: "/admin"
  },
];

export default dashboardRoutes;
