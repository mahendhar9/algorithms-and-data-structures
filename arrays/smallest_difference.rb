# Write a function that takes in two non-empty arrays of integers. The function should find the pair of numbers 
# (one from the first array, one from the second array) whose absolute difference is closest to zero. The function should 
# return an array containing these two numbers, with the number from the first array in the first position. Assume that 
# there will only be one pair of numbers with the smallest difference.

# Sample input: [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]
# Sample output: [28, 26]

# O(nlog(n) + mlog(m)) time | O(1) space
def smallest_difference(array_one, array_two)
  array_one.sort!
  array_two.sort!
  index_one = 0
  index_two = 0
  smallest = Float::INFINITY
  current_difference = Float::INFINITY
  smallest_pair = []
  while index_one < array_one.length && index_two < array_two.length
    first_num = array_one[index_one]
    second_num = array_two[index_two]
    if (first_num < second_num)
      current_difference = second_num - first_num
      index_one += 1
    elsif second_num < first_num
      current_difference = first_num - second_num
      index_two += 1
    else
      return [first_num, second_num]
    end

    if current_difference < smallest
      smallest = current_difference
      smallest_pair = [first_num, second_num]
    end
  end
  return smallest_pair
end

