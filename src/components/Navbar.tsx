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
    <header className="flex items-center h-16 min-w-full gap-3 px-10 py-1 border-b-2 sm:px-20">
      <Link href="/" className="grow">
        {/* HCl */}
        <Image
          src={'/HCL-LOGO.png'}
          alt="logo"
          priority
          width={400}
          height={200}
          className="object-contain w-48 "
          style={{ color: "#fff" }}
        />
      </Link>

      <div id="navLinks" className="hidden md:block ">
        <NavigationMenuBar />
      </div>

      <div className="flex self-end mr-2 md:hidden">
        <Sheet>
          <SheetTrigger className="p-2 border-2 rounded-lg "><Menu /></SheetTrigger>
          <SheetContent className="block md:hidden">
            <SheetHeader>
                <MobileNav />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
