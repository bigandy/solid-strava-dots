import type { Component } from "solid-js";
import styles from "../Calendar/styles.module.css";
import { indexToDay } from "../Calendar/utils";
import { Dot } from "../Dot";
import { DotWithPopover } from "../DotWithPopover";

interface CellProps {
	number: number;
	activeDay: boolean;
	index: number;
}

interface CellWithDotsProps extends CellProps {
	dots: any[];
}

export const CellWithDots: Component<CellWithDotsProps> = ({
	number,
	activeDay,
	dots,
	index,
}) => {
	return (
		<td
			classList={{
				[styles.calendarDay]: true,
				[styles.calendarDayActive]: activeDay,
			}}
		>
			<span class={`${styles.dayName} vh`}>{indexToDay(index)}</span>

			{dots && dots.length > 0 && (
				<div class={styles.dots}>
					{dots.map((dot) => {
						if (dot.information) {
							return (
								<DotWithPopover
									title={dot.information.title}
									content={dot.information.content}
									link={dot.information.link}
								/>
							);
						} else {
							return <Dot />;
						}
					})}
				</div>
			)}

			<span
				classList={{
					[styles.dayCount]: true,
				}}
			>
				{number}
			</span>
		</td>
	);
};

export const Cell: Component<CellProps> = ({ number, activeDay, index }) => {
	return (
		<td
			classList={{
				[styles.calendarDay]: true,
				[styles.calendarDayActive]: activeDay,
			}}
		>
			<span class={`${styles.dayName} vh`}>{indexToDay(index)}</span>

			<span
				classList={{
					[styles.dayCount]: true,
				}}
			>
				{number}
			</span>
		</td>
	);
};
