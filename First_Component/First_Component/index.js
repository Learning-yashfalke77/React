// -------------------------------------------- Class Baseed Functions ----------------------------------------
class Hello extends React.Component {
	render() {
		return (
			<div>                                
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
}

// --------------------------------------------- Function  Based Components ---------------------------
function Hello() {
	return (
		<div>
			<h1>Hello there!</h1>
			<h1>Hello there!</h1>
			<h1>Hello there!</h1>
		</div>
	);
}

// It can render only one html tag i.e. one h1 or wrap it in div

ReactDOM.render(<Hello />, document.getElementById('root'));
