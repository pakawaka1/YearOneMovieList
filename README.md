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
       
       
     - Next, we will need to create a table called reviews with columns:


          `CREATE TABLE public.reviews (id integer NOT NULL,title character varying(100),"thumbsUp" integer,"thumbsDown" integer,"createdAt" date,"updatedAt" date);`
          
     
          ![Screen Shot 2021-08-18 at 10 31 54 AM](https://user-images.githubusercontent.com/29390297/129945093-dc6982e1-8973-4018-a8c9-f0807233b546.png)
          
     
     - After, run this command to set our primary keys and owner:
              
           
           `ALTER TABLE ONLY public.reviews ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);`
          
           
          ![Screen Shot 2021-08-18 at 10 40 24 AM](https://user-images.githubusercontent.com/29390297/129946198-3aad12ad-4554-4579-8c0c-393dbfa6e787.png)



           `ALTER TABLE public.reviews OWNER TO postgres;`
           
          
          ![Screen Shot 2021-08-18 at 10 48 03 AM](https://user-images.githubusercontent.com/29390297/129947061-0b4e8c81-78b5-47d0-8f3c-38a36c779af7.png)


        




























100. First list item
     - First nested list item

100. First list item
     - First nested list item

100. First list item
     - First nested list item
