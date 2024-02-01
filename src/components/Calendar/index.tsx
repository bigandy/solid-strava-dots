import { type Component, createSignal } from "solid-js";

import styles from "./styles.module.css";

import { Header } from "./Header";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

interface Props {
  initialOffset?: number;
  showDots?: boolean;
}

const Calendar: Component<Props> = ({ initialOffset = 0, showDots }) => {
  const [offset, setOffset] = createSignal(initialOffset);

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
          <TableBody offset={offset} showDots={showDots} />
        </table>
      </div>
    </div>
  );
};

export default Calendar;
