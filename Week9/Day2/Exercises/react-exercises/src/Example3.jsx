import {Component} from "react";
import data from './complexdata.json'

class Example3 extends Component {
    render() {
        return (
            <div>
                <h2>Experiences</h2>
                {data.Experiences.map((exp,index) =>(
                    <div key={index}>
                        <h4>{exp.companyName}</h4>
                        <p>{exp.url}</p>
                        <h4>Roles</h4>
                        <ul>
                            {exp.roles.map((role,roleIndex) => (
                                <li key={roleIndex}>
                                    {role.title}
                                    <p>{role.description}</p>
                                    <p>{role.location}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        )
    }

}

export default Example3;