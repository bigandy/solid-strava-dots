import type { Component } from "solid-js";
import { createSignal, createEffect, onCleanup } from "solid-js";

import Thingulator from "../Thingulator";

const ThingulatorDemo: Component = () => {
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
    <>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={reset}>Reset</button>

      <Thingulator count={count} />
    </>
  );
};

export default ThingulatorDemo;
