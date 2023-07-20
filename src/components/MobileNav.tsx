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
          {nav.type === "link" ? (
            <Link
              href="/docs"
              className="flex py-4 text-sm font-medium hover:underline"
            >
              {nav.name}
            </Link>
          ) : (
            <>
              <AccordionTrigger className="hover:no-underline">
                {nav.name}
              </AccordionTrigger>
              {nav.subCategory?.map((subNav, i) => (
                <AccordionContent key={subNav.name}>
                  <Link href={subNav.path || "/"} className="hover:underline">
                    {subNav.name}
                  </Link>
                </AccordionContent>
              ))}
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MobileNav;
