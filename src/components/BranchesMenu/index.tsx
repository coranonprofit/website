"use client";

import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { useRef, useContext, useState, useEffect, createElement } from "react";
import { BranchesMenuContext } from "@/lib/context";

export default function BranchesMenu() {
	const branches = [
		"Duluth",
		"Twin Cities",
		"Rochester",
		"Chicago",
		"Orlando",
		"Carmel",
		"Fairfax",
		"San Francisco",
		"Houston",
		"Iowa City",
		"Superior",
	];
	const { isBranchesOpen, setIsBranchesOpen } =
		useContext(BranchesMenuContext);
	const [viewing, setViewing] = useState(branches[0]);

	const [slides, setSlides] = useState<{ name: string; time: number }[]>([
		{ name: branches[0], time: Date.now() },
	]);
	useEffect(() => {
		setSlides(slides.concat([{ name: viewing, time: Date.now() }]));
	}, [viewing]);
	function handleAnimationEnd(event: any) {
		const targetEntry = {
			name: event.target.dataset.name,
			time: Number(event.target.dataset.key),
		};
		if (targetEntry.time == slides[slides.length - 1].time) {
			setSlides([targetEntry]);
		}
	}

	return (
		<div
			className={styles.main + " " + (isBranchesOpen ? styles.open : "")}
		>
			<button
				className={styles.exit}
				onClick={() => setIsBranchesOpen(false)}
			>
				<div>
					<Image
						src={"/images/elements/exit.svg"}
						alt="Exit"
						fill
					/>
				</div>
			</button>

			<div className={styles.selector}>
				<Link
					href={"/branches"}
					style={{ alignItems: "center" }}
				>
					<h4 style={{ width: "max-content" }}>
						Start A Branch Today!
					</h4>
				</Link>

				<hr />

				<div className={styles.selectorsContainer}>
					{branches.map((branch) => (
						<Branch
							name={branch}
							state={branch}
							viewing={viewing}
							setViewing={setViewing}
						/>
					))}
				</div>

				<hr />
			</div>

			<div
				className={styles.slidesContainer}
				onAnimationEnd={handleAnimationEnd}
			>
				{slides.map(({ name, time }, index, array) => (
					<Slide
						name={name}
						enterTop={
							index == 0 ||
							branches.indexOf(array[index].name) <
								branches.indexOf(array[index - 1].name)
						}
						stackId={time}
					/>
				))}
			</div>
		</div>
	);
}

function Branch({
	name,
	state,
	viewing,
	setViewing,
}: {
	name: string;
	state: string;
	viewing: any;
	setViewing: any;
}) {
	function handleHover() {
		setViewing(name);
	}

	return (
		<Link
			href={`/branches/${name}`}
			onMouseOver={handleHover}
			className={
				styles.link + (viewing == name ? ` ${styles.viewing}` : "")
			}
		>
			<h4>{name}</h4>
			<small>{state}</small>
		</Link>
	);
}

function Slide({
	name,
	enterTop,
	stackId,
}: {
	name: string;
	enterTop: boolean;
	stackId: number;
}) {
	return (
		<div
			className={
				styles.slide +
				" " +
				(enterTop ? styles.enterTop : styles.enterBottom)
			}
			data-name={name}
			data-key={stackId}
		>
			<Image
				src={`/images/branches/${name}.png`}
				alt={`${name} branch photo`}
				fill
			/>
		</div>
	);
}
