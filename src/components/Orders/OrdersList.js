import React from "react";
import Orders from "./Orders";
import PropTypes from "prop-types";

function OrdersList(props) {
    return (
        <React.Fragment>
            <hr />
            {props.OrdersList.map((orders) => <Orders clickOrder={props.selectOrder}
            order={orders.order}
            description={orders.description}/>
            )}
        </React.Fragment>
    );
}

OrdersList.propTypes = {
    ordersList: PropTypes.array,
    selectOrder: PropTypes.func,
}

export default OrdersList; 