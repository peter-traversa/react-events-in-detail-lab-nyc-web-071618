import React, { Component } from 'react'

class DelayedButton extends Component {
    handleDelay = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    }
    render() {
        return (
            <button onClick={this.handleDelay}>Click NOW </button>
        )
    }
}
export default DelayedButton