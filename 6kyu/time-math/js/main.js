// Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

// Examples: 
// timeMath('01:24:31', '+', '02:16:05') === '03:40:36'
// timeMath('01:24:31', '-', '02:31:41') === '22:52:50'

function timeMath(time1, op, time2) {
    // convert times into seconds from midnight
    time1 = convertToSeconds(time1);
    time2 = convertToSeconds(time2);

    // find the sum of the two times in seconds, or difference if op = '-'
    sum = time1 + Number(op + time2)

    // pull hours, minutes, and seconds out of the sum
    hrs = sum < 0 ? 24 + Math.floor(sum / 3600) : Math.floor(sum / 3600);
    mins = sum < 0 ? 60 + Math.floor((sum % 3600) / 60) : Math.floor((sum % 3600) / 60)
    secs = sum < 0 ? 60 + ((sum % 3600) % 60) : ((sum % 3600) % 60)

    // if hours is greater than 24, rollover hours ; if hours is equal to 24, set hours = 0
    hrs = hrs > 24 ? hrs - 24 : hrs === 24 ? 0 : hrs

    // put hours, minutes, and seconds into the two-digit format if they are less than 10
    if(hrs < 10){
      hrs = '0' + hrs
    }
    if(mins < 10){
        mins = '0' + mins
    }
    if (secs < 10){
        secs = '0' + secs
    }

    // return time in the corect format
    return sum % 3600 === 0 ? '00:00:00' : `${hrs}:${mins}:${secs}`
}


function convertToSeconds(t){
    // converts time in the form of 'hh:mm:ss' into seconds from midnight
    return t.split(':')
    .map((n,i) => i === 0 ? n * 3600 : i === 1 ? n * 60 : n * 1)
    .reduce((pv,cv) => pv + cv);
}


console.log(timeMath('01:45:31', '-', '02:50:05'))
console.log(timeMath('01:24:31', '+', '02:16:05'))
console.log(timeMath('01:24:31', '-', '02:31:41'))
