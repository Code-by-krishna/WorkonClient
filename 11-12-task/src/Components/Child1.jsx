import React from 'react'
import Child2 from './Child2'
import { Consumer } from '../ContextApi/context'

const Child1 = (props) => {
  return (
    <div>
        <Child2 data = {props.data}/>
        <Consumer>
            {(value) => (
              <>
              <h2>Name: {value.Name}</h2>
              <h2>Class: {value.Class}</h2>
              </>
              
            )}
        </Consumer>
    </div>
  )
}

export default Child1