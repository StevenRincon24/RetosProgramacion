const gifts = ['cat', 'game', 'socks']

console.log(wrapping(gifts))

function wrapping(gifts) {
    const wrappedGifs = []
    gifts.map(gift => {
        const cantidad = gift.length + 2
        const starts = '*'.repeat(cantidad)

        const mensaje = starts + "\n*" + `${gift}` + "*\n" + starts
        wrappedGifs.push(mensaje)
    })
    return wrappedGifs
}