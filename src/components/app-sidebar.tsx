"use client";
import { AlarmClock, Keyboard, Settings, Info } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePlatform } from "@/hooks/use-platform";

const items = [
  {
    title: "通用",
    url: "/setting/",
    icon: Settings,
  },
  {
    title: "提醒",
    url: "/setting/reminder/",
    icon: AlarmClock,
  },
  {
    title: "快捷键",
    url: "/setting/shortcut/",
    icon: Keyboard, // 使用 Keyboard 图标替换 Search
  },
  {
    title: "关于",
    url: "/setting/about/",
    icon: Info,
  },
];

export function AppSidebar() {
  const { isMacOS } = usePlatform();

  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <Sidebar collapsible="none" className={`${isMacOS ? "pt-8" : "pt-0"}`}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      pathname === item.url &&
                        "bg-accent text-accent-foreground"
                    )}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
