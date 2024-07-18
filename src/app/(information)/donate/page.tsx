import DecorativeHeader from "@/components/DecorativeHeader";
import styles from "./page.module.css";

export default function DonatePage() {
	return (
		<>
			<DecorativeHeader>Donation Information</DecorativeHeader>

			<main className={styles.main}>
				<div className={styles.text}>
					<p>
						CORA accepts monetary donations from individuals,
						corporations, and other organizations. All donations
						under $1,000 USD can be sent through our online Zeffy
						donation form. For donations of more than $1,000 USD,
						please email us at
						<a href="mailto:contact@coranonprofit.org">
							contact@coranonprofit.org
						</a>
						to coordinate with our treasurer.
					</p>

					<p>
						If you would like to give any amount through a grant,
						please email use at
						<a href="mailto:contact@coranonprofit.org">
							contact@coranonprofit.org
						</a>
						.
					</p>

					<p>
						CORA accepts item/physical donations that are in good
						condition in the following categories:
					</p>

					<ul>
						<li>
							<span>
								Technology (Chromebookes, cameras, computers,
								video capture cards, etc.)
							</span>
						</li>
						<li>
							<span>
								Safety equipment (vests, lights, gloves, boots,
								etc.)
							</span>
						</li>
					</ul>

					<p>
						If you would like to donate canned food, money, clothes,
						or other items to those in need, we encourage you to
						contact your local food bank or shelter. If you are
						unable to do so, or require assistance, contact your
						local branch. Our volunteers are happy to help!
					</p>
				</div>
				<iframe
					className={styles.embed}
					src="https://www.zeffy.com/en-US/embed/donation-form/11f62ca5-4b9c-4569-9a10-22cae20834bd"
					title="Donate to CORA"
				/>
			</main>
		</>
	);
}
