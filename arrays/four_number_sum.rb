# Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
# The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array 
# of all these quadruplets in no particular order. If no four numbers sum up to the target sum, the function should 
# return an empty array.

# Sample input: [7, 6, 4, -1, 1, 2], 16
# Sample output: [[7, 6, 4, -1], [7, 6, 1, 2]]

# Average: O(n^2) time | O(n^2) space
# Worst: O(n^3) time | O(n^2) space
def four_number_sum(array, target_sum)
  all_pair_sums = {}
  quadruplets = []
  # Excluding first and last element
  (1...array.length-1).each do |i|
    (i+1...array.length).each do |j|
      current_sum = array[i] + array[j]
      difference = target_sum - current_sum
      if all_pair_sums.has_key?(difference)
        all_pair_sums[difference].each do |pair|
          quadruplets.push(pair + [array[i], array[j]])
        end
      end
    end

    (0...i).each do |k|
      current_sum = array[i] + array[k]
      if all_pair_sums.has_key?(current_sum)
        all_pair_sums[current_sum].push([array[k], array[i]])
      else
        all_pair_sums[current_sum] = [[array[k], array[i]]]
      end
    end
  end

  return quadruplets
end

