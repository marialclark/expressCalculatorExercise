function parseNumbers(numString) {
  if (!numString) {
    throw new Error("Numbers are required.");
  }
  const numArray = numString.split(",").map(num => {
    const parsedNum = parseFloat(num.trim());
    if (isNaN(parsedNum)) {
      throw new Error(`${num} is not a number.`);
    }
    return parsedNum;
  });
  return numArray;
}


function calculateMean (nums) {
  if(nums.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum/nums.length;
}


function calculateMedian (nums) {
  if(nums.length === 0) return 0;

  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);

  if (nums.length % 2 !== 0) {
    return nums[mid];
  } else {
    return (nums[mid - 1] + nums[mid]) / 2;
  }
}


function calculateMode (nums) {
  if(nums.length === 0) return "no mode";

  const frequency = {};
  let maxFrequency = 0;
  let mode = null;

  for (let num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num];
      mode = num;
    }
  }
  // Returns "no mode" in the case that the array did not have any repeating numbers.
  if (maxFrequency === 1) {
    return "no mode";
  }
  
  return mode;
}

module.exports = {
  parseNumbers,
  calculateMean,
  calculateMedian,
  calculateMode
}