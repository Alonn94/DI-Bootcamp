import {Component} from "react";
import data from './complexdata.json'


class Example2 extends Component {
    render() {
        const list = data.Skills.map((skillArea,index)=> (
            <div key={index}>
                <h3>{skillArea.Area}</h3>
                <ul>
                    {skillArea.SkillSet.map((skill,skillIndex) =>(
                        <li key={skillIndex}>
                            {skill.Name} {skill.Hot && "Hot"}
                        </li>
                    ))}
                </ul>
            </div>

        ));

        return (
            <div>

                {list}
            </div>
        )

    }
}


export default Example2;

