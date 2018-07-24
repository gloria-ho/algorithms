# https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

# ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

# If the function is passed a valid PIN string, return true, else return false.

# eg:
# validatePIN("1234") === true
# validatePIN("12345") === false
# validatePIN("a234") === false

def validate_pin(pin):
  if len(pin) == 4 or len(pin) == 6:
    for x in pin:
      return False if x not in '1234567890' else True
  return False