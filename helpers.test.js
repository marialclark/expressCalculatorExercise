const { parseNumbers, calculateMean, calculateMedian, calculateMode } = require('./helpers');

describe('#parseNumbers', function() {
  it('should parse a comma-separated list of numbers into an array', function() {
    expect(parseNumbers('1,2,3')).toEqual([1, 2, 3]);
  });

  it('should handle spaces between numbers', function() {
    expect(parseNumbers('1, 2,  3')).toEqual([1, 2, 3]);
  });

  it('should throw an error if input is empty', function() {
    expect(() => parseNumbers('')).toThrow('Numbers are required.');
  });

  it('should throw an error if input contains non-numeric values', function() {
    expect(() => parseNumbers('1, two, 3')).toThrow('two is not a number.');
  });
});

describe('#calculateMean', function() {
  it('should return the mean of an array of numbers', function() {
    expect(calculateMean([1, 2, 3, 4])).toEqual(2.5);
  });

  it('should return 0 for an empty array', function() {
    expect(calculateMean([])).toEqual(0);
  });
});

describe('#calculateMedian', function() {
  it('should return the median of an array with an odd number of elements', function() {
    expect(calculateMedian([1, 3, 5])).toEqual(3);
  });

  it('should return the median of an array with an even number of elements', function() {
    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5);
  });

  it('should return 0 for an empty array', function() {
    expect(calculateMedian([])).toEqual(0);
  });
});

describe('#calculateMode', function() {
  it('should return the mode of an array of numbers', function() {
    expect(calculateMode([1, 2, 2, 3])).toEqual(2);
  });

  it('should return "no mode" if there are no repeating numbers', function() {
    expect(calculateMode([1, 2, 3, 4])).toEqual("no mode");
  });

  it('should return "no mode" for an empty array', function() {
    expect(calculateMode([])).toEqual("no mode");
  });
});
