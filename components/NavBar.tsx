"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full py-4 flex justify-between align-center px-6 fixed bg-white bg-opacity-25 backdrop-blur-sm max-w-[100vw]">
      <div className="sm:hidden my-auto pe-4">
        <button
          onClick={toggleMenu}
          className="flex flex-col space-y-1.5 focus:outline-none"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "transform translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "transform -translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>
      <div>
        <img
          src="/images/Logo.svg"
          alt="logo"
          className="cursor-pointer my-auto"
        />
      </div>

      <div className=" flex-row gap-6 text-[15.8px] my-auto hidden sm:flex">
        <NavigationMenu className="my-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[15.8px] font-normal">
                Start
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[15.8px] font-normal">
                Run & Grow
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[15.8px] font-normal">
                Learn
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex flex-row gap-4 text-[15.8px]">
        <button className="py-2 px-4 rounded-full bg-gray-300">Login</button>
        <button className="py-2 px-4 rounded-full text-white bg-blue-700 hidden md:block">
          Register
        </button>
      </div>

      <div
        className={`sm:hidden transition-all duration-300 fixed top-16 left-0 w-[80%] bg-white min-h-[90vh] shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-2 pb-4 w-full text-center gap-3">
          <a href="#" className="hover:bg-gray-100 py-4">
            Start
          </a>
          <a href="#" className="hover:bg-gray-100 py-4">
            Run & Grow
          </a>
          <a href="#" className="hover:bg-gray-100 py-4">
            Learn
          </a>
          <a href="#" className="hover:bg-gray-100 py-4">
            Pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const ListItem = React.forwardRef<
  React.Ref<HTMLAnchorElement>,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
