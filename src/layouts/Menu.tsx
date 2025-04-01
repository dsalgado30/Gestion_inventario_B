import { HomeIcon, ChartBarIcon, DocumentTextIcon } from "@heroicons/react/16/solid";
import { MenuItem } from "../components/atomic/atoms/MenuItem";
import { routes } from "../routes/Routes";

export const adminMenu: MenuItem[] = [
  {
    code: "HOME",
    title: "Inicio",
    path: routes.home,
    icon: <HomeIcon className="h-5 w-5 mr-2" />,
  },
  {
    code: "STATS",
    title: "Estadísticas",
    path: routes.stats, 
    icon: <ChartBarIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    code: "REPORTS",
    title: "Reportes",
    path: routes.reports, 
    icon: <DocumentTextIcon className="h-6 w-6 text-green-500" />,
  },
];
