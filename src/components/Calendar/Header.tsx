import { type Component, type Accessor, type Setter, Show } from "solid-js";

import Button from "../Button";

import styles from "./styles.module.css";

import { getMonth } from "./utils";

interface Props {
  offset: Accessor<number>;
  setOffset: Setter<number>;
  showOffset: boolean;
}

export const Header: Component<Props> = (props) => {
  const derivedGetMonthlyData = () => getMonth(props.offset());

  const monthsWrappedInSpans = () =>
    [...derivedGetMonthlyData().month].map((letter) => <span>{letter}</span>);

  return (
    <header>
      <Show when={props.showOffset}>
        <p>Offset: {props.offset()}</p>
      </Show>
      <h1 class={styles.calendarMonth}>{monthsWrappedInSpans()}</h1>
      <h2 class={styles.calendarYear}>{derivedGetMonthlyData().year}</h2>

      <div>
        <Button primary onClick={() => props.setOffset((o: number) => o - 1)}>
          Prev
        </Button>

        <Button
          secondary
          onClick={() => props.setOffset(0)}
          disabled={props.offset() === 0}
        >
          Now
        </Button>

        <Button primary onClick={() => props.setOffset((o: number) => o + 1)}>
          Next
        </Button>
      </div>
    </header>
  );
};
