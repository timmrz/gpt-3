import React from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/logo.svg";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<h2 className={styles.title}>Do you want to step in to the future before others</h2>
				<button className={styles.btn}>Request Early Access</button>
				<div className={styles.infoBlock}>
					<div className={styles.logoBlock}>
						<img src={logo} alt='logo' />
						<p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
					</div>
					<ul className={styles.list}>
						<li>Links</li>
						<li>
							<a href=''>Overons</a>
						</li>
						<li>
							<a href=''>Social Media</a>
						</li>
						<li>
							<a href=''>Counters</a>
						</li>
						<li>
							<a href=''>Contact</a>
						</li>
					</ul>
					<ul className={styles.list}>
						<li>Company</li>
						<li>
							<a href=''>Terms & Conditions</a>
						</li>
						<li>
							<a href=''>Privacy Policy</a>
						</li>
						<li>
							<a href=''>Contact</a>
						</li>
					</ul>
					<ul className={styles.list}>
						<li>Get in touch</li>
						<li>Crechterwoord K12 182 DK Alknjkcb</li>
						<li>085-132567</li>
						<li>
							<a href='mailto:info@payme.net'>info@payme.net</a>
						</li>
					</ul>
				</div>
				<p className={styles.copyright}>© 2021 GPT-3. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
