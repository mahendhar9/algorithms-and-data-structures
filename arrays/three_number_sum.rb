# Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
# The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array 
# of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves 
# should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum,
# the function should return an empty array.

# Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0
# Sample output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

def three_number_sum(array, target_sum)
  array.sort!
  triplets = []
  (0...array.length-2).each do |i|
    left = i + 1
    right = array.length-1
    while left < right
      current_sum = array[i] + array[left] + array[right]
      if(current_sum === target_sum)
        triplets.push([array[i], array[left], array[right]])
        left += 1
        right -= 1
      elsif current_sum < target_sum
        left += 1
      elsif current_sum > target_sum
        right -= 1
      end
    end
  end
  return triplets
end

