"use client";

import style from "./index.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <section className={style.main}>
            <div className={style.top}>
                <p className={style.info}>
                    <strong>CORA</strong> <br />
                    Duluth, MN<br />
                    United States<br />
                    contact@coranonprofit.org<br />
                    (218) 409-6843 
                </p>

                <p className={style.tax}>
                    CORA is a registered 501(c)(3) tax-exempt organization.
                    All donations are tax deductible.
                </p>
                
                <div className={style.links}>
                    <Link href="https://www.instagram.com/coranonprofit/">
                        Instagram
                    </Link>      
                    <Link href="https://www.facebook.com/coranonprofit">
                        Facebook
                    </Link>
                    <Link href="https://www.youtube.com/@coranonprofit">
                        Youtube
                    </Link>
                </div>
            </div>

            <div className={style.disclaimer}>
                <strong>
                    © 2024 The Community Outreach & Restoration Association
                </strong>
                <small>
                    CORA branches are separate legal entities and CORA is not liable for their operations.
                </small> 
            </div>
        </section>
    )
}