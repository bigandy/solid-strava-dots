import type { Component } from "solid-js";

import dayjs from "dayjs";

import styles from "./App.module.css";

import Calendar from "./components/Calendar";
import CalendarWithData from "./components/CalendarWithData";

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

      <CalendarWithData data={dummyData} />
    </div>
  );
};

export default App;
