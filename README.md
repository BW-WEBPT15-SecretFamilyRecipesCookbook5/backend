# backend
Repo for the backend developer, Christine Carpenter, of Secret Family Recipes 5.


This back end was build in production using sqlite3. It is deployed through Heroku using PostGres (pg) 

    https://safe-peak-28764.herokuapp.com/ 


EndPoints

- POST /api/auth/register

    * Used to Add/Register New User
**SAMPLE DATA FOR DATA SHAPE ONLY **

Body (Accepts) :
    { 
        "username": "testuser", 
        "password": "testpassword" 
    }
Returns (User Object and Token) : 
    { 
        "user": { 
            "id": 5, 
            "username": "testuser2", 
            "password": "$2a$08$eJO456jmSlaD61/Z73DHwCm4ezos9jWv41nq.IMuq7l8phc3VVHymDd6" }, 
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJ" 
         }


- POST /api/auth/login

    *Used to login User

Body (Accepts): 
    {
        "username": "testuser", 
        "password": "testpassword" 
     }
Returns (User Object and Token): 
    { 
        "user": { 
            "id": 4, 
            "username": "testuser", 
            "password": "$2a$08$LSDk50SsYmUJ5672bh49fSUG./LPrLY7tW9w/YH9QS9FfmYDTg7.1J02" 
         }, "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJ" 
    }
    
    
- GET /api/users/:user_id/recipes

    *Get all recipes belonging to user

Body (Accepts) :
    {
        "user_id": "{usersId}"
    }
Returns (Array of Recipe Objects): 
    [ {
        "id": 3, 
        "title": "Sweet Corn Bread", 
        "img-source": "https://grannysPie.com", 
        "instructions": "Mix ingredients in a large bowl, greese pan, turn oven to 350, poor mixture into pan, keep in oven for 30mins",
        "user_id": "1", 
        "category": "Side Dish", 
        "ingredients": "1cup cornmeal, 
        1/4cup milk, 
        1 large egg, 
        1/2cup sugar, 1stick butter" 
   } ]


- GET /api/users/recipes/:id

   * Get one recipe with specified id

Body (Accepts):  
    {
        "id": "Recipe's ID"
    }
    
Returns (One Recipe Object): 
    {
        "id": 3,    
        "title": "Sweet Corn Bread", 
        "img-source": "https://sampleURL.com", 
        "instructions": "Mix ingredients in a large bowl, greese pan, turn oven to 350, poor mixture into pan, keep in oven for 30mins",
        "user_id": "1", 
        "category": "Side Dish", 
        "ingredients": "1cup cornmeal, 1/4cup milk, 1 large egg, 1/2cup sugar, 1stick butter" 
   }


- POST /api/users/:user_id/recipes

   * Add new recipe to specified user

Body (Accepts) 
    {
        "user_id": "User's ID" 
    }
Returns (New Recipe Object): 
    { 
        "id": 5,    
        "title": "Corn Bread", 
        "img_source": "https://sampledata.com", 
        "instructions": "Mix ingredients in a large bowl, greese pan, turn oven to 350, poor mixture into pan, keep in oven for 30mins",
        "user_id": "2", 
        "category": "Side Dish", 
        "ingredients": "1cup cornmeal, 1/4cup milk, 1 large egg, 1/2cup sugar, 1stick butter" 
    }
    
    
- DELETE /api/users/recipes/:id
    
    *Delete recipe of specified id

Body(Accepts): 
    {
        "id": "Recipe's ID"
    }
    

- PUT /api/users/recipes/:id

    * Edit recipe of specified id

Body(Accepts):
    {
        "id": "Recipe's ID" 
    }
Returns (Updated Recipe Object):  
    {
        "id": 5, 
        "title": "Sweet Corn Bread", 
        "img_source": "https://thisImage.com", 
        "instructions": "Mix ingredients in a large bowl, greese pan, turn oven to 350, poor mixture into pan, keep in oven for 30mins",
        "user_id": "2", 
        "category": "Side Dish", 
        "ingredients": "1cup cornmeal, 1/4cup milk, 1 large egg, 1/2cup sugar, 1stick butter" 
    }
