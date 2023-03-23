async function deleteMeal(url, mealId){
   await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            MealId: mealId,
           
            
        })
    }).then((response) => {
        if (response.ok) {
            const resData = 'Meal deleted';
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
