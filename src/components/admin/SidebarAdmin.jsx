import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

const SidebarAdmin = () => {
  return (
    <div className="bg-gray-800 w-64 text-green-100 flex-col h-screen">
      <div className="h-24 bg-gray-900 flex items-center justify-center text-2xl font-bold">
        Admin Panel
      </div>

      <nav className="px-4 flex-1 py-4 space-y-2">
        <NavLink
          to={"/admin"}
          end
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 text-white rounded-md px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <LayoutDashboard className="mr-2" />
          Dashboard
        </NavLink>
        <NavLink
          to={"manage"}
          end
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 text-white rounded-md px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <LayoutDashboard className="mr-2" />
          Manage
        </NavLink>
        <NavLink
          to={"category"}
          end
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 text-white rounded-md px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <LayoutDashboard className="mr-2" />
          Category
        </NavLink>
        <NavLink
          to={"product"}
          end
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 text-white rounded-md px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <LayoutDashboard className="mr-2" />
          Product
        </NavLink>
        <NavLink
          to={"orders"}
          end
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 text-white rounded-md px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <LayoutDashboard className="mr-2" />
          Order
        </NavLink>
      </nav>

      <div>
        <NavLink
          
          className={({ isActive }) =>
            isActive
              ? "bg-gray-900 text-white rounded-md px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <LayoutDashboard className="mr-2" />
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarAdmin;
