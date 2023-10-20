function countHours(year, holidays) {
    let hours = 0;
    for (let holiday of holidays) {
        const data = new Date(`${holiday}/${year}`)
        const dataNumber = data.getDay()
        if (dataNumber > 0 && dataNumber < 6) {
            hours = hours + 2
        }
    }
    return hours;
}

console.log(countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']))
