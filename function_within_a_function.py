# https://www.codewars.com/kata/53844152aa6fc137d8000589

# Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

# var three = always(3);
# three(); // returns 3

def always(n=0):
  return lambda:n