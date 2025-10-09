import { type Accessor, type Component, For } from "solid-js";

import { CellWithDots } from "./Cell";

import { getMonthDays } from "../Calendar/utils";

import { type DotData } from '../CalendarWithData';

interface Props {
    offset: Accessor<number>;
    data?: Array<DotData>
}

export const Rows: Component<Props> = (props) => {
    const rows = () => getMonthDays(props.offset());

    return (
        <For each={rows()}>
            {(row) => (
                <tr>
                    <For each={row}>
                        {(cell, cellIndex) => {
                            if (!cell) {
                                return (<td />)
                            }

                            const todayDots = props.data?.filter(dot => dot.date === cell.date);

                            return (
                                <CellWithDots
                                    number={cell.number}
                                    activeDay={cell.activeDay}
                                    dots={todayDots || []}
                                    index={cellIndex() + 1}
                                />
                            )
                        }}
                    </For>
                </tr>
            )}
        </For>
    );
};

