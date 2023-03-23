//lets you add a new meal

async function addMeal(url){

    // Prompts the user for the new meal info
    mealName = prompt("Meal name:")
    mealType = prompt("Meal type: (breakfast, lunch, snack, dinner, drink)")
    calories = prompt("Number of calories:")
    protein  = prompt("Number of protein in grams:")

    // Map to translate typename from word to number. easier for user
    const typeMapping = {
      dinner: 1,
      snack: 2,
      breakfast: 3,
      lunch: 4,
      drink: 5,
    };

    
    // Check if calories and protein are numbers
    if (isNaN(calories) || isNaN(protein)) {
        alert("Calories and protein must be valid numbers");
        return;
      }

    //Checks if the inputed mealtype exists in typeMap  
    const allowedTypes = Object.keys(typeMapping);
    if (!allowedTypes.includes(mealType.toLowerCase())) {
    alert(`Invalid meal type. Allowed values: ${allowedTypes.join(", ")}`);
    return;
}
    //Gets the given typeId from the mealTypeName
 typeId = typeMapping[mealType.toLowerCase()];

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            MealName: mealName,
            MealType: typeId,
            Calories: calories,
            Protein: protein
            
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Added new meal';
            alert(resData);
            location.reload()
            return Promise.resolve(resData);
        }
        return Promise.reject(response);
      })
    .catch((response) => {
        alert(response.statusText);
    });
    
    }
