# Build A Triangle
# write a function that takes an integer, n, and prints out a triangle of base n to the console, ex:

  #
  ##
  ###
  ####
  #####
  ######
  #######
  ########

# using a for in range loop, start at 1 and count to n + 1 (inclusive of n)
# print '#' n ammount of times
def make_triangle(n):
  for x in range(1, n + 1):
    print x * '#'

print make_triangle(3)