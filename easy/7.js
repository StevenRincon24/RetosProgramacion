function getGiftsToRefill(a1, a2, a3) {
    const combinedArrays = [...a1, ...a2, ...a3];
    const giftsDeficiency = combinedArrays.filter((item, index, arr) => arr.indexOf(item) === index);

    const result = giftsDeficiency.filter(gift => (
        (!a1.includes(gift) && !a2.includes(gift)) ||
        (!a1.includes(gift) && !a3.includes(gift)) ||
        (!a2.includes(gift) && !a3.includes(gift))
    ));

    return result;
}



console.log(getGiftsToRefill(a1, a2, a3)); // ['doll', 'pc']


// FORMA 2
function getGiftsToRefill(a1, a2, a3) {
    const combinedArrays = [...a1, ...a2, ...a3];
    const giftsDeficiency = combinedArrays.filter((item, index, arr) => arr.indexOf(item) === index);

    const result = giftsDeficiency.filter(gift => (
        (!a1.includes(gift) && !a2.includes(gift)) ||
        (!a1.includes(gift) && !a3.includes(gift)) ||
        (!a2.includes(gift) && !a3.includes(gift))
    ));

    return result;
}

const a1 = ['bike', 'car', 'bike', 'bike'];
const a2 = ['car', 'bike', 'doll', 'car'];
const a3 = ['bike', 'pc', 'pc'];

console.log(getGiftsToRefill(a1, a2, a3)); // ['doll', 'pc']
