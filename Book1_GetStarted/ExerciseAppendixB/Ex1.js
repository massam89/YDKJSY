const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  function getTotalMinutesFromTime(time) {
    const [hour, minute] = time.split(":").map((item) => +item);
    return hour * 60 + minute;
  }

  const dayStartMinutes = getTotalMinutesFromTime(dayStart);
  const dayEndMinutes = getTotalMinutesFromTime(dayEnd);
  const startTimeMinutes = getTotalMinutesFromTime(startTime);

  const isValid =
    startTimeMinutes >= dayStartMinutes &&
    startTimeMinutes <= dayEndMinutes &&
    startTimeMinutes + durationMinutes <= dayEndMinutes;

  isValid ? console.log(true) : console.log(false);
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false