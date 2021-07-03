import React, { Component} from 'react';
import CharInfo from "./CharInfo";
import { Link } from 'react-router-dom';

class Character extends Component {
    render(){
        const character =this.props.character;
        return(
        <div className=" ">
            {
               character && character.map((p) => {
                    console.log(p)
                    return(
                        <div key={p.url}>
                            <h1 className="char-name">
                              {p.name}
                            </h1>
                            <p className = "btn btn-info" >
                <Link to='/CharInfo' className='nav-links'>
                 <CharInfo charInfo={p} /> 
                </Link>
                </p>                     
                        </div>
                    )
                    })
            }
        </div>
        )
    }
}

export default Character;