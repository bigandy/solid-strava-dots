import type { Component } from "solid-js";
import { createSignal, Show } from "solid-js";

import styles from "./App.module.css";

import Calendar from "./components/Calendar";

const App: Component = () => {
  const [showCalendar, setShowCalendar] = createSignal(true);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Solid Strava Dots</h1>
      </header>

      <button onClick={() => setShowCalendar(!showCalendar())}>
        {showCalendar() ? "Hide" : "Show"} Calendar
      </button>

      {/* <Box showCalendar={showCalendar} setShowCalendar={setShowCalendar} /> */}
      <Show when={showCalendar()}>
        <Calendar />
      </Show>

      {/* <Calendar initialOffset={-2} />
      <Calendar initialOffset={-1} />
      <Calendar initialOffset={1} />

      <Calendar initialOffset={2} /> */}
    </div>
  );
};

const Box = ({
  showCalendar,
  setShowCalendar,
}: {
  showCalendar: any;
  setShowCalendar: any;
}) => {
  const handleBoxClose = () => {
    console.log("close the box");
    setShowCalendar((o) => !o);
  };

  return (
    <div
      style={{
        "background-color": "red",
        width: "100px",
        height: "100px",
      }}
    >
      {showCalendar() ? (
        <>
          <p>I am open</p>
          <button onClick={handleBoxClose}>Close the box</button>
        </>
      ) : (
        <>
          <p>I am Closed</p>
          <button onClick={handleBoxClose}>Open the box</button>
        </>
      )}
    </div>
  );
};

export default App;
