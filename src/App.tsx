import type { Component } from "solid-js";

import dayjs from "dayjs";

import styles from "./App.module.css";

import Calendar from "./components/Calendar";

const now = dayjs();
const dummyData = {
  nowAddOne: now.add(1, "day"),
  now,
  nowMinusOne: now.subtract(1, "day"),
};

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Solid Strava Dots</h1>
      </header>

      <h2>Regular Calendar with no data</h2>
      <Calendar />

      <h2>Calendar with dots</h2>

      <Calendar showDots />

      {/* <Calendar initialOffset={-2} />
      <Calendar initialOffset={-1} />
      <Calendar initialOffset={1} />

      <Calendar initialOffset={2} /> */}
    </div>
  );
};

export default App;
