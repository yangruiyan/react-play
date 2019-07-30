import React from 'react'

import ImageZoom from 'react-medium-image-zoom'

const Articles = function(props) {

    var beforeImage = props.before 
    var afterImage = props,after 
    var smallWidth = props.width 
    var smallHeight = props.height 



    return (
      <div>
        <p>{beforeImage}</p>
        <ImageZoom
          image={{
            src:"http://picsum.photos/id/401/100",
            alt: 'hot air balloon',
            className: 'img',
            style: { width: '50pix' }
          }}
          zoomImage={{
            src: 'http://picsum.photos/id/401/1000/500',
            alt: 'hot air balloon'
          }}
        />
   
        
      </div>
    )
  }
  export default ImageZoom