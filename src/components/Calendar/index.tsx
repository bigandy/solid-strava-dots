import { type Component, For, createSignal, Show } from "solid-js";

import Button from "../Button";

import styles from "./styles.module.css";

import { getMonth, indexToDay } from "./utils";

const Header = ({
  offset,
  setOffset,
  showOffset,
}: {
  offset: any;
  setOffset: any;
  showOffset: boolean;
}) => {
  const derivedGetMonthlyData = () => getMonth(offset());

  // wrap a span around each letter
  const monthSpread = () =>
    [...derivedGetMonthlyData().month].map((letter) => <span>{letter}</span>);

  return (
    <header>
      <Show when={showOffset}>
        <p>Offset: {offset()}</p>
      </Show>
      <h1 class={styles.calendarMonth}>{monthSpread()}</h1>
      <h2 class={styles.calendarYear}>{derivedGetMonthlyData().year}</h2>

      <div>
        <Button primary onClick={() => setOffset((o: number) => o - 1)}>
          Prev
        </Button>

        <Button secondary onClick={() => setOffset(0)} disabled={offset === 0}>
          Now
        </Button>

        <Button primary onClick={() => setOffset((o: number) => o + 1)}>
          Next
        </Button>
      </div>
    </header>
  );
};

const TableHeader: Component = () => {
  return (
    <thead>
      <tr>
        <th>
          m<span class={styles.medium}>on</span>
          <span class={styles.long}>day</span>
        </th>
        <th>
          tu<span class={styles.medium}>e</span>
          <span class={styles.long}>sday</span>
        </th>
        <th>
          w<span class={styles.medium}>ed</span>
          <span class={styles.long}>nesday</span>
        </th>
        <th>
          th<span class={styles.medium}>u</span>
          <span class={styles.long}>rsday</span>
        </th>
        <th>
          f<span class={styles.medium}>ri</span>
          <span class={styles.long}>day</span>
        </th>
        <th>
          sa<span class={styles.medium}>t</span>
          <span class={styles.long}>urday</span>
        </th>
        <th>
          su<span class={styles.medium}>n</span>
          <span class={styles.long}>day</span>
        </th>
      </tr>
    </thead>
  );
};

interface Props {
  initialOffset?: number;
  showDots?: boolean;
  data?: any; // TODO: type this
}

const Calendar: Component<Props> = ({ initialOffset = 0, showDots, data }) => {
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
