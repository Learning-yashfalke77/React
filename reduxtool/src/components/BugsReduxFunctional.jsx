import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBug, getUnresolvedBugs, resolveBug } from '../store/bugs';

function BugsReduxFunctional(props) {

    const dispatch = useDispatch();

    const bugs = useSelector(state => state.entities.bugs.list)
    const unresolvedBugs = useSelector(getUnresolvedBugs)

    useEffect(() => {
        dispatch(loadBug())
    }, [dispatch])

    return (
        <div>
            <h2>All Bugs</h2>
            <ul>
                {bugs.map(bug => (<li key={bug.id}>{bug.description}</li>))}
            </ul>
            <h2>UnResolved Bugs</h2>
            <ul>
                {unresolvedBugs.map(bug => (
                    <li key={bug.id}>
                        {bug.description} 
                        <button onClick={() => (dispatch(resolveBug(bug.id)))}>Resolve Bug</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BugsReduxFunctional
