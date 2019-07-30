import React from 'react'

const test = function(props) {
    console.log(props)
    const name = props.name
    const type = props.type

    let concept = ''

    if (type === 'hip-hop') {
        concept = '첨올,'
    } else if (type === 'sentimental') {
        concept = '벌걸,'
    }

    return (
        <div> {concept} {name} </div>
    )
}
export default test
