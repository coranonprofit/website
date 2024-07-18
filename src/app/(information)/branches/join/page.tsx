"use client";

import DecorativeHeader from "@/components/DecorativeHeader";
import styles from "./page.module.css";
import { useRef } from "react";

export default function JoinPage() {
	return (
		<>
			<DecorativeHeader>Start a Branch!</DecorativeHeader>

			<main className={styles.main}>
				<p>
					So, you want to make the world a better place! Please fill
					out the interest form below. From there, CORA executive team
					will schedule an interview with you and help you get things
					started. The process typically involves recruiting founding
					members and setting up your first event. From there, CORA
					will continue to give any guidance or financial support
					required to help your branch succeed!
				</p>

				<p>
					If the below form does not load, use
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSfubz5z1K5FGNFptDr2amnd3aN0PZJO5htCFezpuwngtXdQ8g/viewform">
						this
					</a>
					link.
				</p>

				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSfubz5z1K5FGNFptDr2amnd3aN0PZJO5htCFezpuwngtXdQ8g/viewform?embedded=true"
					allowFullScreen
				/>
			</main>
		</>
	);
}
