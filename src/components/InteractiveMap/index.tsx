import styles from "./index.module.css";
import usaMap from "@public/images/elements/usa.svg";
import Image from "next/image";
import Link from "next/link";

type location = {
	name: string;
	longitude: any;
	latitude: any;
};
export default function InteractiveMap({
	locations,
}: {
	locations: location[];
}) {
	return (
		<section className={styles.map}>
			<div>
				<div>
					<Image
						src={usaMap}
						alt="US map"
						fill
					/>
				</div>

				{locations.map(({ name, longitude, latitude }: location) => {
					return <Link href={`/branches/${name}`}></Link>;
				})}
			</div>
		</section>
	);
}
