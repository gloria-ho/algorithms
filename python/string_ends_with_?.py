# https://www.codewars.com/kata/string-ends-with

# Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

# Examples:

# solution('abc', 'bc') # returns true
# solution('abc', 'd') # returns false

# first attempt, ternary
def solution(string, ending):
  return True if string[-len(ending):] == ending else False

# cleaner code
def solution(string, ending):
  return string[-len(ending):] == ending

print(solution('abc', 'bc')) # True
print(solution('abc', 'd')) # False