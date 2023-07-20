import { NavMenu } from "@/types";

export const navLinks: NavMenu[] = [
  {
    name: "Home",
    path: "/",
    type: "link",
  },
  {
    name: "Trending Trips",
    type: "category",
    subCategory: [
      {
        name: "Test",
        path: "/test",
        type: "link",
      },
    ],
  },
  {
    name: "Components",
    type: "category",
    subCategory: [
      {
        name: "Test",
        path: "/test",
        type: "link",
      },
    ],
  },
];
