import React from 'react'



const Hello = function(props) {
    console.log(props)
    const name = props.name
    const lang = props.language
    let hello = ''

    if (lang === 'en') {
        hello = 'Hello,'
    } else if (lang === 'ko') {
        hello = '아녕하새요,'
    }

    return (
        <div> {hello} {name}</div>
    )
}

export default Hello

