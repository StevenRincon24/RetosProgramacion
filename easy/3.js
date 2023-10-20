// FORMA 1
function distributeGifts(packOfGifts, reindeers) {
    let pack_weights = 0;
    let reindeers_can_carry = 0;
    for (let pack of packOfGifts) {
        pack_weights += pack.length
    }
    for (let reindeers_carry of reindeers) {
        reindeers_can_carry += 2 * reindeers_carry.length
    }
    return Math.floor(reindeers_can_carry / pack_weights)
}

// FORMA 2
function distributeGifts(packOfGifts, reindeers) {
    const pack_weights = packOfGifts.join('').length
    const reindeers_can_carry = reindeers.join('').length * 2
    return Math.floor(reindeers_can_carry / pack_weights)
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]
console.log(distributeGifts(packOfGifts, reindeers))