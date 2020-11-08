import React from 'react'

class RestaurantList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedId: ''
    }

    this.deletingOne = this.deletingOne.bind(this)
  }


  deletingOne(e) {
    e.preventDefault();

    this.setState({
      clickedId: e.target.id
    })
    this.props.deleteOne(e.target.id);
  }

  render() {
    return (
      <div>
        {this.props.data.map((item) => {
          return (
            <div key={item._id} className="individual_container">
              {item.restaurantName}
                <button id={item._id} onClick={this.deletingOne} className="cross_button">x</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default RestaurantList;