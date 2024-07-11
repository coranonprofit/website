import Image from "next/image";
import styles from "./index.module.css";
import { useState } from "react";
import arrowBack from "@public/images/elements/arrowBack.svg";
import arrowForward from "@public/images/elements/arrowForward.svg";

export default function Slideshow({ images }: { images: any[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide() {
        if (currentSlide != images.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);
        }
    }
    function previousSlide() {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(images.length - 1);
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.clicker}>
                <button onClick={previousSlide}>
                    <div style={{ left: "12.5%" }}>
                        <Image
                            src={arrowBack}
                            alt="Arrow Back"
                            fill
                        />
                    </div>
                </button>
                <button onClick={nextSlide}>
                    <div>
                        <Image
                            src={arrowForward}
                            alt="Arrow Forward"
                            fill
                        />
                    </div>
                </button>
            </div>

            {images.map((url, index) => (
                <Slide
                    url={url}
                    number={index}
                    currentSlide={currentSlide}
                />
            ))}
        </div>
    );
}

function Slide({
    url,
    number,
    currentSlide,
}: {
    url: string;
    number: number;
    currentSlide: number;
}) {
    return (
        <div
            className={styles.slide}
            hidden={currentSlide != number}
        >
            <Image
                src={url}
                alt={"Slide " + number}
                fill
            />
        </div>
    );
}
