import React from 'react';
import './App.css';

function App() {

    const CreateElement = () => React.createElement('div', {className: 'CreateElement component'}, 'Hello World! This is  React.createElement');

    class ReactComponent extends React.Component {
        render() {
            return React.createElement('div', {className: 'reactComponent component'}, 'Hello World! This is React.Component')
        }
    }

    class ReactPureComponent extends React.PureComponent {
        render() {
            return React.createElement('div', {className: 'ReactPureComponent component'}, 'Hello World! This is React.PureComponent')
        }
    }

    const FunctionalComponent = () => {
        return (
            <div className='FunctionalComponent component'>Hello World! This is FunctionalComponent</div>
        )
    }

    return (
        <div className="App">
            <CreateElement />
            <ReactComponent />
            <ReactPureComponent />
            <FunctionalComponent />
        </div>
    );
}

export default App;
