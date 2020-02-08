import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "./actions/cartActions";
import Recipe from "./Recipe";
import axios from "axios";
class Cart extends Component {
  //to remove the item completely
  handleRemove(id) {
    console.log("We up");
    this.props.removeItem(id);
    axios
      .delete("http://localhost:4000/deleteCart/" + id)
      .then(res => console.log("Deleted"))
      .catch(err => console.log(err));
    console.log("We below");
    console.log("Deleted from Base");
  }
  //   to add the quantity
  handleAddQuantity = (id, title, desc, price) => {
    this.props.addQuantity(id);
    axios
      .post("http://localhost:4000/addCartIncrement", {
        id,
        title,
        desc,
        price
      })
      .then(res => {
        console.log(res.data);
      });
    console.log("Added from Cart");
    //console.log("Added from Cart")
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
    axios
      .delete("http://localhost:4000/deleteCartDecrement/" + id)
      .then(res => console.log("Deleted"))
      .catch(err => console.log(err));
    console.log("We below");
    console.log("Deleted from Cart");
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.img} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: {item.price}Rs</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(
                        item.id,
                        item.title,
                        item.desc,
                        item.price
                      );
                    }}
                  >
                    add
                  </i>
                </Link>
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(
                        item.id,
                        item.title,
                        item.desc,
                        item.price
                      );
                    }}
                  >
                    clear
                  </i>
                </Link>
              </div>
              <button
                className="waves-effect waves-light btn blue remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
