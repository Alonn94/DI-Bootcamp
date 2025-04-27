import { RecipeItem } from './RecipeItem';

export class RecipeCollection {
    private recipes: RecipeItem[] = [];

    constructor () {
        this.loadFromLocalStorage();
    }

    addRecipe(recipe: RecipeItem): void {
        this.recipes.push(recipe);
        this.saveToLocalStorage();
    }

    deleteRecipe(id: string): void {
        this.recipes= this.recipes.filter(recipe => recipe.id !== id);
        this.saveToLocalStorage();
    }

    toggleFavourite(id: string) : void {
        const recipe = this.recipes.find(r => r.id === id);
        if (recipe) {
            recipe.isFavourite = !recipe.isFavourite;
            this.saveToLocalStorage();
        }
    }

    getall(): RecipeItem[] {
        return this. recipes;
    }

    clearAll(): void {
        this.recipes = [];
        this.saveToLocalStorage();
    }

    private saveToLocalStorage(): void {
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
    }
    private loadFromLocalStorage(): void {
        const data = localStorage.getItem('recipes');
        if (data) {
            const raw = JSON.parse(data);
            this.recipes = raw.map((r: any) =>{
                const item= new RecipeItem (r.title, r.ingredients, r.instructions);
                item.id = r.id;
                item.isFavourite = r.isFavourite;
                return item;
            });
        }
    }
}

