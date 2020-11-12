import React from 'react';

function MenuList(props) {

  const content = props.items.map((item) =>
    <div>
      <br />
      <h4>{item.title}</h4>
      <p class="w3-text-grey">{item.content}</p> 
    </div>
  );

  return (
    <div>
      {content}
    </div>
  );
}

export default MenuList;
