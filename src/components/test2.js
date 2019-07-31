import React from 'react'

var test2 = function(props) {
    var age = props.age || 0

if(age < 18) {
   
   return <div>Drink Tea</div>
} else {
   
   return <div>Drink Alcohol</div>
}

}

export default test2