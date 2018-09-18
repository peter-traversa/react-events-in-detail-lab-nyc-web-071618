import React, { Component } from 'react';

class CoordinatesButton extends Component {
    render() {
        const handleClick = (event) => {
            this.props.onReceiveCoordinates([event.clientX, event.clientY])
        }
        return (
            <button onClick={handleClick}>Click Me!</button>
        )
    }
}

export default CoordinatesButton