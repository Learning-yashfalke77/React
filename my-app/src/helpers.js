function helpful() {
    console.log('I did a super helpful thing')
}

function sort() {
    console.log('all sorted')
}

function sing() {
    console.log('singing')
}

// export default helpful

// Here whnever we will import this file in any other file , the thing that should be exported is helpful

// export {helpful, sort, sing}    // not  default

//  wen can export both also both export and export default

export default helpful
export {helpful, sort, sing}


// USE DEFAULT EXPORT WHEN THERE IS MOST LIKELY THING IS EXPORTING