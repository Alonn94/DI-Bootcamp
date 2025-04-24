interface GreetingProp {
    name: string;
    messageCount: number;
}


const Greeting: React.FC<GreetingProp> = ({ name, messageCount }) => {
    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>You have {messageCount} new messages</p>
        </div>
    );
};

export default Greeting;
