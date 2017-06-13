import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

	constructor(props) {
        super(props);
        
        this.state = {};
    }

    componentWillMount() {
        
    }

    render() {
       return (<div>hellow</div>);
   }
}
ReactDOM.render(<App />,document.getElementById('root'));