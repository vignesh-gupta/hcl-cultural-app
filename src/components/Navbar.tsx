import React from "react";
import Image from "next/image";
import NavigationMenuBar from "./NavigationMenuBar";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import { ThemeBtn } from "./ThemeBtn";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between h-16 min-w-full gap-3 px-10 py-1 border-b-2 sm:px-20">
      <Link href="/" className="">
        <Image
          src={"/HCL-LOGO.png"}
          alt="logo"
          priority
          width={400}
          height={200}
          className="object-contain w-48 "
        />
      </Link>

      <div id="navLinks" className="hidden md:flex">
        <NavigationMenuBar />
        <ThemeBtn />
      </div>

      <div className="flex gap-3 mr-2 md:hidden">
        <ThemeBtn />
        <Sheet>
          <SheetTrigger className="flex items-center p-2 border-2 rounded-lg">
            <Menu />
          </SheetTrigger>
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
