# https://www.codewars.com/kata/moving-zeros-to-the-end

# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

def move_zeros(array):
  count = sum(1 for z in array if z == 0 and type(z) == int or type(z) == float)
  newArr = []
  for x in array:
    if type(x) != int and type(x) != float:
      newArr.append(x)
    elif x != 0 and x != 0.0:
      newArr.append(x)
  for z in range(count):
    newArr.append(0)
  return newArr


print(move_zeros([False,1,0,1,2,0,1,3,"a"]))
# [False,1,1,2,1,3,"a",0,0]

print(move_zeros(["a",0,0,"b",None,"c","d",0,1,False,0,1,0,3,[],0,1,9,0,0,{},0,0,9]))
# ["a","b",None,"c","d",1,False,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0])

print(move_zeros([0,1,None,2,False,1,0]))
# [1,None,2,False,1,0,0])