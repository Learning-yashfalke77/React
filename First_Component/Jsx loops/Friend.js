// FOr loops in props is achieved through map function for arrays

class Friend extends React.Component {

    static defaultProps = {
        name: 'Anonymous',
        hobbies: ['nothing']
    }

    render() {
        const {name, hobbies} = this.props
        return (
            <div>
                <h1>Hello {name}</h1>
                <ul>{hobbies.map(m => <li> {m} </li>)}</ul>
            </div>
        )
    }
}