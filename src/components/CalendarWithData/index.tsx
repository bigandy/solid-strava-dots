import { type Component, createSignal } from "solid-js";
import { Header } from "../Calendar/Header";
import styles from "../Calendar/styles.module.css";
import { TableHeader } from "../Calendar/TableHeader";
import { Rows } from "./Rows";

export interface DotData {
	date: string;
	information?: {
		title?: string;
		content?: string;
		link?: string;
	};
}
interface CalendarWithDataProps {
	initialOffset?: number;
	data?: Array<DotData>;
}

const CalendarWithData: Component<CalendarWithDataProps> = ({
	initialOffset = 0,
	data,
}) => {
	const [offset, setOffset] = createSignal(initialOffset);

	return (
		<div class={styles.wrapper}>
			<div
				classList={{
					[styles.calendar]: true,
					[styles.currentCalendar]: offset() === 0,
				}}
			>
				<Header offset={offset} setOffset={setOffset} />

				<table>
					<TableHeader />
					<tbody>
						<Rows offset={offset} data={data} />
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CalendarWithData;
