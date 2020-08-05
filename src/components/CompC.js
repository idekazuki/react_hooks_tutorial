import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'
const CompC = () => {
    const {dispatchProvided} = useContext(AppContext)
    return (
        <div>
            <h3>C</h3>
            <button onClick={() => dispatchProvided('add_1')}>Add + 1</button>
        </div>
    )
}

export default CompC