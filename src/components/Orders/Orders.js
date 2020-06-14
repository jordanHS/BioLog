import React from "react";
import  PropTypes from "prop-types";

function Orders(props) {
    return (
        <React.Fragment>
            <div onClick = {() => props.clickOrder(props.id)}>
                <h2>Order: {props.order}</h2>
                <h3>Description: {props.description}</h3>
            </div>
        </React.Fragment>
    );
}

Orders.PropTypes = {
    order: PropTypes.string,
    description: PropTypes.string,
}