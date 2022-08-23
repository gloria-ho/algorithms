# https://www.codewars.com/kata/split-strings

# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore (solution('_').

# Examples:

# solution('abc') # should return ['ab', 'c_']
# solution('abcdef') # should return ['ab', 'cd', 'ef']

def solution(s):
  result = []
  for x in range(0, len(s), 2):
    if x + 1 < len(s):    
      result.append(s[x] + s[x+1])
    else:
      result.append(s[x] + '_')
  return result

print (solution('asdfadsf')) # ['as', 'df', 'ad', 'sf']
print (solution('asdfads')) # ['as', 'df', 'ad', 's_']
print (solution('')) # []
print (solution('x')) # ["x_"]