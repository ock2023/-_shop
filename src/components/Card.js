const Card = (props) => {
  return (
    <div>
      <div className="col-md-4">
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
          }
          width="80%"
        />
        <h5>{props.shoes.title}</h5>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>
      </div>
    </div>
  );
};

export default Card;
