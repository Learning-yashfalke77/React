function choice(items) {
    let idx = Math.floor(Math.random() * items.length)
    console.log(idx)
    return items[idx]
}
function remove(items, item) {
    for (let index = 0; index < items.length; index++) {
        if (items[index] === item) {
            return [...items.slice(0,index), ...items.slice(index + 1)]
        }
        
    }
}

export {choice, remove}