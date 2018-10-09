import re

def validPhoneNumber(phoneNumber):
  return True if re.match(r'^([0-9]{3}) [0-9]{3}-[0-9]{4}$', phoneNumber) else False

print validPhoneNumber("(123) 456-7890") # true
print validPhoneNumber("(1111)555 2345") # false
print validPhoneNumber("abc(123)456-7890abc") # false