import React from 'react'

const index = (props) => {
  console.log(props)
  return (
    <div>
        <p>
         {props.inventor} invented this guitar in {props.year} in {props.origin}
        </p>
        <br></br> 
        <p><a href='/index'>back</a></p>
    </div>
  )
}

export default index