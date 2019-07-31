import React from 'react'
import Hello from './Hello'
import Axios from 'axios'

class Stateful extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // count: 0
            people: list,
            posts: []
        }
        this.addPerson = this.addPerson.bind(this)  
    }
    addToCount() {
        var current = this.state.count
        this.setState({
            count: current + 1
        })
    }
    render() {
        console.log('Rendered',this)
        var people = this.state.people
        return (
            <div>
                {people.map(function(item){
                    return <Hello name={item.name} langauge={item.language}/>
                })}
           
        </div>
        )
    }

    addPerson(o) {
        var list = this.state.people
        list.push(o)

        this.setState({
            people: list
        })
    }
    componentDidMount() {
        this.addPerson({
            name: 'Lisa',
            language: 'en'
        })
        this.addPerson({
            name: 'Jennie',
            language: 'ko'
        })
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(res) {    
    
    // handle success
    var data = res.data
    console.log(data);
  })
    .catch(function(error) {
    // handle error
    console.log(error);
  })
}

//     componentDidMount() {
//         console.log('Will Render')
//     }
//     componentWillUnmount() {
//         console.log('Will Die')
//     }
//     render() {
//         console.log('Rendered')
//         return <div></div>
//     }
}

export default Stateful