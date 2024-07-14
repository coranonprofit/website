"use client"

import { BranchesMenuContext } from "@/lib/context";
import style from "./index.module.css";
import Image from "next/image";
import Link from "next/link"
import { useContext, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const { setIsBranchesOpen } = useContext(BranchesMenuContext);

    const [isActive, setIsActive] = useState(usePathname() != "/");

    function handleScroll() {
        setIsActive(
            window.scrollY >
                Math.max(
                    document.documentElement.clientHeight || 0,
                    window.innerHeight || 0
                )
        );
    }

    window.addEventListener("scroll", handleScroll);

    return (
        <div className={style.main + (isActive ? ` ${style.active}` : "")}>
            <div className={style.content}>
                <div className={style.logo}>
                    <Image
                        src="/logo.png"
                        alt="CORA logo"
                        fill={true}
                    />
                </div>

                <div className={style.links}>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/donate">Donate</Link>
                    <Link href="/join">Join</Link>
                </div>

                <button
                    className={style.branches}
                    onClick={() => setIsBranchesOpen(true)}
                >
                    Branches
                </button>

                <Link
                    href="/student"
                    className={style.signIn}
                >
                    Sign in
                </Link>
            </div>
        </div>
    );
}