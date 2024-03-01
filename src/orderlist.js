import OrderItem from "./orderitem";

export default function OrderList({orderArray}){
    return(
        <div className="items">
            {
                orderArray.map(ele => {
                    return <OrderItem key={ele.id} ele={ele}/>
                })
            }
        </div>
    )
}