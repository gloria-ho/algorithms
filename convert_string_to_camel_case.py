# https://www.codewars.com/kata/convert-string-to-camel-case

# Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

# Examples
# to_camel_case("the-stealth-warrior") # returns "theStealthWarrior"
# to_camel_case("The_Stealth_Warrior") # returns "TheStealthWarrior"

import re

def to_camel_case(text):
  arr = re.split('[- _]', text)
  result = [arr[0]]
  for x in arr[1:]:
    result.append(x.title())
  return ''.join(result)

print(to_camel_case("the-stealth-warrior")) # "theStealthWarrior"
print(to_camel_case("The_Stealth_Warrior")) # "TheStealthWarrior"