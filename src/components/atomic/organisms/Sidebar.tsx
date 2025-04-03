import { Button } from "@heroui/react";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "../atoms/MenuItem";
import { useEffect, useState } from "react";

interface SidebarProps {
  menuItems: Array<MenuItem>;
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const NAME_APP = import.meta.env.VITE_NAME_APP;

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="h-screen w-64 border-2 border-blue-500 text-black rounded-lg hidden sm:block">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center">{ NAME_APP }</h1>
      </div>
      <nav className="mt-10 flex flex-col items-center gap-4">
        {menuItems.map((item, index) => {
          return (
            <Link key={index.toString()} to={item.path} onClick={() => setActivePath(item.path)}>
              <Button
                color="primary"
                variant={activePath === item.path ? "solid" : "bordered"}
                className="w-48"
              >
                {item.icon}
                {item.title}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
