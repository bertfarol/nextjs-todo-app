export const currentDate = (createdAt) => {
  const currDateToday = new Date();
  const currDay = currDateToday.toLocaleDateString("en-us", { day: "numeric" });
  const currMonth = currDateToday.toLocaleDateString("en-us", {
    month: "short",
  });

  const dateToday = new Date(createdAt);
  const year = dateToday.toLocaleDateString("en-us", { year: "numeric" });
  const day = dateToday.toLocaleDateString("en-us", { day: "numeric" });
  const month = dateToday.toLocaleDateString("en-us", { month: "short" });

  const currDate =
    day === currDay && month === currMonth
      ? "Today"
      : `${day} ${month} ${year}`;

  return currDate;
};
