import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { AppWindow, LayoutDashboardIcon, Mail, PhoneCall } from "lucide-react";

const Navitems = () => {
  return (
    <NavigationMenu className="mr-3">
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem className="bg-white rounded-md">
          <Link to="/">
            <NavigationMenuLink className="block px-4 py-2 hover:bg-slate-200 rounded-md">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Services */}
        <NavigationMenuItem className="hover:bg-slate-200 rounded-md">
          <NavigationMenuTrigger className="px-4 py-2 hover:bg-slate-100 rounded-md">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-flow-row gap-3 p-4 w-[250px] ">
              <Link to="/">
                <li className="flex items-center gap-1">
                  <AppWindow size={19} />
                  Web Development
                </li>
              </Link>
              <Separator />
              <Link to="/">
                <li className="flex items-center gap-1">
                  <LayoutDashboardIcon size={19} />
                  App Development
                </li>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem className="hover:bg-slate-200 rounded-md">
          <NavigationMenuTrigger className="px-4 py-2 hover:bg-slate-200 rounded-md">
            Contact
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-flow-row gap-3 p-4 w-[250px]">
              <Link to="/">
                <li className="flex items-center gap-1">
                  <Mail size={19} />
                  Brotechvortexs@gamil.com
                </li>
              </Link>
              <Separator />
              <li className="flex items-center gap-1">
                <PhoneCall size={19} />
                +918238443846
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* about */}
        <NavigationMenuItem className="bg-white rounded-md">
          <Link to="/">
            <NavigationMenuLink className="block px-4 py-2 hover:bg-slate-200 rounded-md">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navitems;
