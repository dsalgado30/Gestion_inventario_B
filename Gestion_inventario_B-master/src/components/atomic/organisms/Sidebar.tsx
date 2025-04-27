import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MenuItem } from "../atoms/MenuItem";
import { ChevronDown, ChevronUp} from "lucide-react";

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState(pathname);
  const [isOpen, setIsOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const groupedMenu = {
    PRINCIPAL: menuItems.slice(0, 6),
    CONFIGURACIÓN: menuItems.slice(6, 9),
  };

  const toggleSidebar = () => setIsOpen(prev => !prev);

  const handleClick = (path: string) => {
    setActivePath(path);
  };

  const toggleSubMenu = (code: string) => {
    setExpandedMenus(prev => ({ ...prev, [code]: !prev[code] }));
  };

  return (
    <div
      className={`h-100vh ${isOpen ? "w-64" : "w-16"} bg-gray-900 text-white transition-all duration-300 flex flex-col justify-between`}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between p-4">
          {isOpen && <h1 className="text-xl font-bold">Menú</h1>}
          <button onClick={toggleSidebar} className="text-white text-sm w-5 h-5">
            {isOpen ? "<" : "☰"}
          </button>
        </div>
        <hr className="mb-4 border-t border-white/10 mx-2" />

        {/* Navegación */}
        <nav className="flex flex-col gap-1">
          {Object.entries(groupedMenu).map(([section, items]) => (
            <div key={section}>
              {isOpen && (
                <p className="px-4 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase">
                  {section}
                </p>
              )}
              {items.map(({ code, path, title, icon, subItems }) => {
              const isActive = activePath === path;
              const isExpanded = expandedMenus[code] || false;

              return (
                <div key={code} className="flex flex-col">
                  {subItems ? (
                    <button
                      onClick={() => toggleSubMenu(code)}
                      className={`flex items-center justify-between px-4 py-2 mx-2 rounded-md transition-colors ${
                        isActive ? "bg-[#0862f4]/15" : "hover:bg-[#0862f4]/15"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span>{icon}</span>
                        {isOpen && <span>{title}</span>}
                      </div>
                      {isOpen && <span className="text-sm">{isExpanded ? <ChevronUp/> :<ChevronDown/>}</span>}
                    </button>
                  ) : (
                    <Link
                      to={path}
                      onClick={() => handleClick(path)}
                      className={`flex items-center gap-3 px-4 py-2 mx-2 rounded-md transition-colors ${
                        isActive ? "bg-[#0862f4]/15" : "hover:bg-[#0862f4]/15"
                      }`}
                    >
                      <span>{icon}</span>
                      {isOpen && <span>{title}</span>}
                    </Link>
                  )}

                  {/* Submenú */}
                  {subItems && isExpanded && (
                    <div className="ml-8 flex flex-col">
                      {subItems.map((subItem) => (
                        <Link
                          key={subItem.code}
                          to={subItem.path}
                          onClick={() => handleClick(subItem.path)}
                          className={`py-1 px-4 rounded-md text-sm ${
                            activePath === subItem.path
                              ? "bg-[#0862f4]/20 text-white"
                              : "text-gray-300 hover:bg-[#0862f4]/10"
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            </div>
          ))}
        </nav>
      </div>

      <hr className="mt-40 border-t border-white/10 mx-2" />
      <div className="p-4">
        <button className="w-full flex items-center gap-2 text-white text-sm hover:bg-[#1e293b] px-3 py-2 rounded-md">
          ↩️ {isOpen && "Cerrar sesión"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
