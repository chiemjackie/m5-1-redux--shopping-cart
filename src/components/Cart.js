import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { getStoreItems } from "../reducers";
import CartItem from "./CartItem";

function Cart() {
  const storeItems = useSelector(getStoreItems);

  let totalInCents = storeItems.reduce((totalInCents, item) => {
    return (totalInCents += item.price * item.quantity);
  }, 0);

  let totalInDollars = (totalInCents / 100).toFixed(2);
  let totalQuebecTaxes = (
    Math.round(totalInDollars * 0.15 * 100) / 100
  ).toFixed(2);
  let totalPrice = (
    totalInCents / 100 +
    Math.round(totalInDollars * 0.15 * 100) / 100
  ).toFixed(2);

  return (
    <Wrapper>
      <Head>
        <h2>Your Cart</h2>
        <LightText>0 Items</LightText>
      </Head>
      {storeItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            quantity={item.quantity}
          />
        );
      })}
      <Foot>
        <PriceWrapper>
          <PriceListItem>
            Item total:
            <Price>${totalInDollars}</Price>
          </PriceListItem>
          <PriceListItem>
            Taxes:
            <Price>${totalQuebecTaxes}</Price>
          </PriceListItem>{" "}
          <PriceListItem>
            Order total:
            <Price>${totalPrice}</Price>
          </PriceListItem>
        </PriceWrapper>
        <PurchaseButton>Purchase</PurchaseButton>
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

const PurchaseButton = styled.button`
  display: flex;
  border: none;
  border-radius: 10px;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  color: white;
  background-color: rgb(255, 64, 110);
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100px;
  padding: 10px 10px;
`;

const PriceWrapper = styled.ul``;

const PriceListItem = styled.li`
  list-style-type: none;
  text-align: right;
  font-size: 18px;
`;

export default Cart;
