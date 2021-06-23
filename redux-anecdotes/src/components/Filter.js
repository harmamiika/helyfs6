import React from 'react'
import { connect } from 'react-redux'

// import { useDispatch } from 'react-redux'

import { changeFilter } from '../reducers/filterReducer'

const Filter = (props) => {
    // const dispatch = useDispatch()

    const handleFilterChange = (event) => {
        // dispatch(changeFilter(event.target.value))
        props.changeFilter(event.target.value)
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter: <input onChange={handleFilterChange} />
        </div>
    )
}

const mapDispatchToProps = {
    changeFilter: changeFilter
}
// huom monimutkaisempi funktioilmaisu joskus tarpeen
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeFilter: (value) => {
//             dispatch(createNote(value))
//         }
//     }
// }


export default connect(null, mapDispatchToProps)(Filter)