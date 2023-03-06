import {
  mdiAccountCircle,
  mdiMonitor,
  // mdiLock,
  // mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  // mdiTelevisionGuide,
  // mdiResponsive,
  // mdiPalette,
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    to: "account/posts",
    label: "Posts",
    icon: mdiTable,
  },
  {
    to: "/register",
    label: "User",
    icon: mdiSquareEditOutline,
  },
  // {
  //   to: "/ui",
  //   label: "UI",
  //   icon: mdiTelevisionGuide,
  // },
  // {
  //   to: "/responsive",
  //   label: "Responsive",
  //   icon: mdiResponsive,
  // },
  // {
  //   to: "/",
  //   label: "Styles",
  //   icon: mdiPalette,
  // },
  {
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  // {
  //   to: "/login",
  //   label: "Login",
  //   icon: mdiLock,
  // },
  // {
  //   to: "/error",
  //   label: "Error",
  //   icon: mdiAlertCircle,
  // },
];
