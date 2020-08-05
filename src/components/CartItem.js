import React from "react";
import styled from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

function CartItem() {
  return (
    <Wrapper>
      <Item>
        <Top>
          <h3>PRODUCT</h3>
          <AiOutlineClose />
        </Top>
        <Bottom>
          <span className="label">Quantity:</span>
          <Quantity>#</Quantity>
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
`;

const Quantity = styled.span`
  margin-left: 15px;
  padding: 0 5px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 3px solid white;
`;

export default CartItem;
