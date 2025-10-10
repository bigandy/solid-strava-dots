import type { Component } from "solid-js";

import styles from "./styles.module.css";

export const TableHeader: Component = () => {
	return (
		<thead>
			<tr>
				<th>
					M<span class={styles.medium}>on</span>
					<span class={styles.long}>day</span>
				</th>
				<th>
					Tu<span class={styles.medium}>e</span>
					<span class={styles.long}>sday</span>
				</th>
				<th>
					W<span class={styles.medium}>ed</span>
					<span class={styles.long}>nesday</span>
				</th>
				<th>
					Th<span class={styles.medium}>u</span>
					<span class={styles.long}>rsday</span>
				</th>
				<th>
					F<span class={styles.medium}>ri</span>
					<span class={styles.long}>day</span>
				</th>
				<th>
					Sa<span class={styles.medium}>t</span>
					<span class={styles.long}>urday</span>
				</th>
				<th>
					Su<span class={styles.medium}>n</span>
					<span class={styles.long}>day</span>
				</th>
			</tr>
		</thead>
	);
};
