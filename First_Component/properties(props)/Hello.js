// Props Makes the component customizable and reusable
// Proips are Immutable,  we cannot update it
class Hello extends React.Component{
    render(){
        const props = this.props
        let bangs = '!'.repeat(props.bangs)
        return (
            <div>
                <h1>
                    Hi {props.to} from {props.from} {bangs}
                </h1>
            </div>
        )
    }
}
