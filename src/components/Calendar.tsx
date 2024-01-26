import {
  onCleanup,
  onMount,
  type Component,
  For,
  createSignal,
  createEffect,
} from "solid-js";
import dayjs from "dayjs";

import styles from "./Calendar.module.css";

const dayToNumericDay = (firstDayofMonth: string) => {
  let firstDayNumeric = 0;

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  daysOfWeek.forEach((dayofWeek, index) => {
    if (dayofWeek === firstDayofMonth) {
      firstDayNumeric = index + 1;
    }
  });

  return firstDayNumeric;
};

const getMonth = (offset = 0) => {
  const today = dayjs().add(offset, "month");
  const month = today.format("MMMM");
  const year = today.format("YYYY");
  const daysInMonth = today.daysInMonth();
  const firstDayofMonth = dayToNumericDay(today.startOf("month").format("dd"));

  const todayDay = offset === 0 ? parseInt(today.format("DD")) : 0;

  return {
    month,
    year,
    daysInMonth,
    firstDayofMonth,
    todayDay,
  };
};

const indexToDay = (index: number) => {
  switch (index) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "no day";
  }
};

const Header = (props: {
  offset: number;
  setOffset: (offset: number) => void;
}) => {
  const { month, year } = getMonth(props.offset);

  // wrap a span around each letter
  const monthSpread = [...month].map((letter) => <span>{letter}</span>);

  return (
    <header>
      <h1 class={styles.calendarMonth}>{monthSpread}</h1>
      <h2 class={styles.calendarYear}>{year}</h2>

      <div>
        <button onClick={() => props.setOffset(props.offset - 1)}>Prev</button>
        <button onClick={() => props.setOffset(props.offset + 1)}>Next</button>
      </div>
    </header>
  );
};

const Table: Component<{
  offset: number;
  setOffset: (offset: number) => void;
}> = (props) => {
  const currentClass = props.offset === 0 ? styles.currentCalendar : "";

  // Rows
  // calculate number of rows.

  const rowsReturn = () => {
    let dayCount = 0;
    const { daysInMonth, firstDayofMonth, todayDay } = getMonth(props.offset);
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
                      class={`${
                        dayCount === todayDay
                          ? `${styles.calendarDay} ${styles.calendarDayActive}`
                          : `${styles.calendarDay}`
                      }`}
                    >
                      <span class={`${styles.dayName} vh`}>
                        {indexToDay(i() + 1)}
                      </span>
                      <span class={styles.dayCount}>{dayCount}</span>
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
    <div class={`${styles.calendar} ${currentClass}`}>
      <Header offset={props.offset} setOffset={props.setOffset} />
      <table class="calendar_days">
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
        <tbody>{rowsReturn()}</tbody>
      </table>
    </div>
  );
};

const Calendar: Component<{ initialOffset?: number }> = ({
  initialOffset = 0,
}) => {
  //   onMount(() => {
  //     console.log("Calendar onMount");
  //   });

  //   onCleanup(() => console.log("Calendar onCleanup"));

  const [offset, setOffset] = createSignal(initialOffset);

  return (
    <div>
      <h1>Calendar</h1>

      <div class={styles.wrapper}>
        <Table offset={offset()} setOffset={setOffset} />
      </div>
    </div>
  );
};

export default Calendar;
