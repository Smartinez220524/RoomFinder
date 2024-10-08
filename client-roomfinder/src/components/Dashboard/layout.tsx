'use client';

import Sidebar, { SidebarItem } from "@/components/Navegate";
import { Box, Button, AppBar, IconButton, Toolbar, Typography, CssBaseline } from "@mui/material";
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { rolesMapping } from "@/utils/constants";
// Alerts and notifications
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
/* Iconos */
import { GraduationCapIcon, Home, LayoutDashboard, LifeBuoy, Mail, MenuIcon, Settings, UserCircle, LogOut, Folder, SlidersHorizontal } from "lucide-react";
import { UserProfile } from "@/utils/interfaces";
import Link from "next/link";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [expanded, setExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const { data: session } = useSession();
    const user = session?.user as UserProfile;
    const pathname = usePathname();

    // Update the window width state
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initialize window width on client
        handleResize();

        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = useCallback(() => {
        setExpanded(windowWidth > 640);
    }, [windowWidth]);

    const roleName = rolesMapping[user?.roleid] || 'Desconocido';

    return (
        <PerfectScrollbar>
            <div className="flex flex-col h-[100vh]">
                <AppBar
                    component="nav"
                    position="static"
                    className="dark:bg-primary dark:text-gray-100"
                    sx={{
                        bgcolor: (theme) => theme.palette.background.paper,
                        color: (theme) => theme.palette.text.primary,
                        zIndex: (theme) => theme.zIndex.drawer + 1
                    }}
                >
                    <Toolbar variant="dense">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setExpanded((expanded) => !expanded)}
                        >
                            <MenuIcon />
                            {/*
                        {!expanded ? <ChevronFirst /> : <ChevronLast />
                        */}
                        </IconButton>
                        <Link href="/" className="flex items-center">
                            <GraduationCapIcon size={25} />
                            <h1 className="ml-1 text-2xl font-semibold">
                                Roomfinder
                            </h1>
                        </Link>
                    </Toolbar>
                </AppBar>
                <div
                    className="flex flex-1"
                >
                    <Sidebar expanded={expanded} onResize={toggleSidebar}>
                        <SidebarItem icon={<LayoutDashboard size={20} />} text="Inicio" url="/dashboard/home" />
                        <SidebarItem icon={<Home size={20} />} text="Inmuebles" url="/dashboard/inmuebles" />
                        <SidebarItem icon={<Mail size={20} />} text="Mensajes" url="/dashboard/messages" alert />
                        {// optiones para arrendadores
                            roleName === 'Arrendador' && (
                                <>
                                    <SidebarItem icon={<Folder size={20} />} text="Administrar" url="/dashboard/manage" alert />
                                    <SidebarItem icon={<AddHomeOutlinedIcon style={{ fontSize: 20 }} />} text="Publicar" url="/dashboard/publish" />
                                </>
                            )
                        }
                        <hr className="my-2 border-gray-300 dark:border-gray-800" /> {/* se  pueden eliminar estas opciones del sideBar */}
                        <SidebarItem icon={<UserCircle size={20} />} text="Perfil" url="/dashboard/profile" />
                        <SidebarItem icon={<SlidersHorizontal size={20} />} text="Ajustes" url="/dashboard/settings" />
                    </Sidebar>
                    <main className={`flex-1 px-2 pt-4 ${windowWidth <= 640 && expanded ? 'opacity-50 dark:bg-gray-950 w-full h-full' : ''}`}>
                        <section className={`${windowWidth <= 640 && expanded && 'hidden'}`}>
                            {children}
                        </section>
                    </main>
                </div>
            </div>
        </PerfectScrollbar>
    );
}