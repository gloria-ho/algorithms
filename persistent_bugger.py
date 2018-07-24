# https://www.codewars.com/kata/persistent-bugger/train/python

# Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

# For example:

#  persistence(39) => 3  # Because 3*9 = 27, 2*7 = 14, 1*4=4
#                        # and 4 has only one digit.

#  persistence(999) => 4 # Because 9*9*9 = 729, 7*2*9 = 126,
#                        # 1*2*6 = 12, and finally 1*2 = 2.

#  persistence(4) => 0   # Because 4 is already a one-digit number.
#  persistence(39) # returns 3, because 3*9=27, 2*7=14, 1*4=4
#                  # and 4 has only one digit

#  persistence(999) # returns 4, because 9*9*9=729, 7*2*9=126,
#                   # 1*2*6=12, and finally 1*2=2

#  persistence(4) # returns 0, because 4 is already a one-digit number

def persistence(n):
  num = str(n)
  if len(num) == 1:
    return 0
  mult = 1
  for x in list(num):
    mult *= int(x)
  count = 1
  while len(str(mult)) > 1:
    new = 1
    for x in list(str(mult)):
      new *= int(x)
    mult = new
    count += 1
  return count

print persistence(39) # 3
print persistence(4) # 0
print persistence(25) # 2
print persistence(999) # 4