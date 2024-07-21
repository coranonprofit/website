"use client";

import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Slideshow from "@/components/Slideshow";
import { BranchesMenuContext } from "@/lib/context";
import BranchesMenu from "@/components/BranchesMenu";
import InteractiveMap from "@/components/InteractiveMap";

export default function MainPage() {
	return (
		<>
			<Hero />

			<BranchesMenu />
			<NavBar />

			<main className={styles.main}>
				<Container>
					<div className={styles.content}>
						<Image
							src="/images/group1.jpg"
							alt="Group photo 1"
							fill
						/>
					</div>

					<div className={styles.text}>
						<h1>100%</h1>
						<h2>Student Led</h2>
						<p>
							100% of all events, projects, meetings, and ideas
							are initiated and run by our amazing student
							leaders!
						</p>
					</div>
				</Container>

				<Container>
					<div className={styles.text}>
						<h1>250+ Students</h1>
						<h2>One goal</h2>
						<p>
							All CORA students are dedicated to our mission, to
							improve our communities and make an impact on the
							world.
						</p>
					</div>

					<div className={styles.content}>
						<Image
							src="/images/photos/group2.jpg"
							alt="Group photo 2"
							fill
						/>
					</div>
				</Container>

				<Container>
					<div className={styles.text}>
						<h1>Support Us</h1>
						<h2>Donate!</h2>
						<p>
							A donation in any amount can greatly help us improve
							our communities! All donations are tax deductible
							(up to 60% of the donation) in the United States.
						</p>
					</div>

					<div
						className={styles.content}
						style={{ flex: "0 1 50%" }}
					>
						<iframe
							src="https://www.zeffy.com/en-US/embed/donation-form/11f62ca5-4b9c-4569-9a10-22cae20834bd"
							title="Donate to CORA"
						/>
					</div>
				</Container>

				<Container style={{ height: "min-content" }}>
					<div className={styles.mixed}>
						<div>
							<Image
								src="/images/photos/coraInNews.png"
								alt="CORA in the news"
								fill
							/>
						</div>
						<Link href="https://www.wdio.com/front-page/top-stories/students-from-cora-group-collected-items-for-proctor-food-shelf/">
							<h3>CORA in the news</h3>
						</Link>

						<p>
							CORA Duluth was featured on WDIO for part 1 of their
							2023 Food Drive!
						</p>
						<small>
							Note: numbers reported only account for part 1 of
							the food drive, and did not count amount donated to
							CHUM.
						</small>
					</div>

					<div className={styles.mixed}>
						<div>
							<Image
								src="/images/photos/group3.jpg"
								alt="Group photo 3"
								fill
							/>
						</div>
						<Link href="/branches/join">
							<h3>Start a branch today</h3>
						</Link>

						<p>
							Apply to start a CORA branch today! Fill out our
							online application and we will schedule a short
							interview shortly.
						</p>
						<small>
							CORA branches are separate organizations and CORA is
							not liable for their operations.
						</small>
					</div>
				</Container>

				<hr />

				<InteractiveMap locations={[]} />
			</main>

			<Footer />
		</>
	);
}

function Hero() {
	const { setIsBranchesOpen } = useContext(BranchesMenuContext);

	return (
		<div className={styles.hero}>
			<div className={styles.minisignin}>
				<button onClick={() => setIsBranchesOpen(true)}>
					Branches
				</button>

				<Link href="/student">Sign In</Link>
			</div>

			<div className={styles.greeting}>
				<h1>CORA</h1>
				<small>Community Outreach & Restoration Association</small>

				<p>
					A nationwide non-profit, our mission is to better our local
					communities through student initiatives.
				</p>

				<footer className={styles.minibar}>
					<Link href="/exec">Executive</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/donate">Donate</Link>
					<Link href="/branches/join">Join</Link>
				</footer>
			</div>

			<Slideshow
				images={[
					"/images/photos/coraInNews.png",
					"/images/photos/group1.jpg",
					"/images/photos/group2.jpg",
					"/images/photos/group3.jpg",
				]}
			/>
		</div>
	);
}

function Container({ children, style }: { children?: any; style?: any }) {
	return (
		<section
			className={styles.container}
			style={style}
		>
			<div>{children}</div>
		</section>
	);
}