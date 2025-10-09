import { Accessor, type Component, For } from "solid-js";

import { getMonthDays, getMonth } from "./utils";

import { Cell } from '../CalendarWithData/Cell';

interface Props {
  offset: Accessor<number>;
}


export const Rows: Component<Props> = (props) => {
  const monthDays = () => getMonthDays(props.offset());

  return (
    <For each={monthDays()}>
      {(row) => (
        <tr>
          <For each={row}>
            {(cell, cellIndex) => {
              if (!cell) {
                return (<td />)
              }

              return (
                <Cell
                  number={cell.number}
                  activeDay={cell.activeDay}
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

