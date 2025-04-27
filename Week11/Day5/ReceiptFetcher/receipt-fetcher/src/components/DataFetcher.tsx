import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchMeals} from '../features/dataSlice'
import { AppDispatch, RootState } from '../store';

const DataFetcher : React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const state = useSelector((state: RootState) => state.meals);

    const [query, setQuery] = useState("Arrabiata");

    const { meals, loading, error, lastQuery} = useSelector((state: RootState) => state.meals);

    useEffect(() => {
        dispatch(fetchMeals(query));
    }, [dispatch]);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (query.trim()) {
            dispatch(fetchMeals(query));
        }
    };

    return (
        <div>
            <h2>Meal Finder</h2>
            <form onSubmit = {handleSearch}>
                <input
                type = "text"
                value= {query}
                onChange = {(e) => setQuery(e.target.value)}
                placeholder = " What you looking for?"
                />
                <button type = "submit">Search</button>
            </form>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <h3>{meal.strMeal}</h3>
                        <p>Category: {meal.strCategory}</p>
                        <p>Origin: {meal.strArea}</p>
                        <p>Instructions: {meal.strInstructions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
    };

export default DataFetcher;



