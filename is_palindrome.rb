# Is It A Palindrome?
# Write a function that takes in a string and returns true or false depending on whether or not that string is a palindrome.

# Example: input 'racecar' -> true, input 'platypus' -> false


# first attempt
# halve the string
# check each letter from beginning against each letter from end
# if it does not match, return false and stop the function
# if it runs to end, input is a pandindrome and return true
#
# def is_palindrome(str)
#   arr = str.split('')
#   for x in 0..arr.length/2 do
#     if arr[x] != arr[-x - 1]
#       return false
#     end
#   end
#   true
# end

# second attempt
# check if first and last letter are equal
# if true, run the same function recursively on the substring of the second letter to the second to last letter
#
def is_palindrome(str)
  if str.length <= 1
    return true
  elsif str[0] == str[-1]
    is_palindrome(str[1..-2])
  end
  false
end


# def is_palindrome(str)
#   str == str.reverse
# end

p is_palindrome('racecar') # true
p is_palindrome('platypus') # false

