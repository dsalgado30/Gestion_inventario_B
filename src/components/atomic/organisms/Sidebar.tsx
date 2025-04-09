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
    <div className=" w-64 bg-black text-white border-2 border-black hidden sm:block">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center">Menu</h1>
      </div>
      <nav className=" flex flex-col items-center">
        {menuItems.map((item, index) => (
          <Link key={index.toString()} to={item.path} onClick={() => setActivePath(item.path)}>
            <Button
              className={`w-48 bg-black text-white border border-black hover:bg-white hover:text-black transition flex items-center justify-start gap-2 px-4 ${
                activePath === item.path ? "border-2 border-white" : ""
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
