def knapsack_recipes(recipes, max_calories, max_protein, max_fats, max_carbohydrates, dietary_preference, max_preparation_time, max_portion_size):
    num_recipes = len(recipes)
    
    # Initialize the dynamic programming table
    dp = [[0] * (max_portion_size + 1) for _ in range(max_preparation_time + 1)]
    
    # Initialize a matrix to store the selected recipes
    selected_recipes = [[[] for _ in range(max_portion_size + 1)] for _ in range(max_preparation_time + 1)]
    
    # Iterate over each recipe
    for i in range(num_recipes):
        recipe = recipes[i]
        calories, protein, fats, carbohydrates, dietary_pref, preparation_time, portion_size, name = recipe
        
        # Check if the recipe satisfies the dietary preference
        if dietary_pref != dietary_preference:
            continue
        
        # Iterate over each preparation time and portion size
        for t in range(max_preparation_time, preparation_time - 1, -1):
            for s in range(max_portion_size, portion_size - 1, -1):
                # Check if the recipe can be included in the knapsack
                if (
                    calories <= max_calories
                    and protein <= max_protein
                    and fats <= max_fats
                    and carbohydrates <= max_carbohydrates
                ):
                    # Check if including the recipe improves the current value
                    if dp[t][s] < dp[t - preparation_time][s - portion_size] + calories:
                        dp[t][s] = dp[t - preparation_time][s - portion_size] + calories
                        selected_recipes[t][s] = selected_recipes[t - preparation_time][s - portion_size] + [name]
    
    # Retrieve the selected recipes
    selected = selected_recipes[max_preparation_time][max_portion_size]
    
    return selected


# Example usage
recipes = [
    # (calories, protein, fats, carbohydrates, dietary_pref, preparation_time, portion_size, name)
    (300, 20, 10, 40, "veg", 30, 1, "Recipe 1"),
    (500, 30, 15, 60, "non-veg", 60, 2, "Recipe 2"),
    (400, 25, 20, 45, "keto", 45, 1, "Recipe 3"),
    (350, 15, 12, 50, "veg", 20, 1, "Recipe 4"),
    (450, 25, 18, 55, "gluten-free", 40, 1, "Recipe 5"),
    (550, 30, 20, 65, "non-veg", 70, 2, "Recipe 6"),
]

max_calories = 1000
max_protein = 50
max_fats = 25
max_carbohydrates = 80
dietary_preference = "veg"
max_preparation_time = 120
max_portion_size = 2

selected_recipes = knapsack_recipes(
    recipes, max_calories, max_protein, max_fats, max_carbohydrates,
    dietary_preference, max_preparation_time, max_portion_size
)

# Print the selected recipes
for recipe_name in selected_recipes:
    print("Recipe:", recipe_name)

