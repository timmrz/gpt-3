import React from "react";
import styles from "./feature.module.scss";

const Feature = ({ title, text }) => {
	return (
		<>
			<span className={styles.line}></span>
			<div className={styles.content}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</>
	);
};

export default Feature;
