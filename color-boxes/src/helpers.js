const choice = function (arr) {
    const randIdx = Math.floor(Math.random() * arr.length)
    return arr[randIdx]
}

export {choice}