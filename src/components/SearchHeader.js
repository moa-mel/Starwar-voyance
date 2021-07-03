import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
// eslint-disable-next-line
import ListChar from "./ListChar";

export default function SearchHeader() {
  const mystyle = {
    alignitems: "right",
    marginright: "20px",
    textalign: "right",
    right: "-100%"
  }

    const [text, setText] = useState('');
   const [ list, setList] = useState(''); 

    const onSearchClick = () =>{
      axios
      .get("/people/?search", {text})
      .then(res =>{
       const {name}  = res.data.results[0];
      setList(name); 
      })
      .catch(err =>{
        console.log(err);
      });
    };
  
    return(
          <div className='control' style={mystyle}>       
          <input 
				className='input'
        type = "text"
        onChange={e => setText(e.target.value)}
        value={text}
				placeholder='search character...'
			/>
      <Link to='/listChar' className='nav-links' > 
      <button onClick={onSearchClick}>search</button>
     {/* <ListChar /> */}
      <div>
      {list}<ListChar /></div> 
     </Link>
      </div>
    )
  }
