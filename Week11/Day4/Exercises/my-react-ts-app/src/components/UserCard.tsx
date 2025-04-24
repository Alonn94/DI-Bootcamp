interface UserCardProps {
    name?: string;
    age?: number;
    role? : string;
}

const UserCard: React.FC<UserCardProps> = ({name = "NoName", age=0, role="NoRole"}) => {
    return (
        <div>
            <h2>UserCard</h2>
            <p>Name : {name}</p>
            <p>Age: {age}</p>
            <p> Role: {role}</p>
        </div>
    );
};

export default UserCard;

