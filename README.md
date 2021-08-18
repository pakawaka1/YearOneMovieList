# YearOneMovieList
A full stack application which allows users to search, find information and add reviews for movies.

## How to Get Started 

1.  Requirements (with links to download)
     - Node.js: https://nodejs.org/en/,
     - PostgreSQL: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads,
     - Your favorite code editor.  I use Visual Studio Code:  https://code.visualstudio.com/download,
     - You will need an API key to connect to the movie database API I used:  https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative.

2. Database Setup
     - Once PostgreSQL is installed, we need to connect to the database.  This link will give you directions on connecting via psql or pgAdmin:  https://www.enterprisedb.com/postgres-tutorials/connecting-postgresql-using-psql-and-pgadmin.
     - Once you are connected, run this command in the SQL Shell to create the database and tables for this app:
       
       
          `CREATE DATABASE moviereviews;`
       
       
          <img width="581" alt="Screen Shot 2021-08-18 at 9 46 23 AM" src="https://user-images.githubusercontent.com/29390297/129939141-bce659d7-44fa-4f6f-b298-b76600c9cee9.png">
      
      
     - Now we need to connect to the the new moviesreview database:
       
       
          `\c moviereviews;`
       
       
       ![Screen Shot 2021-08-18 at 9 51 08 AM](https://user-images.githubusercontent.com/29390297/129939450-97393d4d-daa5-4c10-a646-d5721d178d4d.png)
       

    - Our tables will be created in the app using Sequelize's sync() method.
    

3.  App Setup (in Terminal)

    - Now in your chosen directory, run this command:


               git clone git@github.com:pakawaka1/YearOneMovieList.git
         
     - Next, run the following two commands:
                
                   cd YearOneMovieList
                   npm install
        
    
     -Then, in the config directory of the app, create a new file called `config.env`. In that file, insert your password for Postgres as well as the RAPID_API key:
          
                    
       ![Screen Shot 2021-08-18 at 11 35 19 AM](https://user-images.githubusercontent.com/29390297/129953330-d589a573-d13e-461c-8c4f-313ca1db8776.png)


     - Using Sequelize's sync() method, I was not able to use a variable for my password, so you may need to manually insert it as `config/db.js`
     
          
          ![Screen Shot 2021-08-18 at 11 37 34 AM](https://user-images.githubusercontent.com/29390297/129953644-252bea3e-fd02-4317-a186-c424b7e4b320.png)
    
    
    - Now run the command `nodemon` to start the server at http://localhost:5000/.
    
  
  4.  App Usage

       Here is the homepage:  
       
         <img width="1423" alt="Screen Shot 2021-08-18 at 11 46 53 AM" src="https://user-images.githubusercontent.com/29390297/129954769-d64763b6-a45e-432a-ae52-982db77371be.png">
         
        In the search bar, I entered "godfather", hit the search button, and received many results, including:
        
        
        <img width="1389" alt="Screen Shot 2021-08-18 at 11 49 34 AM" src="https://user-images.githubusercontent.com/29390297/129955137-213ee936-a1f0-457f-bbd7-2eb180a5a1dc.png">
         
         When I clicked on the "Get Info" button for "The Godfather: Part II", I received: 
         
         
         <img width="1311" alt="Screen Shot 2021-08-18 at 11 51 47 AM" src="https://user-images.githubusercontent.com/29390297/129955456-3b6aa453-91ff-4fee-8143-d1d0bd9ad963.png">
         



      

