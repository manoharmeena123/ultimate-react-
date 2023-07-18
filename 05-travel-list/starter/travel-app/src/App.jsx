import { useState } from 'react';
import './App.css';
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/Packing'
import Stats  from './components/Stats';
const initialItems =[
  {id:1, description : "Passports", quantity:2, packed:false}
  ,{id:2, description : "Socks", quantity:3, packed:false}
  ,{id:3, description : "Charger", quantity:2, packed:true}
  ,{id:4, description : "Phone", quantity:3, packed:true}
]
function App() {
  const [items, setItems] = useState(initialItems);
 
  function handleAddItems(item){
    setItems((items)=> [...items,item]);
  }
  
  function handleDeleteItem(id){
    setItems((items)=> items.filter((item) => item.id !== id))
  }

  function handleToggle(id){
    setItems((items) => items.map((item) => item.id === id ? {...item, packed : !item.packed}: item));
  }

  function ClearList(){
  //  alert("are you want to clear whole List .!")
   const confirm = window.confirm("are you want to clear whole List .!")
   if(confirm) setItems([])
  }
  return (
    <div className="App">
      <Logo/>
      <Form OnAddItems={handleAddItems}/>
      <PackingList items={items} 
       onDeleteItem={handleDeleteItem} 
       onToggleItem ={handleToggle}
       ClearList ={ClearList}/>
      <Stats items ={items}/>
    </div>
  );
}



export default App;

