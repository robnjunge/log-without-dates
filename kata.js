// You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.

// It is known that all events are recorded in chronological order and two events can't occur in the same second.

// Return the minimum number of days during which the log is written.


function checkLogs(log) {
  if (log.length === 0) {
    return 0;
  }

  let days = 1;
  let prevEvent = log[0];

  for (let i = 1; i < log.length; i++) {
    const prevTime = prevEvent.split(":").map(Number);
    const currTime = log[i].split(":").map(Number);

    const prevSeconds = prevTime[0] * 3600 + prevTime[1] * 60 + prevTime[2];
    const currSeconds = currTime[0] * 3600 + currTime[1] * 60 + currTime[2];

    if (currSeconds <= prevSeconds) {
      days++;
    }

    prevEvent = log[i];
  }

  return days;
}

// Test cases
console.log(checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]));  // Output: 1
console.log(checkLogs(["12:12:12"]));  // Output: 1
console.log(checkLogs(["12:00:00", "23:59:59", "00:00:00"]));  // Output: 2
console.log(checkLogs([]));  // Output: 0
console.log(checkLogs(["12:00:00", "12:00:00", "00:00:00"]));  // Output: 3
