import { Component } from "solid-js";

import { indexToDay } from "../Calendar/utils";

import styles from "../Calendar/styles.module.css";

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
                <div class="dots">
                    {dots.map((dot) => {
                        return (
                            <>
                                <div class={styles.dot}></div>
                                <div popover>
                                    <h2>{dot.information.title}</h2>
                                    <p>{dot.information.content}</p>
                                    <a href={dot.information.link}>LINK TEXT</a>
                                </div>

                            </>
                        )
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
    )
}