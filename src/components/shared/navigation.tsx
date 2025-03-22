"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ExploreSvg, ProblemsSvg, SubmissionsSvg } from "./svgs"
import Image from "next/image"

interface Router {
    href: string
    name: string
    icon: any
}

const routes: Router[] = [
    {
        href: "/explore",
        name: "Explore",
        icon: ExploreSvg,
    },
    {
        href: "/problems",
        name: "Problems",
        icon: ProblemsSvg,
    },
    {
        href: "/submissions",
        name: "Submissions",
        icon: SubmissionsSvg,
    },
]

export function AppNavigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {routes.map((route) => {
                    return (
                        <NavigationMenuItem key={route.name}>
                            <Link href={route.href} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <div className="h-full flex flex-row items-center gap-2">
                                        <Image src={route.icon} alt={route.name} />
                                        <p className="text-[16px] mt-1">{route.name}</p>
                                    </div>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className,
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    },
)
ListItem.displayName = "ListItem"
