import { Component } from "solid-js";

import { indexToDay } from "../Calendar/utils";

import styles from "../Calendar/styles.module.css";
import { DotWithPopover } from "../DotWithPopover";
import { Dot } from "../Dot";

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
                    {dots.map((dot) => {
                        if (dot.information) {
                            return (
                                <DotWithPopover title={dot.information.title} content={dot.information.content} link={dot.information.link} />
                            )
                        } else {
                            return (
                                <>
                                    <Dot /></>
                            )
                        }

                    }
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