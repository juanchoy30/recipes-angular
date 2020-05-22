import { Ingredients } from './ingredients';
import { Preparation } from './preparation';

export class Recipe {
    id : string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    description: string;
    ingredients: Ingredients[];
    preparation: Preparation[];
}

export const Category = ['Meats', 'Desserts', 'Pizzas', 'Salads', 'Soups', 'Others'];