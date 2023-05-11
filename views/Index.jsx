import React from 'react'

const index = (props) => {
    const { guitars } = props;
  console.log(guitars[0].brand)
  return (
    <div>
        <div>
        {guitars.map((guitar, i) => {
            return (
              <>
            <p><a href={`/history/${i}`}>{guitar.brand}</a> : {guitar.color} {guitar.model}</p>
              <p><a href={`/cart`}><li>add to fav</li></a></p>
              </>
            );
          })}
        </div>
    </div>
  )
}

export default index