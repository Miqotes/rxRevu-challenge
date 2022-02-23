// starting with 2-d Array + objects to represent Active cell
cells = [
    [{isActive: true}, {isActive: false}, {isActive: false}],
    [{isActive: false}, {isActive: false}, {isActive: false}],
    [{isActive: true}, {isActive: false}, {isActive: true}]
]
center = cells[1][1]
// returns center cell
console.log(center)

// which cells are neighbors
function neighborAddressesOf(row, col) {
    return [
        // row above
        {row: row - 1, col: col - 1},
        {row: row - 1, col: col},
        {row: row - 1, col: col + 1},

        // left & right neighbors
        {row: row, col: col - 1},
        //{row: row, col: col},
        {row: row, col: col + 1},

        // row below
        {row: row + 1, col: col - 1},
        {row: row + 1, col: col},
        {row: row + 1, col: col + 1},
    ]
}

// which neighbor cells are active
function howManyActive(row, col){
    const neighborAddresses = neighborAddressesOf(row, col)
    let count = 0

    for (let neighbor of neighborAddresses) {
        if ( neighbor.row < 0 || neighbor.row > 2) {
            continue
        }
        if (neighbor.col < 0 || neighbor.col > 2){
            continue
        }
        if (cells[neighbor.row][neighbor.col].isActive) {
            count = count + 1
        }
    }

    return count
}
console.log(howManyActive(0, 1))

