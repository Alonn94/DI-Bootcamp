import { RecipeItem } from "../model/RecipeItem";
import { RecipeCollection } from "../model/RecipeCollection";

export class RecipeTemplate {
    constructor(
        private container: HTMLDivElement,
        private collection: RecipeCollection,
    ) {}

    render(): void {
        this.container.innerHTML ='';

        this.collection.getall().forEach(recipe => {
            const card = document.createElement('div')
        })
    }


    )
}