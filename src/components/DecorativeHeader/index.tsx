import styles from "./index.module.css";
import Image from "next/image";

export default function DecorativeHeader({ children }: { children: any }) {
	return (
		<header className={styles.main}>
			<Image
				src="/images/elements/grayMapHeader.png"
				alt="Decorative Header Background"
				fill
			/>
			<h1>{children}</h1>
			<hr />
		</header>
	);
}
