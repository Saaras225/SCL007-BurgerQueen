import React, {Component} from 'react';
import {plates} from "../plates.json";

class Menu extends Component{
    renderCategory = (category) => {
        // const { name, label } = category;
        return (
            <button
                id={category.name}
                key={category.name}
                type="button"
                className="btn btn-success active"
                onClick={this.props.onCategorySelected}>
                {category.label}
            </button>
        );
    }
    // DRY
    render() {
        return (
        <div className="burguerqueen">
            <div className="Menu">
                {this.props.categoryList.map(category => this.renderCategory(category))}
                <br/>
                {this.props.productList}
                </div>
            </div>
        )
    }
}

export default Menu;