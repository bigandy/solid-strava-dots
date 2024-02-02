import { type Component, createSignal } from "solid-js";

import styles from "./styles.module.css";

import { Header } from "./Header";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBodyv2";

interface Props {
  initialOffset?: number;
  showDots?: boolean;
}

const Calendar: Component<Props> = (props) => {
  const [offset, setOffset] = createSignal(props.initialOffset ?? 0);

  return (
    <div class={styles.wrapper}>
      <div
        classList={{
          [styles.calendar]: true,
          [styles.showDots]: props.showDots,
          [styles.currentCalendar]: offset() === 0,
        }}
      >
        <Header offset={offset} setOffset={setOffset} showOffset={false} />
        <table>
          <TableHeader />
          <TableBody offset={offset} showDots={props.showDots} />
        </table>
      </div>
    </div>
  );
};

export default Calendar;
