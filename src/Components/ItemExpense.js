import React from 'react';

const ItemExpense = (props) => {

    const handleClick = (element) => {
        props.handleClick(props.idExp, "exp");
    }

    return(
        <div className="item clearfix" id={props.idExp}>
            <div className="item__description">{props.description}</div>
            <div className="right clearfix">
                <div className="item__value">{props.value}</div>
                <div className="item__percentage">999999%</div>
                <div className="item__delete">
                    <button className="item__delete--btn"
                            onClick={handleClick}><i className="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ItemExpense;