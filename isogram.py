# https://www.codewars.com/kata/isograms

# An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

# is_isogram("Dermatoglyphics" ) == true
# is_isogram("aba" ) == false
# is_isogram("moOse" ) == false # -- ignore letter case

def is_isogram(string):
  return True if len(list(string.lower())) == len(set(string.lower())) else False

print(is_isogram('Dermatoglyphics'))