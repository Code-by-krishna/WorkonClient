import React from 'react';
import { Consumer } from '../ContextApi/context';

const Child3 = (props) => {
    console.log(props.data);

    return (
        <div>
            <ol>
                {
                    props.data.map((obj, index) => (
                        <React.Fragment key={index}>
                            <li>{obj.id}</li>
                            <li>{obj.title}</li>
                            <li>{obj.body}</li>
                        </React.Fragment>
                    ))
                }
            </ol>
        </div>
    );
};

export default Child3;
