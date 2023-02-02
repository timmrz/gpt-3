import React from "react";
import Feature from "../../components/feature/Feature";
import styles from "./whatGPT.module.scss";

const WhatGPT = () => {
	return (
		<div className='container'>
			<div className={styles.gpt}>
				<div className={styles.gptHeader}>
					<Feature title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
				</div>
				<div className={styles.titleSection}>
					<h2>The possibilities are beyond your imagination</h2>
					<p>Explore The Library</p>
				</div>
				<ul className={styles.gptList}>
					<li>
						<Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' />
					</li>
					<li>
						<Feature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.' />
					</li>
					<li>
						<Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.' />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default WhatGPT;
