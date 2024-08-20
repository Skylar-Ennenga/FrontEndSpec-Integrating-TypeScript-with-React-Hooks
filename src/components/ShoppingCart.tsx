import { FormEvent, useEffect, useReducer, useState } from "react";
import shoppingCartReducer from "../reducer/ShoppingCartReducer";

const ShoppingCart = () => {

  const [cartItems, dispatch] = useReducer(shoppingCartReducer, []);
  const [itemName, setItemName] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const addItem = (event: FormEvent) => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      name: itemName,
      price: itemPrice,
    };

    dispatch({
      type: "ADD_ITEM",
      payload: newItem,
    });
    setItemName("");
    setItemPrice(0);
  };

  const removeItem = (id: number) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
};

useEffect(() => {
    calculateTotal();
    }, [cartItems]);

const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    setTotal(total);
    };

    return (
      <div>
        <h2>Cart Form</h2>
        <h3>
          Input the name and the price of the item you would like to add to the
          cart
        </h3>
        <form onSubmit={addItem}>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(parseFloat(e.target.value))}
          />
          <button type="submit">Submit</button>
        </form>

        <h3>Shopping Cart</h3>
        <h4>Total: ${total}</h4>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button type="button" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };



export default ShoppingCart;
