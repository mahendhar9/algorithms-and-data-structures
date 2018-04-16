# Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of 
# numbers contained in that array. The first number in the output array should be the first number in the range while the
# second number should be the last number in the range. A range of numbers is defined as a set of numbers that come right
# after each other in the set of real integers. For instance, the output array [2, 6] represents the range {2, 3, 4, 5, 6}
# , which is a range of length 5. Note that numbers do not need to be ordered or adjacent in the array in order to form a 
# range. Assume that there will only be one largest range.

# Sample input: [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
# Sample output: [0, 7]

# O(n) time | O(n) space
def largest_range(array)
  best_range = []
  longest_length = 0
  nums = {}

  array.each do |num|
    nums[num] = true
  end

  array.each do |num|
    # Jump to the next iteration of the loop if nums[num] = false
    if !nums[num]
      next
    end

    nums[num] = false
    current_length = 1
    left = num - 1
    right = num + 1

    while nums.has_key?(left)
      nums[left] = false
      current_length += 1
      left -= 1
    end

    while nums.has_key?(right)
      nums[right] = false
      current_length += 1
      right += 1
    end

    if current_length > longest_length
      longest_length = current_length
      best_range = [left + 1, right - 1]
    end
  end

  return best_range
end

