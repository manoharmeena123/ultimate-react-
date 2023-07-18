import React from 'react'
import { useState } from 'react';
import Item from './Item';
function PackingList({items, onDeleteItem,onToggleItem, ClearList}){
  const [sortBy, setSortBy] = useState("input")
  let sortedItems =[]
  if (sortBy === "order") {
    sortedItems = items;
  } else if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) =>
      Number(a.packed) - Number(b.packed)
    );
  }
  return (
    <div className='list'>
<ul> {sortedItems.map((item)=> (
        <Item item= {item} key={item.id} 
        onDeleteItem={onDeleteItem} 
        onToggleItem ={onToggleItem}/>
      ))}</ul>
     <div className='actions'>
      <select className='btn btn secondary'  value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="order">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by status</option>
      </select>
      <button className='btn btn danger' onClick={ClearList}>Clear List</button>
     </div>
    </div>
  )
}
export default PackingList