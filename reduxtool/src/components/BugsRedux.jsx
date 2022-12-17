import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUnresolvedBugs, loadBug, resolveBug } from "../store/bugs";

class BugsRedux extends Component {

    componentDidMount() {
        this.props.loadBug()
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.bugs.map(bug => (
                        <li key={bug.id}>
                            {bug.description} - {bug.resolved}
                            <br />
                            <button onClick={() => (this.props.resolveBug(bug.id))}>Resolve Bug</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bugs: getUnresolvedBugs(state)
})

const mapDispatchToProps = (dispatch) => ({
    loadBug: () => dispatch(loadBug()),
    resolveBug: (id) => dispatch(resolveBug(id))
})

// pass the  state.getState().entities.bugs.list to the props as bugs

// container component that wraps presentation component


export default connect(mapStateToProps, mapDispatchToProps)(BugsRedux)