import React, {Component} from 'react';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // iterate over the menu passed down through props and return a menu item for each object in the array
    let menu = this.props.menu.map((item, index) => {
      return <div key={index}>
              {item.name}
              {item.info}
              {item.price}
              <button type="button" onClick={() => this.props.addToCart(item)}>Add</button>
            </div>
    }
  );

    return(
      <div>
        {menu}
      </div>
    )
  }
}

export default Menu;
