import React from "react";
import CardBlock from "../../components/cardBlock/CardBlock";
import styles from "./blog.module.scss";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const Blog = () => {
	return (
		<div className='container'>
			<h2 className={styles.title}>A lot is happening, We are blogging about it.</h2>
			<div className={styles.grid}>
				<div className={styles.div1}>
					<CardBlock bigCard={true} bg={blog1} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
				</div>
				<div className={styles.div2}>
					<CardBlock bg={blog2} date='Sep 26, 2021' title='Can GPT-3 answer questions?' />
				</div>
				<div className={styles.div3}>
					<CardBlock bg={blog3} date='Sep 26, 2021' title='Can GPT-3 ask questions?' />
				</div>
				<div className={styles.div4}>
					<CardBlock bg={blog4} date='Sep 26, 2021' title='What is answer endpoint in GPT-3?' />
				</div>
				<div className={styles.div5}>
					<CardBlock bg={blog5} date='Sep 26, 2021' title='Can GPT-3 write a research paper?' />
				</div>
			</div>
		</div>
	);
};

export default Blog;
