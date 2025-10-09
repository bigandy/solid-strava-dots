import { Component } from "solid-js";

import { indexToDay } from "../Calendar/utils";

import styles from "../Calendar/styles.module.css";
import { DotWithPopover } from "../DotWithPopover";

interface Props {
    number: number;
    activeDay: boolean;
    dots: any[];
}

export const Cell: Component<Props> = ({ number, activeDay, dots }) => {
    return (
        <td classList={{
            [styles.calendarDay]: true,
            [styles.calendarDayActive]: activeDay,
        }}>
            <span class={`${styles.dayName} vh`}>
                {indexToDay(number)}
            </span>

            {dots && dots.length > 0 && (
                <div class={styles.dots}>
                    {dots.map((dot) => (
                        <DotWithPopover title={dot.information.title} content={dot.information.content} link={dot.information.link} />
                    )
                    )}
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
    )
}