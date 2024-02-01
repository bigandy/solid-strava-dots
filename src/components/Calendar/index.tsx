import { type Component, For, createSignal } from "solid-js";

import styles from "./styles.module.css";

import { getMonth, indexToDay } from "./utils";

import { Header } from "./Header";
import { TableHeader } from "./TableHeader";

interface Props {
  initialOffset?: number;
  showDots?: boolean;
}

const Calendar: Component<Props> = ({ initialOffset = 0, showDots }) => {
  const [offset, setOffset] = createSignal(initialOffset);

  const rowsReturn = () => {
    // Rows
    // calculate number of rows.
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
                          vh: showDots,
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

  return (
    <div class={styles.wrapper}>
      <div
        classList={{
          [styles.calendar]: true,
          [styles.showDots]: showDots,
          [styles.currentCalendar]: offset() === 0,
        }}
      >
        <Header offset={offset} setOffset={setOffset} showOffset={false} />
        <table>
          <TableHeader />
          <tbody>{rowsReturn()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
