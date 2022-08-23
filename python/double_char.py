# https://www.codewars.com/kata/56b1f01c247c01db92000076

# Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

# doubleChar("String") ==> "SSttrriinngg"

# doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

# doubleChar("1234!_ ") ==> "11223344!!__  "

def double_char(s):
  result = []
  for x in s:
    result.append(x*2)
  return ''.join(result)