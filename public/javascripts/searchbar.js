//unfinished,
//todo Search based on input that queries the database for meals "a%" etc
async function searchFood(url){
    document.querySelector(".searchInput").addEventListener("keyup", function(event){
    });
    let searchInput = document.querySelector(".searchInput").value.toLowerCase();

        await fetch(url, {
             method: 'GET',
             headers: {
                 'Content-type': 'application/json'
             },
             body: JSON.stringify({
                 search: searchInput,
                
                 
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
     
    



   