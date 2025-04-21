import {
  ChartBarIcon,
  BellIcon,
  CubeIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon
  
} from "@heroicons/react/16/solid";
import { MenuItem } from "../components/atomic/atoms/MenuItem";
import { routes } from "../routes/Routes";

export const adminMenu: MenuItem[] = [
  {
    code: "NOTIFICATION",
    title: "Notificaciones",
    path: routes.notifications,
    icon: <BellIcon className="h-6 w-6 text-white-500 " />,
  },
  {
    code: "STATS",
    title: "Estadísticas",
    path: routes.stats,
    icon: <ChartBarIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "PRODUCTS",
    title: "Productos",
    path: routes.products,
    icon: <CubeIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "USERS",
    title: "Usuarios",
    path: routes.users,
    icon: <UsersIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "WAREHOUSES",
    title: "Bodegas",
    path: routes.warehouses,
    icon: <BuildingStorefrontIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "REPORTS",
    title: "Reportes",
    path: routes.reports,
    icon: <ClipboardDocumentIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "CONFIGURATION",
    title: "Configuración",
    path: routes.configuration,
    icon: <Cog6ToothIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "HELP",
    title: "Ayuda",
    path: routes.help,
    icon: <QuestionMarkCircleIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "PROFILE",
    title: "Perfil",
    path: routes.profile,
    icon: <UserCircleIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "CLOSE",
    title: "Cerrar sesión",
    path: routes.logout,
    icon: <UserCircleIcon className="h-6 w-6 text-white-500" />,
  },
];
