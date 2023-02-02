import React from "react";
import styles from "./cardBlock.module.scss";

const CardBlock = ({ date, title, bg, bigCard = false }) => {
	return (
		<div className={`${bigCard ? styles.bigCard : styles.card}`}>
			<div className={styles.bg} style={{ backgroundImage: `url(${bg})` }}></div>
			<div className={styles.content}>
				<div className={styles.titleSection}>
					<p className={styles.date}>{date}</p>
					<h4 className={styles.title}>{title}</h4>
				</div>
				<p className={styles.text}>Read Full Article</p>
			</div>
		</div>
	);
};

export default CardBlock;
