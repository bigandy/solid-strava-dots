import { type Component, Accessor } from "solid-js";

import styles from "./styles.module.css";

import { getMonth, indexToDay } from "./utils";

interface Props {
  offset: Accessor<number>;
  showDots?: boolean;
}

// Want to re-rende it all when the offset changes.
export const TableBody: Component<Props> = ({ offset, showDots }) => {
  const derivedGetMonth = () => getMonth(offset());
  const daysInMonth = () => derivedGetMonth().daysInMonth;
  const firstDayofMonth = () => derivedGetMonth().firstDayofMonth;
  const todayDay = () => derivedGetMonth().todayDay;
  const rows = () => Math.ceil((daysInMonth() + firstDayofMonth()) / 7);

  return (
    <tbody>
      {[...new Array(rows())].map((_, rowIndex) => {
        return (
          <tr>
            {[...new Array(7)].map((_, columnIndex) => {
              const dayNumber = () =>
                rowIndex * 7 + 1 * (columnIndex + 1) - firstDayofMonth() + 1;

              const isCalendarDay =
                dayNumber() < daysInMonth() + 1 && dayNumber() > 0;
              const isToday = dayNumber() > 0 && dayNumber() === todayDay();

              return (
                <td
                  classList={{
                    [styles.calendarDay]: isCalendarDay,
                    [styles.calendarDayActive]: isToday,
                  }}
                >
                  <span class={`${styles.dayName} vh`}>
                    {indexToDay(columnIndex + 1)}
                  </span>
                  <span
                    classList={{
                      [styles.dayCount]: true,
                      vh: showDots,
                    }}
                  >
                    {isCalendarDay && dayNumber()}
                  </span>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
