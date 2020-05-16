import { Recipe } from './recipe';

export const RECIPES: Recipe[] = [
    {
        id: 0,
        name: 'Chicken Tostadas',
        image: '/assets/images/chicken-tostadas.jpg',
        category: 'meats',
        featured: false,
        description: 'Chicken and veggie tostadas are baked in oven.',
        ingredients: [
            {ingredient : '2 eaches skinless, boneless chicken breasts'},
            {ingredient : '½ (1 ounce) package taco seasoning mix'},
            {ingredient : '1 (16 ounce) can refried beans'},
            {ingredient : '6 eaches corn tostada shells'},
            {ingredient : '1 cup shredded Mexican cheese blend'},
            {ingredient : '1 tomato'},
            {ingredient : '¾ red onion'},
            {ingredient : '¾ green bell pepper'},
            {ingredient : '½ cup chopped fresh cilantro'},
            {ingredient : '¼ cup salsa, or to taste'},
            {ingredient : '¼ cup sour cream'}
        ],
        preparation: [
            {   
                step: 'Step 1:',
                content: 'Preheat the oven to 375 degrees F (190 degrees C)'
            },
            {
                step: 'Step 2:',
                content: 'Place chicken into a frying pan over medium heat. Sprinkle with taco seasoning and cook until no longer pink in the center and juices run clear, 5 to 7 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).'
            },
            {
                step: 'Step 3:',
                content: 'Spread a thin layer of refried beans onto each tostada shell; sprinkle each with Mexican cheese. Divide cooked chicken on top of cheese layer. Sprinkle tomato, red onion, and bell pepper evenly on top of each tostada. Place tostadas on a baking sheet.'
            },
            {
                step: 'Step 4:',
                content: 'Bake in the preheated oven until crispy, 10 to 15 minutes.'
            },
            {
                step: 'Step 5:',
                content: 'Remove tostadas from the oven. Sprinkle with cilantro and spread salsa and sour cream on top.'
            },
        ]  
    },
    {
        id: 1,
        name: 'Carrot Cake',
        image: '/assets/images/carrot-cake.jpg',
        category: 'desserts',
        featured: false,
        description: 'This rich, moist cake has all the flavor, without all the fat and calories. Because it is so full of carrots, pineapple, and nuts it is similar to a fruit bread. For the best flavor, bake the cake one day ahead.',
        ingredients: [
            {ingredient: '2 cups all-purpose flour'},
            {ingredient: '2 teaspoons baking soda'},
            {ingredient: '2 teaspoons ground cinnamon'},
            {ingredient: '½ teaspoon salt'},
            {ingredient: '2 eggs'},
            {ingredient: '1 ½ cups white sugar'},
            {ingredient: '¾ cup buttermilk'},
            {ingredient: '¾ cup unsweetened applesauce'},
            {ingredient: '2 tablespoons vegetable oil'},
            {ingredient: '2 teaspoons vanilla extract'},
            {ingredient: '2 ½ cups grated carrots'},
            {ingredient: '1 ½ cups chopped pecans'},
            {ingredient: '1 (8 ounce) can crushed pineapple in juice'},
            {ingredient: 'drained and juice reserved'},
            {ingredient: '1 (8 ounce) package Neufchatel cheese'},
            {ingredient: '1 tablespoon reserved pineapple juice'},
            {ingredient: '1 (16 ounce) package confectioners sugar'},
            {ingredient: '1 teaspoon vanilla extract'},
            {ingredient: '1 pinch salt'}
        ],
        preparation: [
            {
                step: 'Step 1:',
                content: 'Preheat oven to 350 degrees F (175 degrees C). Spray a 9x13-inch baking dish with cooking spray.'
            },
            {
                step: 'Step 2:',
                content: 'Sift flour, baking soda, cinnamon, and 1/2 teaspoon salt together in a bowl. Lightly beat eggs in a bowl; add white sugar, buttermilk, applesauce, oil, and 2 teaspoons vanilla extract and mix well. Stir buttermilk mixture, carrots, pecans, and drained pineapple into flour mixture just until mixed; pour into prepared dish. '
            },
            {
                step: 'Step 3:',
                content: 'Bake in the preheated oven until a toothpick inserted in the center of the cake comes out clean, 45 to 50 minutes. Cool cake in baking dish on a wire rack, about 1 hour. Cover dish tightly with plastic wrap; refrigerate 8 hours to overnight.'
            },
            {
                step: 'Step 4:',
                content: 'Beat Neufchatel cheese and 1 tablespoon reserved pineapple juice together in a bowl with an electric mixer until smooth; add confectioners sugar, 1 teaspoon vanilla extract, and 1 pinch salt and beat until frosting is smooth. Spread frosting on cake.'
            }
        ]
    },
    {
        id: 2,
        name: 'Peanut Butter Chip Chocolate Cookies',
        image: '/assets/images/peanut-butter-chip-chocolate-cookies.jpg',
        category: 'desserts',
        featured: false,
        description: 'My best friend\'s mom made these when we were kids. They are the best cookies I have ever eaten, and I have yet to screw up a batch! Warning: you may be tempted to eat the entire recipe!!',
        ingredients: [
            {ingredient : '1 cup butter'},
            {ingredient : '1 ½ cups white sugar'},
            {ingredient : '2 eggs'},
            {ingredient : '2 teaspoons vanilla extract'},
            {ingredient : '2 cups all-purpose flour'},
            {ingredient : '⅔ cup unsweetened cocoa powder'},
            {ingredient : '¾ teaspoon baking soda'},
            {ingredient : '½ teaspoon salt'},
            {ingredient : '2 cups peanut butter chips'}
        ],
        preparation: [
            {
                step: 'Step 1:',
                content: 'Preheat oven to 350 degrees F (175 degrees C). Grease cookie sheets.'
            },
            {
                step: 'Step 2:',
                content: 'In a medium bowl, cream together the butter and sugar. Stir in the eggs and vanilla. Combine the flour, cocoa, baking soda and salt, stir into the creamed mixture. Finally, fold in the peanut butter chips. Drop cookies by heaping teaspoonfuls onto the prepared cookie sheets.'
            },
            {
                step: 'Step 3:',
                content: 'Bake for 8 to 10 minutes in the preheated oven, until set. Cool on wire racks.'
            }
        ]
    },
    {
        id: 3,
        name: 'Banana Cheesecake with Banana Cream Pie Topping',
        image: '/assets/images/banana-cheesecake-with-banana-cream-pie-topping.jpg',
        category: 'desserts',
        featured: false,
        description: 'This simple recipe is a combination of banana cheesecake and banana cream pie all rolled into one dessert! It uses an Oreo®-cookie crust instead of the traditional graham cracker crust, adding a bit of a chocolate accent.',
        ingredients: [
            {ingredient : '2 cups crushed chocolate sandwich cookies (such as Oreo®)'},
            {ingredient : '1 tablespoon butter, melted'},
            {ingredient : '3 (8 ounce) packages fat-free cream cheese, softened'},
            {ingredient : '¾ cup white sugar'},
            {ingredient : '3 eggs'},
            {ingredient : '½ cup mashed banana'},
            {ingredient : '1 teaspoon vanilla extract'},
            {ingredient : '2 ½ cups cold milk'},
            {ingredient : '2 (3.4 ounce) packages instant vanilla pudding mix'},
            {ingredient : '1 cup fat-free frozen whipped topping, thawed'},
            {ingredient : '1 sliced banana, or more to taste'}
        ],
        preparation: [
            {
                step: 'Step 1:',
                content: 'Preheat the oven to 350 degrees F (175 degrees C).'
            },
            {
                step: 'Step 2:',
                content: 'Mix cookie crumbs and butter together in a bowl. Press mixture into the bottom of a 9-inch springform pan.'
            },
            {
                step: 'Step 3:',
                content: 'Mix cream cheese and sugar together in a bowl using an electric mixer until smooth and well blended. Add eggs 1 at a time, mixing after each addition. Stir in mashed banana and vanilla extract. Pour mixture into crust in the springform pan.'
            },
            {
                step: 'Step 4:',
                content: 'Bake in the preheated oven until center is almost set, 50 to 60 minutes. Cool completely, at least 1 hour, before removing from pan.'
            },
            {
                step: 'Step 5:',
                content: 'Whisk milk and pudding mix together in a bowl until thoroughly combined. Fold in whipped topping.'
            },
            {
                step: 'Step 6:',
                content: 'Arrange sliced bananas on top of cooled cheesecake. Spread pudding mixture on top. Chill at least 3 hours before serving.'
            }
        ]
    }
]