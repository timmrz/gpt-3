import React from "react";
import styles from "./brands.module.scss";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

const Brands = () => {
	return (
		<div className='container'>
			<ul className={styles.brands}>
				<li className={styles.google}>
					<img src={google} alt='google' />
				</li>
				<li className={styles.slack}>
					<img src={slack} alt='slack' />
				</li>
				<li className={styles.atlassian}>
					<img src={atlassian} alt='atlassian' />
				</li>
				<li className={styles.dropbox}>
					<img src={dropbox} alt='dropbox' />
				</li>
				<li className={styles.shopify}>
					<img src={shopify} alt='shopify' />
				</li>
			</ul>
		</div>
	);
};

export default Brands;
