import {v4 as uuidv4} from 'uuid';

export class RecipeItem {
    public id: string;
    public isFavourite: boolean = false;

    constructor(
        public title: string,
        public ingredients: string[],
        public instructions: string
    ) {
        this.id = uuidv4();
    }
}

