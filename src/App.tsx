import type { Component } from "solid-js";
import { createSignal, createEffect, onCleanup, Show } from "solid-js";

import styles from "./App.module.css";

import Thingulator from "./components/Thingulator";
import Calendar from "./components/Calendar";

const App: Component = () => {
  const [showCalendar, setShowCalendar] = createSignal(true);

  let timerId: number;

  onCleanup(() => window.clearInterval(timerId));

  const [count, setCount] = createSignal(0);
  const [running, setRunning] = createSignal(false);

  createEffect(() => {
    let intervalId: number;
    if (running()) {
      intervalId = setInterval(() => {
        setCount((c) => c + 1);
      }, 100);
    }
    onCleanup(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });
  });

  const reset = () => {
    setRunning(false);
    setCount(0);
  };

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Solid Strava Dots</h1>
      </header>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={reset}>Reset</button>

      <Thingulator count={count} />

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
