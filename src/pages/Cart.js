import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { 함수1 } from "../store";

const Cart = () => {
  let a = useSelector((state) => {
    return state; // <= 모든 state
    //return state.user <= user 부분만 쓸 수 있음
  });
  // console.log(a);
  // console.log(a.stock);

  let state = useSelector((state) => state);
  let dispatch = useDispatch(); // store.js로 요청을 보내주는 함수

  return (
    <div>
      {state.user}의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{state.cart[i].name}</td>
              <td>안녕</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(함수1());
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
