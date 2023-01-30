import React from "react";
import styles from "./header.module.scss";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";

const Header = () => {
	return (
		<div className='container'>
			<div className={styles.header}>
				<div className={styles.content}>
					<h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
					<p className={styles.description}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
					<div className={styles.formBlock}>
						<input type='email' placeholder='Your Email Address' required />
						<button type='submit'>Get Started</button>
					</div>
					<div className={styles.peopleBlock}>
						<img src={people} alt='people' />
						<p>1,600 people requested access a visit in last 24 hours</p>
					</div>
				</div>
				<div className={styles.imgBlock}>
					<img src={ai} alt='face' />
				</div>
			</div>
		</div>
	);
};

export default Header;
