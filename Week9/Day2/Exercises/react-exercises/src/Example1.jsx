import { Component } from 'react';
import data from "./complexdata.json"

class Example1 extends Component {

    render() {
        const list = data.SocialMedias.map((item, index) => (
            <p key={index}>{item}</p>
        ));
        return (
            <div>
                <h3>{list}</h3>
            </div>
        );
    }
}

export default Example1;



