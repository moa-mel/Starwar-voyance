import React, {Component} from 'react'


class ListChar extends Component {
  render(){
      const items =this.props.items;
      return(
      <div className=" ">
          {
             items && items.map((s) => {
                  console.log("item")
                  return(
                      <div key={s.url}>
                          <h1 className="item-name">
                            {s.name}
                          </h1>
                          <h2 className="item-info">
                            {s.info}
                          </h2>          
                      </div>
                  )
                  })
          }
      </div>
      )
  }
}

export default ListChar;