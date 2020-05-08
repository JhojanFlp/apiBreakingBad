import React from 'react';
import Character from './Character'

const Characters = ({chars}) => {
  return (
    <div className="col-12 row p-5">
      {chars.map(c => (
        <Character 
          key={c.char_id}
          char={c}
        />
      ))}
    </div>
  );
}
 
export default Characters;