# https://www.codewars.com/kata/5412509bd436bd33920011bc

# Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

# Your task is to write a function maskify, which changes all but the last four characters into '#'.

# Examples
# maskify("4556364607935616") == "############5616"
# maskify(     "64607935616") ==      "#######5616"
# maskify(               "1") ==                "1"
# maskify(                "") ==                 ""

# // "What was the name of your first pet?"
# maskify("Skippy")                                   == "##ippy"
# maskify("Nananananananananananananananana Batman!") == "####################################man!"

#
# first solution
#

def maskify(cc):
  if len(cc) == 0:
    return ''
  elif len(cc) <= 4:
    return cc
  else:
    result = []
    for x in cc[:-4]:
      result += '#'
    return str(''.join(result)) + str(cc[-4:])

#
# second solution
#
def maskify(cc):
  new_x = ''
  for x in cc[:-4]:
    new_x += '#'
  return new_x + cc[-4:]

#
# third solution
#

def maskify(cc):
  return (len(cc)-4) * '#' + cc[-4:]