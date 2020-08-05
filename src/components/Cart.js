import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";

function Cart() {
  return (
    <Wrapper>
      <Head>
        <h2>Your Cart</h2>
        <LightText>0 Items</LightText>
      </Head>
      <CartItem />
      <Foot>
        <div>
          <span>Total:</span>
          <Price>$0</Price>
        </div>
        <Button>Purchase</Button>
      </Foot>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background-color: rgb(64, 31, 67);
  height: 100vh;
  width: 100%;
  color: white;
`;

const Head = styled.div`
  padding-left: 30px;
  padding-top: 20px;
`;

const LightText = styled.span`
  color: lightgray;
`;

const Foot = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 90%;
  bottom: 80px;
  left: 30px;
  span {
    font-size: 1.4em;
  }
`;

const Price = styled.span`
  margin-left: 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  color: white;
  background-color: rgb(255, 64, 110);
  padding: 10px 40px;
`;

export default Cart;
