import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = (props) => {
  const { id } = useParams();
  // console.log(id)
  const findItem = props.shoes.find((x) => x.id === parseInt(id));
  if (!findItem) {
    return <div>해당 상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{findItem.title}</h4>
            <p>{findItem.content}</p>
            <p>{findItem.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
