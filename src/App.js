import './App.css';
import React, {useState} from "react";

function App() {
  const itemList = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple"
  ];

  const [filteredList, setFilteredList] = new useState(itemList);
  
  const filterBySearch = (event) => {
    const query = event.target.value;

    var updatedlist = [...itemList];

    updatedlist = updatedlist.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedlist);
  };
  return (
   <div className="App">
    <div className="search-header">
      <div className="search-text">Search:</div>
      <input id="search-box" onChange={filterBySearch} />
    </div>
    <div id="item-list">
      <ol>
        {filteredList.map((item,index)=>(
          <li key = {index}>{item}</li>
        ))}
      </ol>
    </div>
   </div>
  );
}

export default App;
