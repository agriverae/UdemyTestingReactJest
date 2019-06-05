import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {

    render() {
        const contents = this.props.success
        ? null
        : (
            <form classname="form-inline">
                <input 
                    className="mb-2 mx-sm-3"
                    data-test="input-box"
                    id="word-guess"
                    type="text"
                    placeholder="Enter guess" />
                <button 
                    className="btn btn-primary mb-2"
                    data-test="submit-button"
                    type="submit">
                    Submit
                </button>
            </form>
        )

        return (
            <div data-test="component-input">
                {contents}
            </div>
        )
    }
}

const mapStateToProps = ({ success }) => {
    return {};
}

export default connect(mapStateToProps)(Input);