# Write a function that takes in an array of integers of length at least 2. The function should return an array of the starting
# and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire input
# array to be sorted. If the input array is already sorted, the function should return [-1, -1].

# Sample input: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
# Sample output: [3, 9]

# O(n) time | O(1) space
def subarray_sort(array)
  min_out_of_order = Float::INFINITY
  max_out_of_order = -Float::INFINITY
  (0...array.length).each do |i|
    num = array[i]
    # Check if num is greater than the previous number and less than the next number
    if is_out_of_order(i, num, array)
      min_out_of_order = [min_out_of_order, num].min
      max_out_of_order = [max_out_of_order, num].max
    end
  end

  if min_out_of_order == Float::INFINITY
    return [-1, 1] # Array is already sorted
  end

  subarray_left_idx = 0
  while(min_out_of_order >= array[subarray_left_idx])
    subarray_left_idx += 1
  end

  subarray_right_idx = array.length - 1
  while(max_out_of_order <= array[subarray_right_idx])
    subarray_right_idx -= 1
  end

  return [subarray_left_idx, subarray_right_idx]
end

def is_out_of_order(i, num, array)
  if i == 0
    return num > array[i+1] # Assert that num is greater than its next number
  elsif i == array.length - 1
    return num < array[i-1]
  else
    return num > array[i+1] || num < array[i-1] 
  end
end