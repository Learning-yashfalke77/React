function getNum() {
    return Math.floor(Math.random() * 10) + 1
}


class NumPicker extends React.Component {
    render() {
        const num = getNum()


        let msg
        if (num === 7) {
            msg = <div>
                <img src="https://sayingimages.com/wp-content/uploads/a-man-like-a-gay-congratulations-meme.jpg" />
            </div>
        } else {
            msg = <div>
                Soory but no match
            </div>
        }


        return (
            <div>
                <h1>your number iss.......{num}</h1>
                <p>1)Ternary : {num === 7 ? <img src="https://www.birthdaywishes.expert/wp-content/uploads/2021/07/Congratulations-Memes-FEATURED.jpg" /> : null}</p>
                <p>2) {num === 7 && <img src="https://media.makeameme.org/created/congratulations-on-your-1t7td9.jpg" />}</p>
                <p>3){msg}</p>
            </div>
        );
    }
}


