# Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.
# Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
# Sample output: [-1, 11]

# Solution 1
# O(n^2) time | O(1) space
# def two_number_sum(array, targetSum)
#   (0...array.length).each do |i|
#     first_num = array[i]
#     (i+1...array.length).each do |j|
#       second_num = array[j]
#       if (first_num + second_num == targetSum) 
#         return print [first_num, second_num].sort
#       end
#     end
#   end
#   return []
# end

# Solution 2
# O(n) time | O(n) space
def two_number_sum(array, targetSum)
  nums = {}
  array.each do |num|
    potential_match = targetSum - num
    if(nums.has_key?(potential_match))
      return [potential_match, num].sort
    else
      nums[num] = true
    end
  end
  return []
end

# Solution 3
# O(nlog(n)) time | O(1) space
# def two_number_sum(array, targetSum)
#   array.sort!
#   left = 0
#   right = array.length - 1
#   while(left < right)
#     current_sum = array[left] + array[right]
#     if(current_sum == targetSum)
#       return [array[left], array[right]]
#     elsif current_sum < targetSum
#       left += 1
#     elsif current_sum > targetSum
#       right -= 1
#     end
#   end
#   return []
# end


