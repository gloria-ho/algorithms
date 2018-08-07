# https://www.codewars.com/kata/count-characters-in-your-string

# The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

# What if the string is empty ? Then the result should be empty object literal { }

# For C#: Use a Dictionary<char, int> for this kata!

def count(string):
  count = {}
  for x in string:
    if x in count.keys():
      count[x] += 1
    else:
      count[x] = 1
  return count

print(count('aba'))
print(count(''))