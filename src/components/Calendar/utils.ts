import dayjs from "dayjs";

const dayToNumericDay = (firstDayofMonth: string) => {
  let firstDayNumeric = 0;

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  daysOfWeek.forEach((dayofWeek, index) => {
    if (dayofWeek === firstDayofMonth) {
      firstDayNumeric = index + 1;
    }
  });

  return firstDayNumeric;
};

export const getMonth = (offset: number) => {
  const today = dayjs().add(offset, "month");
  const month = today.format("MMMM");
  const year = today.format("YYYY");
  const daysInMonth = today.daysInMonth();
  const firstDayofMonth = dayToNumericDay(today.startOf("month").format("dd"));

  const todayDay = offset === 0 ? parseInt(today.format("DD")) : 0;

  return {
    month,
    year,
    daysInMonth,
    firstDayofMonth,
    todayDay,
  };
};

export const indexToDay = (index: number) => {
  switch (index) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "no day";
  }
};
