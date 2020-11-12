import React from 'react';

import tableSetting from './tablesetting.jpg';

import MenuList from './MenuList'

function Menu() {
  return (
    <div class="w3-row w3-padding-64" id="menu">
      <div class="w3-col l6 w3-padding-large">
        <h1 class="w3-center">Our Menu</h1>
        <MenuList items={items}></MenuList>
      </div>
      <div class="w3-col l6 w3-padding-large">
        <img src={tableSetting} class="w3-round w3-image w3-opacity-min" alt="Menu" style={{width:'100%'}} />
      </div>
    </div>
  );
}

const items = [
  {id: 1, title: 'Bread Basket', content: 'Assortment of fresh baked fruit breads and muffins 5.50'},
  {id: 2, title: 'Honey Almond Granola with Fruits', content: 'Natural cereal of honey toasted oats, raisins, almonds and dates 7.00'},
  {id: 3, title: 'Belgian Waffle', content: 'Vanilla flavored batter with malted flour 7.50'},
  {id: 4, title: 'Scrambled Eggs', content: 'Scrambled eggs, roasted red pepper and garlic, with green onions 7.50'},
  {id: 5, title: 'Blueberry Pancakes', content: 'With syrup, butter and lots of berries 8.50'}
];

export default Menu;
