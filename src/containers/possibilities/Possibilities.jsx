import React from "react";
import styles from "./possibilities.module.scss";
import possibility from "../../assets/possibility.png";

const Possibilities = () => {
	return (
		<div className={styles.container}>
			<div className={styles.bg}>
				<img src={possibility} alt='' />
			</div>
			<div className={styles.content}>
				<p className={styles.pretitle}>Request Early Access to Get Started</p>
				<h2>The possibilities are beyond your imagination</h2>
				<p className={styles.text}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
				<p className={styles.dopText}>Request Early Access to Get Started</p>
			</div>
		</div>
	);
};

export default Possibilities;
