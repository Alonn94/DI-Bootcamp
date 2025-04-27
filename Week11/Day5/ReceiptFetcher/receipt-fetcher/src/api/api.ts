import { MealResponse } from "../types/types";

export const fetchData = async (query: string): Promise<MealResponse> => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    if (!response.ok) {
        throw new Error("Response was not okay");
    }
    const data: MealResponse = await response.json();
    return data;
};

