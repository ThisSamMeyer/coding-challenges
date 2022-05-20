// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r,g,b) {
    const hex = '0123456789ABCDEF'
    r = r < 0 ? 0 : r > 255 ? 255 : r
    g = g < 0 ? 0 : g > 255 ? 255 : g
    b = b < 0 ? 0 : b > 255 ? 255 : b
    let hexR = hex.charAt(Math.trunc(r / 16)) + hex.charAt((r / 16 - Math.trunc(r / 16)) * 16)
    let hexG = hex.charAt(Math.trunc(g / 16)) + hex.charAt((g / 16 - Math.trunc(g / 16)) * 16)
    let hexB = hex.charAt(Math.trunc(b / 16)) + hex.charAt((b / 16 - Math.trunc(b / 16)) * 16)
    return hexR + hexG + hexB
}

console.log(rgb(0,0,0))         // '000000'
console.log(rgb(0,0,-20))       // '000000'
console.log(rgb(300,255,255))   // 'FFFFFF'
console.log(rgb(173,255,47))    // 'ADFF2F'
