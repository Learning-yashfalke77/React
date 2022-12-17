class App extends React.Component {
    render() {
        return (
            <div>
                <Machine s1='x' s2='y' s3='z'/>               
                <Machine s1='x' s2='x' s3='x'/>               
                <Machine s1='z' s2='y' s3='z'/>               
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))