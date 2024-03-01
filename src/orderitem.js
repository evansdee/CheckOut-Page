export default function OrderItem({ ele }) {
  return (
    <div className="item">
      <div className="img">
        <img src={ele.img} alt="" />
        <p>{ele.itemCount}</p>
      </div>
      <div className="txt">
        <h4>{ele.itemName}</h4>
        <p>
          <span>{ele.colorTxt}</span> / 
          <span> {ele.size}</span>
        </p>
      </div>
      <p>
        N{ele.priceTxt}.00
      </p>
    </div>
  );
}
