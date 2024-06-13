"use client";

import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <NavBar />

      <main>
        <Container>
          <div className={styles.content}>
            <Image src="/images/group1.jpg" alt="Group photo 1" fill /> 
          </div>

          <div className={styles.text}>
            <h1>100%</h1>
            <h2>Student Lead</h2>
            <p>
              100% of all events, projects, meetings, and ideas are initiated and
              run by our amazing student leaders!
            </p>
          </div>
        </Container>

        <Container>
          <div className={styles.text}>
            <h1>250+ Students</h1>
            <h2>One goal</h2>
            <p>
              All CORA students are dedicated to our mission, to improve our
              communities and make an impact on the world.
            </p>
          </div>
          
          <div className={styles.content}>
            <Image src="/images/group2.jpg" alt="Group photo 2" fill />
          </div>
        </Container>

        <Container>
          <div className={styles.text}>
            <h1>Support Us</h1>
            <h2>Donate!</h2>
            <p>
              A donation in any amount can greatly help us improve our
              communities! All donations are tax deductible (up to 60% of
              the donation) in the United States.
            </p>
          </div> 

          <div className={styles.content} style={{flex:"0 1 50%"}}>
            <iframe
               src="https://www.zeffy.com/en-US/embed/donation-form/11f62ca5-4b9c-4569-9a10-22cae20834bd"
               title="Donate to CORA"
            />
          </div>
        </Container>

        <Container style={{height: "min-content"}}>
          <div className={styles.mixed}>
            <div>
              <Image src="/images/coraInNews.png" alt="CORA in the news" fill />
            </div>
            <Link href="google.com">
              <h3>CORA in the news</h3>
            </Link>

            <p>
              CORA Duluth was featured on WDIO for part 1 of their
              2023 Food Drive!
            </p>
            <small>
              Note: numbers reported only account for part 1 of the food drive, and did not count amount donated to CHUM.
            </small>
          </div>

          <div className={styles.mixed}>
            <div>
              <Image src="/images/group3.jpg" alt="Group photo 3" fill />
            </div>
            <Link href="google.com">
              <h3>Start a branch today</h3>
            </Link>
            
            <p>
              Apply to start a CORA branch today! Fill out our online application and
              we will schedule a short interview shortly. 
            </p>
            <small>
              CORA branches are separate organizations and CORA is not liable for their operations.
            </small>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  ) 
}

function Container({
  children,
  style,
}: {
  children?: any,
  style?: any
}) {
  return (
    <section className={styles.container} style={style}>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}