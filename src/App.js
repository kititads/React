import './App.css';
import Appheadder from './Appheadder';
import Item from './item';
import items from './items';


function App() {
  const item1element =items.map((item1,index) =>{
    return <Item key ={index} item1={item1}/>
  })

  return (
    <div className="App">
        <Appheadder/>
        {item1element}

    </div>
  );
}

export default App;