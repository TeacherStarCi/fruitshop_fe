import axios from "axios";
import {useState} from 'react'
const SearchPage = () => {
   
  const [data, setData] = useState([]);
 
  const getData = async () => {
    const response = await axios.get("http://localhost:3001/get_fruit");
    setData(response.data)
  }


  return (<div className="HomePage">
      <h1>Search</h1>
      <button onClick = {() => {getData()}}> Click Me To Get Dataa </button>
      {data.map((item) => (
        <p >{JSON.stringify(item)}</p>
      ))}
    </div>)
}


export default SearchPage