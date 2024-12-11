import React from 'react';
import Child3 from './Child3';
import { Consumer } from '../ContextApi/context';

const Child2 = (props) => {
  return (
    <div>
      <Child3 data={props.data} />
      <div>
        <Consumer>
          {(value) => (
            value.map((val) => (
              <h1 >{val.id}</h1>
            ))
          )}
        </Consumer>
      </div>
    </div>
  );
};

export default Child2;
