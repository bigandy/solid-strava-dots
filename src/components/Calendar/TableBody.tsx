import { type Component, For, Accessor } from "solid-js";

import styles from "./styles.module.css";

import { getMonth, indexToDay } from "./utils";

interface Props {
  offset: Accessor<number>;
}

export const TableBody: Component<Props> = ({ offset }) => {
  const rowsReturn = () => {
    let dayCount = 0;
    const { daysInMonth, firstDayofMonth, todayDay } = getMonth(offset());
    let rows = Math.ceil((daysInMonth + firstDayofMonth) / 7);

    return (
      <For each={new Array(rows)}>
        {(_, j) => (
          <tr>
            <For each={new Array(7)}>
              {(_, i) => {
                if (
                  (j() === 0 && i() + 1 < firstDayofMonth) ||
                  dayCount > daysInMonth - 1
                ) {
                  return <td></td>;
                } else {
                  dayCount++;
                  return (
                    <td
                      classList={{
                        [styles.calendarDay]: true,
                        [styles.calendarDayActive]: dayCount === todayDay,
                      }}
                    >
                      <span class={`${styles.dayName} vh`}>
                        {indexToDay(i() + 1)}
                      </span>
                      <span
                        classList={{
                          [styles.dayCount]: true,
                        }}
                      >
                        {dayCount}
                      </span>
                    </td>
                  );
                }
              }}
            </For>
          </tr>
        )}
      </For>
    );
  };

  return <tbody>{rowsReturn()}</tbody>;
};
