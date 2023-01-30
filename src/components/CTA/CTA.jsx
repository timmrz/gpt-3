import React from "react";
import styles from "./cta.module.scss";

const CTA = () => {
	return (
		<div className='container'>
			<div className={styles.cta}>
				<div className={styles.content}>
					<p className={styles.text}>Request Early Access to Get Started</p>
					<p className={styles.title}>Register today & start exploring the endless possiblities.</p>
				</div>
				<button>Get Started</button>
			</div>
		</div>
	);
};

export default CTA;
