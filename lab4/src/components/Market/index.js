import React from 'react';
import MarketItem from '../MarketItem';

class Market extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ""
        };
    }
    render() {
    
        return(
            <div>
            <h2>Click button to add items!</h2>
            <button onClick = {() => {
                this.setState({items: "More Items"});
            }}>Click me!</button>
            <p><MarketItem/> {this.state.items}</p>
            </div>
        );
    }
}

export default Market;