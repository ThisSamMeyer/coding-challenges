// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [[1, 4],[7,10],[3, 5]]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [[1,2],[6,10],[11,15]] );                  // => 9
// sumIntervals( [[1,4],[7,10],[3,5]] );                    // => 7
// sumIntervals( [[1,5],[10,20],[1,6],[16,19],[5,11]] );    // => 19

// Random Tests
// 100 tests with 1 - 10 intervals from the range [-20, 20]
// 100 tests with 20000 - 50000 intervals from the range [-10^9, 10^9]

function sumIntervals(intervals) {
    if(intervals.length == 1){
        return intervals[0][1] - intervals[0][0];
    }
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    let temp = intervals[0];
    let compiled = [];
    for(i=1;i<intervals.length;i++){
        if(temp[1] >= intervals[i][0]){
            temp[1] = Math.max(temp[1],intervals[i][1])
        }else{
            compiled.push(temp);
            temp = intervals[i];
        }
    }
    compiled.push(temp)
    return compiled.map(set => set[1] - set[0]).reduce((pv,cv) => pv + cv,0);
};


console.log(sumIntervals( [[1,2],[6,10],[11,15]] ));                // => 9
console.log(sumIntervals( [[1,4],[7,10],[3,5]] ));                  // => 7
console.log(sumIntervals( [[1,5],[10,20],[1,6],[16,19],[5,11]] ));  // => 19