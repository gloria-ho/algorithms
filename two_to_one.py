# https://www.codewars.com/kata/two-to-one

# Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

# each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
# a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

# first attempt - checks for distinct upper and lowercase, as well as removes spaces.
def longest(s1, s2):
  return ''.join(sorted(set(s1+s2.lower()))).strip()

# second attempt fits minimum requirements for problem
def longest(s1, s2):
  return ''.join(sorted(set(s1+s2)))

print longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") # 'abcdefklmopqwxy'
