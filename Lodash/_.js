const _ = {
  clamp(number, lower, upper) {
    lowerClampedValue = Math.max(number, lower);
    ClampedValue = Math.min(lowerClampedValue, upper);
    return ClampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      const temp = end;
      end = start;
      start = temp;
    }
    const isInRange = start <= number && number < end;
    return isInRange;
  },
};
// Do not write or modify code below this line.
module.exports = _;
