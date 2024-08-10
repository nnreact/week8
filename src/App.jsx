import { useState } from "react"
import ListBody from "./components/ListBody"
import ListHeader from "./components/ListHeader"

function App() {

  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState([])

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAdd = () => {
    console.log("add clicked")
    //add to list array
    // OPTION 1
    // const currentArray = list;
    // const updatedArray = currentArray.concat(inputValue);
    // setList(updatedArray);

    // OPTION 2
    setList([...list, inputValue]);

    // OPTION 3
    // const oldArray = list;
    // list.push(inputValue);
    // setList(oldArray);

    setInputValue('');
  }


  return (
    <div>
      <ListHeader handleAdd={handleAdd} handleInputChange={handleInputChange} inputValue={inputValue} />
      <ListBody listItems={list} />
    </div>
  )
}

export default App