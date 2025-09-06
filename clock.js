// clock.js
document.addEventListener("DOMContentLoaded", () => {
  const startDate = new Date(2021, 8, 13, 15, 45, 0); // Sept 13, 2021, 3:45 PM

  function updateClock() {
    const now = new Date();

    // Years and months calculation
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    // Adjusted start for weeks/hours/minutes/seconds
    const adjustedStart = new Date(startDate);
    adjustedStart.setFullYear(adjustedStart.getFullYear() + years);
    adjustedStart.setMonth(adjustedStart.getMonth() + months);

    let diffMs = now - adjustedStart;

    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInWeek = msInDay * 7;

    const weeks = Math.floor(diffMs / msInWeek);
    diffMs -= weeks * msInWeek;

    const remDays = Math.floor(diffMs / msInDay);
    diffMs -= remDays * msInDay;

    const hours = Math.floor(diffMs / msInHour);
    diffMs -= hours * msInHour;

    const minutes = Math.floor(diffMs / msInMinute);
    diffMs -= minutes * msInMinute;

    const seconds = Math.floor(diffMs / msInSecond);

    // Update individual clock segments
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("weeks").textContent = weeks;
    document.getElementById("days").textContent = remDays;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Total times
    const totalMs = now - startDate;
    document.getElementById("totalSeconds").textContent = Math.floor(totalMs / msInSecond);
    document.getElementById("totalMinutes").textContent = Math.floor(totalMs / msInMinute);
    document.getElementById("totalHours").textContent = Math.floor(totalMs / msInHour);
    const totalDays = Math.floor(totalMs / msInDay);
    document.getElementById("totalDays").textContent = totalDays;
    document.getElementById("totalWeeks").textContent = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months + days / 30;
    const totalYears = years + months / 12 + days / 365;
    document.getElementById("totalMonths").textContent = totalMonths.toFixed(1);
    document.getElementById("totalYears").textContent = totalYears.toFixed(2);
  }

  updateClock();
  setInterval(updateClock, 1000);
});
