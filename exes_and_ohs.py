# https://www.codewars.com/kata/55908aad6620c066bc00002a

# Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

# Examples input/output:

# XO("ooxx") => true
# XO("xooxx") => false
# XO("ooxXm") => true
# XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
# XO("zzoo") => false

#
# first solution
#
def xo(s):
  exes = 0
  ohs = 0
  for x in s:
    if x in 'Xx':
      exes += 1
    if x in 'Oo':
      ohs += 1
  return exes == ohs
#
# second solution
#
def xo(s):
  s = s.lower()
  return s.count('x') == s.count('o')