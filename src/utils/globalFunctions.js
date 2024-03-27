export function sortProducts(a, b, sortBy) {
  switch (sortBy) {
    case 0: {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
    case 1: {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    }
    case 2: {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    }
    case 3: {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    }
    default:
      return;
  }
}

function calculate_age(dob) {
  // Calculate the difference in milliseconds between the current date and the provided date of birth
  var diff_ms = Date.now() - dob.getTime();
  // Create a new Date object representing the difference in milliseconds and store it in the variable age_dt (age Date object)
  var age_dt = new Date(diff_ms);

  // Calculate the absolute value of the difference in years between the age Date object and the year 1970 (UNIX epoch)
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
