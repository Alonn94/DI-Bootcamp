const UserfavouriteAnimals = (props) => {
    const { favAnimals } = props; // Destructure animals from props
    return (
        <div>
            <h4>Favourite Animals: </h4>
            <ul>
                {favAnimals.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default UserfavouriteAnimals;




