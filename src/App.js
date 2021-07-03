import React, {Component} from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import axios from 'axios';
import SearchHeader from './components/SearchHeader';
import Character from "./components/Character";
import Navbar from "./components/Navbar";
// eslint-disable-next-line 
import ListChar from "./components/ListChar";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      character: [],
    }
    this.getCharacter = this.getCharacter.bind(this);
  }

 getCharacter(){
   return axios.get("http://swapi.dev/api/people")
   .then((response)=>{
     console.log(response.data.results);
    this.setState({ character:response.data.results
    })
   })
 }

  componentDidMount(){
  this.getCharacter()
  }

  render (){
    const {character} =this.state;
         return (
           <Router>
           <Navbar />
           <SearchHeader />
           <Switch>
             < >
             <Character character={character}/>
            
          {/*   <ListChar />  */}
           </>
           </Switch>
           </Router>
        )
      }
    }
export default App;
