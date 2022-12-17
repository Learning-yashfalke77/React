class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul" 
                    bangs= {3}                             //passing number 
                    data={[1, 2, 3,]}                     //passing array
                    isFunny={true}                        //passing boolean
                    />    

                <Machine s1='x' s2='y' s3='z'/>               
                <Machine s1='x' s2='x' s3='x'/>               
                <Machine s1='z' s2='y' s3='z'/>               
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))