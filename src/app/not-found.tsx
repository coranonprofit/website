import styles from "./not-found.module.css";
import Link from "next/link";

export default function NotFoundPage() {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.title}>
					<h1>404</h1>
					<h4>Page not found</h4>
				</section>

				<section className={styles.other}>
					<h2>You probably aren't supposed to be here,</h2>
					<h3>Try these instead:</h3>

					<ul className={styles.links}>
						<li>
							<Link href="/exec">Executive</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
						<li>
							<Link href="/donate">Donate</Link>
						</li>
						<li>
							<Link href="/branches/join">Join</Link>
						</li>
					</ul>
				</section>
			</main>
		</>
	);
}
