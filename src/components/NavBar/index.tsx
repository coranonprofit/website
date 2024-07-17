"use client"

import { BranchesMenuContext } from "@/lib/context";
import style from "./index.module.css";
import Image from "next/image";
import Link from "next/link"
import { useContext, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
	const { setIsBranchesOpen } = useContext(BranchesMenuContext);

	const pathname = usePathname();
	const [isActive, setIsActive] = useState(pathname != "/");

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
		<div
			className={
				style.main +
				(isActive || pathname != "/" ? ` ${style.active}` : "")
			}
		>
			<div className={style.content}>
				<Link
					href={"/"}
					className={style.logo}
				>
					<Image
						src="/logo.png"
						alt="CORA logo"
						fill={true}
					/>
				</Link>

				<div className={style.links}>
					<Link href="/exec">Executive</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/donate">Donate</Link>
					<Link href="/branches/join">Join</Link>
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