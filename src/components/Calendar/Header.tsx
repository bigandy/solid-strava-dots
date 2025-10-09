import { type Accessor, type Component, type Setter } from "solid-js";

import Button from "../Button";

import styles from "./styles.module.css";

import { getMonth } from "./utils";

interface Props {
  offset: Accessor<number>;
  setOffset: Setter<number>;
}

export const Header: Component<Props> = ({ offset, setOffset }) => {
  const derivedGetMonthlyData = () => getMonth(offset());

  const monthsWrappedInSpans = () =>
    [...derivedGetMonthlyData().month].map((letter) => <span>{letter}</span>);

  return (
    <header>
      <h1 class={styles.calendarMonth}>{monthsWrappedInSpans()}</h1>
      <h2 class={styles.calendarYear}>{derivedGetMonthlyData().year}</h2>

      <div>
        <Button primary onClick={() => setOffset((o) => o - 1)}>
          Prev
        </Button>

        <Button
          secondary
          onClick={() => setOffset(0)}
          disabled={offset() === 0}
        >
          Now
        </Button>

        <Button primary onClick={() => setOffset((o) => o + 1)}>
          Next
        </Button>
      </div>
    </header>
  );
};
