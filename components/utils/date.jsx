export function currentDate(dateToday) {
  const year = dateToday.toLocaleDateString("en-us", { year: "numeric" });
  const day = dateToday.toLocaleDateString("en-us", { day: "numeric" });
  const month = dateToday.toLocaleDateString("en-us", { month: "short" });
  const currDate = `${day} ${month} ${year}`;
  return currDate;
}
