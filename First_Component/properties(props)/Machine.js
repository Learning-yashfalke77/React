class Machine extends React.Component{
    render(){
        const machine = this.props
        const {s1, s2, s3} = machine
        const winner = (s1 === s2) && (s1 === s3)
        return (
            <div>
                <h1>Hii machine</h1>
                <p>{s1} {s2} {s3}</p>
                <p>{ winner ? 'You won' :'You lose'}</p>
            </div>
        )
    }
}