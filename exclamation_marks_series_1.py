# https://www.codewars.com/kata/57fae964d80daa229d000126

# Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

# Examples
# remove("Hi!") === "Hi"
# remove("Hi!!!") === "Hi!!"
# remove("!Hi") === "!Hi"
# remove("!Hi!") === "!Hi"
# remove("Hi! Hi!") === "Hi! Hi"
# remove("Hi") === "Hi"

# Note
# Please don't post issue about difficulty or duplicate.

def remove(s):
  return s[:-1] if len(s)>0 and s[-1]=='!' else s