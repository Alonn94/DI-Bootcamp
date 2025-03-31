import React from 'react';

class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteColor: 'red',
        };
    }


class Child extends Component {
    componentWillUnmount() {
      alert('unmounted');
    }
  
    render() {
      return <h2>Hello World!</h2>;
    }
  }

  // Parent Component
class ColorComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        favoriteColor: 'red',
        show: true,
      };
    }
  
  

    changeColor = () => {
        this.setState({ favoriteColor: 'blue' });
    };


    componentDidMount() {
        setTimeout(() => {
            console.log("afer update")
            this.setState({ favoriteColor: 'yellow' });
        }, 3000);
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log ('after update');
    };


    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        );
    

        return (
        <div>
          <h1>{this.state.favoriteColor}</h1>
          <button onClick={this.changeColor}>Change to Blue</button>
          <br />
          {this.state.show && <Child />}
          <button onClick={this.deleteChild}>Delete</button>
        </div>
        );
    }
}

export default Color;