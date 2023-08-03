"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navLinks } from "@/constants/mapingConstants";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {navLinks.map((nav, i) => (
        <AccordionItem value={`item-${i}`} key={nav.name}>  
            <Link
              href={nav.path}
              className="flex py-4 text-sm font-medium hover:underline"
            >
              {nav.name}
            </Link>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MobileNav;
