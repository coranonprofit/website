import DecorativeHeader from "@/components/DecorativeHeader";
import styles from "./page.module.css";
import InteractiveMap from "@/components/InteractiveMap";

export default function ContactPage() {
	return (
		<>
			<DecorativeHeader>Contact</DecorativeHeader>

			<main className={styles.main}>
				<h1>CORA Executive</h1>
				<hr />

				<section>
					<h2>Executive Team & Board of Directors</h2>
					<a href="mailto:contact@coranonoprofit.org">
						<span>contact@coranonoprofit.org</span>
					</a>
				</section>

				<section>
					<h2>Sharkey Studios</h2>
					<h3>Website & Branding Inquiries</h3>
					<a href="mailto:sharkeystudios.2014@gmail.com">
						<span>sharkeystudios.2014@gmail.com</span>
					</a>
				</section>

				<h1>CORA Branches</h1>
				<hr />

				<p>
					You can contact you local CORA branch by texting or emailing
					a branch director.
				</p>
			</main>

			<InteractiveMap locations={[]} />
		</>
	);
}
