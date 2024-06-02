"use client"

import { BranchesMenuContext } from "@/lib/context";
import style from "./index.module.css";
import Image from "next/image";
import Link from "next/link"
import { useContext } from "react";

export default function NavBar() {

    const { setIsBranchesOpen } = useContext(BranchesMenuContext);

    return (
        <div className={style.main}>
            <div className={style.logo}>
                <Image src="/logo.png" alt="CORA logo" fill={true} />
            </div> 
            
            <div className={style.links}>
                <Link href="/about">About</Link> 
                <Link href="/contact">Contact</Link>  
                <Link href="/donate">Donate</Link>
                <Link href="/join">Join</Link> 
            </div>

            <button className={style.branches} onClick={() => setIsBranchesOpen(true)}>
                Branches
            </button>

            <Link href="/student" className={style.signIn}>
                Sign in
            </Link>
        </div>
    )
}