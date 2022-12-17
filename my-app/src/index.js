// import helpful from './helpers'                   //export Default
// import {helpful, sort, sing} from './helpers'    //export

// import helpful, {sort, sing} from './helpers'   //export default and exports
// helpful()
// sort()
// sing()

import foods from './foods'
import {choice, remove} from './foodHelpers'

let food = choice(foods);

console.log(`I would like one ${food}, please`)


console.log(`Here you go ${food}`)