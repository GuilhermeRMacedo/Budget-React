import React from 'react';

class ADD extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitForm();
    }

    handleChange = (event) => {
        this.props.onChange(event.target.name, event.target.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="add">
                        <div className="add__container">

                            <select className="add__type"
                                defautvalue=""
                                onChange={this.handleChange}

                                name="type"
                                value={this.props.type}
                            >
                                <option value="inc">+</option>
                                <option value="exp">-</option>
                            </select>

                            <input type="text"
                                className="add__description"
                                placeholder="Add description"

                                name="description"
                                value={this.props.description}

                                onChange={this.handleChange}
                            ></input>

                            <input type="number"
                                className="add__value"
                                placeholder="Value"

                                name="value"
                                value={this.props.value}

                                onChange={this.handleChange}
                            ></input>

                            <button type="submit"
                                className="add__btn">
                                <i className="ion-ios-checkmark-outline"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}


export default ADD;