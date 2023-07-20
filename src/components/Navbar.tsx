import React from "react";
import Image from "next/image";
import NavigationMenuBar from "./NavigationMenuBar";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="flex items-center w-full h-16 gap-3 px-20 py-1 border-b-2">
      <Link href="/">
        HCl
        {/* <Image
          src={logo}
          alt="logo"
          priority
          className="object-contain w-32 h-12 "
          style={{ color: "#fff" }}
        /> */}
      </Link>

      <div id="navLinks" className="hidden md:block ">
        <NavigationMenuBar />
      </div>

      <div className="flex justify-end grow" >

      <Button>Get Started</Button>
      </div>

      <div className="flex justify-end mr-2 md:hidden -order-1">
        <Sheet>
          <SheetTrigger className="p-2 border-2 rounded-lg "><Menu /></SheetTrigger>
          <SheetContent className="block md:hidden">
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <MobileNav />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
