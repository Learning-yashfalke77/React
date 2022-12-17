class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <NumPicker />
            </div>            //Using hello component here
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))