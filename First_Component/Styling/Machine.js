// class is keyword so use className in react
// same for label use htmlfor instead of for
function Machine(props) {
        const machine = props
        const {s1, s2, s3} = machine
        const winner = (s1 === s2) && (s1 === s3)
        return (
            <div className="Machine">    
                <label htmlFor='hii'>Hii</label>
                <h1>Hii machine</h1>
                <p>{s1} {s2} {s3}</p>
                <p style={{fontSize: '2rem'}} className={winner ? 'win' : 'lose'}>{ winner ? 'You won' :'You lose'}</p>
            </div>
        )
}

