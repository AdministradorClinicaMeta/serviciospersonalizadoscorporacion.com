import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { navItems } from "@/constants/index";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu className="w-6 h-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {navItems.map((item) => (
          <Link to={item.path} key={item.path}>
            <DropdownMenuItem
              className={`cursor-pointer ${
                location.pathname === item.path ? "bg-muted" : "text-gray-600"
              }`}
            >
              <div
                className={`flex items-center rounded-lg text-lg font-medium 
                 `}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </div>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
