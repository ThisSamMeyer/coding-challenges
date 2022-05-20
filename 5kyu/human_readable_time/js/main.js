// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
    let time = ['0','0','0'];
    if(seconds >= 3600){
        time[0] = Math.floor(seconds / 3600).toString();
        seconds -= time[0] * 3600;
    };
    if(seconds >= 60){
        time[1] = Math.floor(seconds / 60).toString();
        seconds -= time[1] * 60;
    };
    time[2] = seconds.toString();

    return time.map(n => n.padStart(2,'0')).join(':');
}

console.log(humanReadable(359999))
