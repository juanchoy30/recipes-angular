import { Ingredients } from './ingredients';
import { Preparation } from './preparation';

export class Recipe {
    id : number;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    description: string;
    ingredients: Ingredients[];
    preparation: Preparation[];
}