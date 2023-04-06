async function searchFood(url) {
    const searchInput = document.querySelector('.searchInput').value.toLowerCase();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        search: searchInput
      })
    }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }).then((meals) => {
    renderMeals(meals);
  }).catch((response) => {
    alert(response.statusText);
  });
    if (response.ok) {
      const meals = await response.json(); // Convert the response body to a JavaScript object
      renderMeals(meals); // Call a new function to render the meals
    } else {
      alert('Search failed');
    }
  }
  
  function renderMeals(meals) {
    const resultsDiv = document.querySelector('.results');
    let html = '';
  
    if (meals.length > 0) {
      html = '<table class="col py-1 bg-light">';
      meals.forEach(meal => {
        html += `<tr class="border"><td>${meal.Name}</td></tr>`;
      });
      html += '</table>';
    } else {
      html = 'No meals found';
    }
  
    resultsDiv.innerHTML = html;
  }
   