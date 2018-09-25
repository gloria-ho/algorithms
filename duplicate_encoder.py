# httfunc(ps://www.codewars.com/kata/duplicate-encoder

# The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

# Examples:

# "din" => "((("

# "recede" => "()()()"

# "Success" => ")())())"

# "(( @" => "))(("


# Notes:

# Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input! (these languages are locked so that's not possible to correct it).

from collections import Counter

def duplicate_encode(word):
  word = word.lower()
  count = Counter(word)
  result = ''
  for x in word:
    if count[x] == 1:
      result += '('
    else:
      result += ')'
  return result


print(duplicate_encode('din')) # '((('
print(duplicate_encode('recede')) # '()()()'
print(duplicate_encode('Success')) # ')())())'
print(duplicate_encode('(( @')) # '))(('