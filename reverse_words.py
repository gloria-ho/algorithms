# https://www.codewars.com/kata/reverse-words

# Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

# Examples
# "This is an example!" ==> "sihT si na !elpmaxe"
# "double  spaces"      ==> "elbuod  secaps"

def reverse_words(text):
  result = []
  words = text.split(' ')
  for w in words:
    result.append(w[::-1])
  return ' '.join(result)

print(reverse_words("This is an example!")) # "sihT si na !elpmaxe"
print(reverse_words("double  spaces"))      # "elbuod  secaps"