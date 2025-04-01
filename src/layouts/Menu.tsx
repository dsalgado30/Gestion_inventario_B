import {  HomeIcon } from "@heroicons/react/16/solid";
import { MenuItem } from "../components/atomic/atoms/MenuItem";
import { routes } from "../routes/Routes";

export const adminMenu: MenuItem[] = [
  {
    code: "HOME",
    title: "Inicio",
    path: routes.home,
    icon: <HomeIcon className="h-5 w-5 mr-2" />
  },
  
];

