import dayjs from "dayjs";
import { type Accessor, type Component, For } from "solid-js";

import { Cell } from "./Cell";

import { getDMY, getMonth } from "../Calendar/utils";

import { type DotData } from '../CalendarWithData'

interface Props {
    offset: Accessor<number>;
    data?: Array<DotData>
}

export const Rows: Component<Props> = (props) => {
    const derivedMonth = () => getMonth(props.offset());

    const monthDays = () => {
        const items = Math.ceil((derivedMonth().daysInMonth + derivedMonth().firstDayofMonth) / 7)

        let count = 0;
        const dates = [...new Array(items)].map((_, rowIndex) => {

            const days = [...new Array(7).fill('x')].map((_, cellIndex) => {
                if ((rowIndex === 0 && (cellIndex + 1) < derivedMonth().firstDayofMonth) || (count > derivedMonth().daysInMonth - 1)) {
                    return null;
                } else {
                    count++;

                    return {
                        number: count,
                        date: getDMY(dayjs(`${count}-${derivedMonth().month}-${derivedMonth().year}`)),
                    };
                }
            }
            );

            return days;
        })

        return dates;
    };

    return (
        <For each={monthDays()}>
            {(row) => (
                <tr>
                    <For each={row}>
                        {(cell) => {
                            if (!cell) {
                                return (<td />)
                            }

                            // const todayDot = flattenedDates?.includes(cell.date);
                            const todayDots = props.data?.filter(dot => dot.date === cell.date);

                            return (
                                <Cell
                                    number={cell.number}
                                    activeDay={cell.number === derivedMonth().todayDay}
                                    dots={todayDots || []}
                                />
                            )
                        }}
                    </For>
                </tr>
            )}
        </For>
    );
};

