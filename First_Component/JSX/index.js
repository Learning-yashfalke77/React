// JSX - javascript syntax extension / javascript XML
// Helps to write Html looking code in js (Can be done using babel)
// please have / before > in input or img tag otherwise jsx will not recognise
class JSX extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello</h1>
                <img src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div>
        );
    }
}

// ---------------------------------------------------- Dynamic Rendering Jsx ----------------------------------------------------------------
const getMood =  ()=> {
    const moods  =  ['Angry' , 'Hungry' , 'Silly' , 'Quiet' , 'Paranoid']
    return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component{
    render() {
        return (
            <div>
                <h1>My Number is {2 * 8.4}</h1>
                <h2>So my Mood is {getMood()}</h2>
            </div>
        )
    }
}

// ------------------------------------------------ Conditionals in jsx -----------------------------------------------
function getNum() {
    return Math.floor(Math.random() * 10) + 1
}


class NumPicker extends React.Component {
    render(){
        const num = getNum()

        
        let msg
        if (num ===7) {
            msg = <div>
                <img src="https://sayingimages.com/wp-content/uploads/a-man-like-a-gay-congratulations-meme.jpg" />
            </div>
        } else {
            msg = <div>
            Soory but no match
        </div>
        }


        return(
            <div>
                <h1>your number iss.......{num}</h1>
                <p>1)Ternary : {num === 7? <img src="https://www.birthdaywishes.expert/wp-content/uploads/2021/07/Congratulations-Memes-FEATURED.jpg" /> : null}</p>    
                <p>2) {num===7 && <img src="https://media.makeameme.org/created/congratulations-on-your-1t7td9.jpg" />}</p>
                <p>3){msg}</p>
            </div>
        );
    }
}



// ReactDOM.render(<JSX />, document.getElementById('root'))
// ReactDOM.render(<JSXDemo />, document.getElementById('root'))
ReactDOM.render(<NumPicker />, document.getElementById('root'))