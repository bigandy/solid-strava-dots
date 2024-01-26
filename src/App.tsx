import type { Component } from "solid-js";
// import { createSignal } from "solid-js";

import styles from "./App.module.css";

import Calendar from "./components/Calendar";

const App: Component = () => {
  // const [showCalendar, setShowCalendar] = createSignal(true);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Solid Strava Dots</h1>
      </header>

      {/* <button onClick={() => setShowCalendar(!showCalendar())}>
        {showCalendar() ? "Hide" : "Show"} Calendar
      </button> */}
      <Calendar />

      {/* <Calendar initialOffset={-2} />
      <Calendar initialOffset={-1} />
      <Calendar initialOffset={1} />

      <Calendar initialOffset={2} /> */}
    </div>
  );
};

export default App;
