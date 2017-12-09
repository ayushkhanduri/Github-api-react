import React from 'react';

const ResultUI = ({ data ,filter }) =>(
    <div id="results">
        <ul>
            {data.map(item => {
                if(item.name.toLowerCase().search(filter) !== -1)
                   return <li key={item.id}>{item.name} </li>
                }
            )}
        </ul>
    </div>
);

export default ResultUI;