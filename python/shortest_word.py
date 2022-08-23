# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.

def find_short(s):
  s = s.split(' ')
  l = len(s[0])
  for x in s:
    print x
    if len(x) < l:
      l = len(x)
  return l