import React from 'react'
import  {ProgressBar}  from 'react-bootstrap'

function Progress (props) {
    const {value,name} = props 
        return(
           <>
          <ProgressBar variant="warning" style={{width:"400px",height:"30px", textAlign:"left"}} now={value} label={name}/>
            </>
        )
}
export default Progress