# https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

# Write function avg which calculates average of numbers in given list.

def find_average(array):
  if len(array) <= 0:
    return 0
  total = 0
  for x in array:
    total += x
  return total / len(array)