import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import './SearchInput.css';

export default class SearchInput extends PureComponent {
    static propTypes = {
        textChange: PropTypes.func
    };

    handleChange = e => {
        this.props.textChange(e);
    }

    render() {
        return (
            <div className="component-search-input">
                <div>
                    <input onChange={this.handleChange} />
                </div>
            </div>
        )
    }
}