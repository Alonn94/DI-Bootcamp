import {useState, useEffect} from 'react';

interface User {
    id:number;
    name: string;
    email: string;
    phone: string;
}
const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const data: User[] = await response.json();
                setUsers(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message || 'An error occurred');
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>UserList</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name} - ({user.email}, {user.phone})
                </li>
            ))}
        </ul>
        </div>
    );
};
export default UserList;