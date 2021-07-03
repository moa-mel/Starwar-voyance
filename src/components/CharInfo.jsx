import React, { Component} from 'react';

class CharInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
          expanded: false,
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open(){
        this.setState({ expanded: !this.state.expanded})
    } 

    close(){
         this.setState({ expanded: !this.state.expanded})
    }

    render(){
        const info = this.props.charInfo;

       if(!this.state.expanded){
           return <p className="btn btn-danger" onClick={this.open}>
               Details
           </p>
       }

        return(
            <div className="user-details">
                <p className="btn btn-danger" onClick={this.close}>
               Hide Info
           </p>
                <ul>
                    <li><h2>Gender: {info.gender}</h2></li> 
                    <li><h2>Birth date: {info.birth_year}</h2></li>
                    <li><h2>Height: {info.height}</h2></li>
                    <li><h2>Mass: {info.mass}</h2></li>
                    <li><h2>Films: {info.films}</h2></li>
                    <li><h2>Hair color: {info.hair_color}</h2></li>
                    <li><h2>Skin color: {info.skin_color}</h2></li>
                    <li><h2>Eye color: {info.eye_color}</h2></li>
                </ul>
            </div>
        )
    }
}
export default CharInfo;