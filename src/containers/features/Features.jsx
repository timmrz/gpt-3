import React from "react";
import Feature from "../../components/feature/Feature";
import styles from "./features.module.scss";

const Features = () => {
	return (
		<div id='openAI' className='container'>
			<div className={styles.features}>
				<div className={styles.titleSection}>
					<h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
					<p>Request Early Access to Get Started</p>
				</div>
				<ul className={styles.list}>
					<li>
						<Feature title='Improving end distrusts instantly ' text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.' />
					</li>
					<li>
						<Feature title='Become the tended active' text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.' />
					</li>
					<li>
						<Feature title='Message or am nothing' text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.' />
					</li>
					<li>
						<Feature title='Really boy law county' text='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.' />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Features;
