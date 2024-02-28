import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import "../App.css";

const Box = styled.div`
  height: 100px;
  width: 300px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Detail = (props) => {
  const [box, setBox] = useState(true);
  const [input, setInput] = useState("");
  const [tabs, setTabs] = useState(0);
  const [fade2, setFade2] = useState("");

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  useEffect(() => {
    if (isNaN(input) == true) {
      alert("그러지마세요");
    }
  }, [input]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setBox(false);

      return () => {
        clearTimeout(timer); // 기존 데이터 요청은 제거해주세요~
      };
    }, 2000);
    // console.log(1)
  });

  const { id } = useParams();
  // console.log(id)
  const findItem = props.shoes.find((x) => x.id === parseInt(id));
  if (!findItem) {
    return <div>해당 상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <div className={"container start " + fade2}>
        {box === true ? <Box>2초 이내 구매 시 할인</Box> : null}
        <input type="text" onChange={(e) => setInput(e.target.value)} />
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
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTabs(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTabs(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTabs(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TapContent tabs={tabs} />
    </div>
  );
};

// 컴포넌트는 리턴문이 꼭 있어야 하기에 return은 적어주어야 한다.
function TapContent(props) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    const a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [props.tabs]);

  return (
    <div className={"start " + fade}>
      {/* className명 뒤에 띄어쓰기를 해줘야 함 그래야 두 개 적용이 됨. 그래서 start 뒤에 공백칸 하나가 존재한다.*/}
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tabs]}
    </div>
  );
  // if (props.tabs === 0) {
  //   return <div>내용0</div>;
  // }
  // if (props.tabs === 1) {
  //   return <div>내용1</div>;
  // }
  // if (props.tabs === 2) {
  //   return <div>내용2</div>;
  // }
}

export default Detail;
