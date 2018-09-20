# https://www.codewars.com/kata/find-the-unique-number-1

# There is an array with some numbers. All numbers are equal except for one. Try to find it!

# findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
# findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
# Its guaranteed that array contains more than 3 numbers.

# The tests contain some very huge arrays, so think about performance.

# This is the first kata in series:

# Find the unique number (this kata)
# Find the unique string
# Find The Unique

from collections import Counter

def find_uniq(arr):
  counter = Counter(arr)
  for n in counter:
    if counter[n] == 1:
      return n
  # return n for n in counter if counter[n] == 1

print(find_uniq([ 1, 1, 1, 2, 1, 1 ])) # 2
print(find_uniq([ 0, 0, 0.55, 0, 0 ])) # 0.55