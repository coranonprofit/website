"use client";

import DecorativeHeader from "@/components/DecorativeHeader";
import styles from "./page.module.css";

export default function ExecutivePage() {
	return (
		<>
			<DecorativeHeader>CORA Executive</DecorativeHeader>

			<main className={styles.main}>
				<h1>Our People</h1>
				<hr />

				<section>
					<h2>Board Of Directors</h2>
					<div className={styles.directorsBoard}>
						<div>
							<h3>Alexander Ren</h3>
							<h4>President</h4>
							<a href="mailto:alex.ren@coranonprofit.org">
								<span>alex.ren@coranonprofit.org</span>
							</a>
							<small>(218) 626-5716</small>
						</div>

						<div>
							<h3>Oscar Thompson</h3>
							<h4>Secretary</h4>
							<a href="mailto:oscar.thompson@coranonprofit.org">
								<span>oscar.thompson@coranonprofit.org</span>
							</a>
							<small>(218) 221-5370</small>
						</div>

						<div>
							<h3>Lin Xiu</h3>
							<h4>Treasurer</h4>
							<a href="mailto:lin.xiu@coranonprofit.org">
								<span>lin.xiu@coranonprofit.org</span>
							</a>
						</div>

						<div>
							<h3>Chloe Cederstrom</h3>
							<h4>Member</h4>
							<a href="mailto:chloe.cederstrom@coranonprofit.org">
								<span>chloe.cederstrom@coranonprofit.org</span>
							</a>
						</div>
					</div>
				</section>

				<section>
					<h2>Executive Team</h2>
					<div className={styles.executiveTeam}>
						<div>
							<h3>Alexander Ren</h3>
							<h4>Executive Director</h4>
						</div>

						<div>
							<h3>Oscar Thompson</h3>
							<h4>Associate Executive Director</h4>
						</div>

						<p>
							The Executive Team is arranged into 3 committees and
							one administrative office:
						</p>

						<ul>
							<li>
								<span>Office of the Executive Director</span>
							</li>
							<li>
								<span>Marketing & Social</span>
							</li>
							<li>
								<span>Technology</span>
							</li>
							<li>
								<span>Branch Support</span>
							</li>
						</ul>
					</div>
				</section>

				<h1>About Us</h1>
				<hr />
				<p>
					CORA Executive and the Board of Directors work together to
					keep CORA running at a national level. CORA Executive is
					fully made up of student volunteers, and applications to
					join the exec team are always open. Contact us at
					<a href="mailto:contact@coranonprofit.org">
						contact@coranonprofit.org
					</a>
					for more information.
				</p>

				<section>
					<h2>What are CORA's fees / dues?</h2>
					<p className={styles.fees}>
						None! Here at CORA, we don't believe people should have
						to pay to do good. CORA branches and members do not have
						any form of due or fee payed to CORA executive. All
						funding is obtained either through fundraising and our
						amazing company sponsorships!
					</p>
				</section>

				<section>
					<h2>Legal Status & Bylaws</h2>
					<p className={styles.legalBylaws}>
						Shoot our Board secretary an email at
						<a href="mailto:oscar.thompson@coranonprofit.org">
							oscar.thompson@coranonprofit.org
						</a>
						with questions about our legal status and/or for a copy
						of the bylaws.
					</p>
				</section>
			</main>
		</>
	);
}
