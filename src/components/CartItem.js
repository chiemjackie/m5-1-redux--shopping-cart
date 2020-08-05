import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { removeItem, updateQuantity } from "../actions";

import { AiOutlineClose } from "react-icons/ai";

function CartItem({ id, title, quantity }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (event) => {
    const quantity = event.target.value
      ? event.target.value
      : event.target.placeholder;

    dispatch(updateQuantity({ id, title, quantity: Number(quantity) }));
  };

  return (
    <Wrapper>
      <Item>
        <Top>
          <h3>{title}</h3>
          <CloseButton onClick={() => dispatch(removeItem({ id }))} />
        </Top>
        <Bottom>
          <span className="label">Quantity:</span>
          <Quantity
            type="number"
            value={quantity}
            onInput={handleQuantityChange}
          />
        </Bottom>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Item = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.1);
  width: 90%;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 15px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  height: 50px;
  padding: 2px 15px;
  .label {
    color: lightgray;
    font-size: 18px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Quantity = styled.input`
  margin-left: 15px;
  color: white;
  background-color: transparent;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  border: none;
  border-bottom: 3px solid white;
  width: 30px;
  &::placeholder {
    color: white;
  }
`;

const CloseButton = styled(AiOutlineClose)`
  cursor: pointer;
`;

export default CartItem;
