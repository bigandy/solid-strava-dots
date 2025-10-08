import type { Component } from "solid-js";

import dayjs from "dayjs";

import { getDMY } from './components/Calendar/utils';

import styles from "./App.module.css";

import Calendar from "./components/Calendar";
import CalendarWithData from "./components/CalendarWithData";

const now = dayjs();

const dummyInformation = {
  title: "test",
  content: "test content",
  link: 'https://andrewhudson.dev'
}

const dummyData = [
  {
    date: getDMY(now.add(1, "day")),
    information: dummyInformation
  },
  {
    date: getDMY(now),
    information: dummyInformation
  },
  {
    date: getDMY(now.subtract(1, "day")),
    information: dummyInformation
  },
  {
    date: getDMY(now.subtract(1, "day")),
    information: dummyInformation
  },
  {
    date: getDMY(now.subtract(1, "day")),
    information: dummyInformation
  },
  {
    date: getDMY(now.add(1, "month")),
    information: dummyInformation
  },
  {
    date: getDMY(now.add(2, "month")),
    information: dummyInformation
  },
  {
    date: getDMY(now.add(3, "month")),
    information: dummyInformation
  },
];

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Solid Strava Dots</h1>
      </header>

      <h2>Regular Calendar with no data</h2>
      <Calendar />

      <h2>Calendar with Data</h2>

      <CalendarWithData data={dummyData} />
    </div>
  );
};

export default App;
