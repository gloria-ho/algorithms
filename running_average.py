# https://www.codewars.com/kata/589e4d646642d144a90000d8

# Create a function running_average() that returns a callable function object. Update the series with each given value and calculate the current average.

# r_avg = running_average()
# r_avg(10) = 10.0
# r_avg(11) = 10.5
# r_avg(12) = 11
# All input values are valid. Round to two decimal places.

# This Kata is based on a example from Fluent Python book.

# Javascript // Lua // C++:
# Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.

# rAvg = runningAverage();

def running_average():
  record = []
  def avg(x):
    record.append(x)
    y = (sum(record) / len(record))
    if y % 1 != 0:
      y = '%.2f' % y
      return float(y.rstrip('0'))
    return y
  return avg