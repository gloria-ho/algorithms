# https://www.codewars.com/kata/camelcase-method

# Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

# For instance:

# camelcase("hello case") => HelloCase
# camelcase("camel case word") => CamelCaseWord

def camel_case(string):
  words = string.split(" ")
  result = ""
  for x in words:
    result += x.title()
  return result

print(camel_case("hello case")) # HelloCase
print(camel_case("camel case word")) # CamelCaseWord
print(camel_case("test case")) # "TestCase"
print(camel_case("camel case method")) # "CamelCaseMethod"
print(camel_case("say hello ")) # "SayHello"
print(camel_case(" camel case word")) # "CamelCaseWord"
print(camel_case("")) # ""