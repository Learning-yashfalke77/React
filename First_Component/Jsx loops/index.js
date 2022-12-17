class App extends React.Component{
    render(){
        return(
            <div>
                <Friend name="yash" hobbies={['Piano', 'Dancing', 'gaming']}/>
                <Friend name="frida" hobbies={['Piano', 'coding']}/>
                <Friend />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))