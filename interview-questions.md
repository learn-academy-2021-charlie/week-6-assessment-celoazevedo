# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: To fix this we can use migration to add a new column to the Sightings model. I forgot the command to add the column but I will list it bellow. The foregin key will be called animal_id because we want to tie the Sightings table to the Animal table (that already have a id column) by using a the unique identifier (in this case the id) from the Animal table. The foreign key is always part of the belongs_to side, in this case Sightings belongs_to Animals, so the Sightings model will hold the foreign key.

  Researched answer: we can generate a migration file through the rails command that will allow us to add a column to the database. $ rails generate migration add_column_to_sighting . this will generate the file. We need to define the change method inside the Migration file (add_column :sightings, :animal_id, :integer). We can than migrate the file to make the changes effective in our Schema, changing the current state of our database ($rails db:migrate)



2. Which RESTful API routes must always be passed params? Why?

  Your answer: show, create, update, destroy. these routes need to have the information of the specific instance as the query parameter in the url.

  Researched answer: I was wrong about create and forgot to add edit. So new list is show, edit, update and delete. 
    - get '/animals/:id' => 'animals#show'
    - post '/animals' => 'animals#create'
    - get '/animals/:id/edit' => 'animals#edit'
    - patch or put '/animals/:id' => 'animals#update'

3. Name three rails generator commands. What is created by each?

  Your answer: 
    - $ rails g model ModelName :atribute1 :atribute2  --> this will generate a new model (table) with the repective attributes as columns.
    - $ rails g migration migration_file_decriptive_name --> this will generate a migration file where we will need to define the changes that we want to make to our table ('file cabinet')
    - $ rails g controller Animal --> this will generate a new controller and all of the files associated with the controller


  Researched answer: the generators can save the developer a lot of time by creating and setting up the files that we need. 
    - $ rails g resource Animal atribute1:integer attribute2:string ...
    - this generate comand will create just about everything that we need to start working with our db. It sets up the migration and model for the AciveRecord class.It creates the controller and views folder and it also automagically generates teh routes (resource routes). All that we need to do is to tell our controller what we want to do for each crud operation.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students  ->> the index method ->> to display a list of all students          

method="POST"   /students  ->> the create method ->> to create a new instance of a student    

method="GET"    /students/new ->> the new method ->> to display the form that will be used to create a new student

method="GET"    /students/2 ->> the show method ->> to display the specific instance in the student db that has an id = 2

method="GET"    /students/edit/2 ->> the edit method ->> to display the form that will allow the user to make changes to the specific instance in the student db that has an id = 2. In the notes the path is /students/:id/edit. Check on this.

method="PATCH"  /students/2 ->> the update method ->> to submit the changes that were made in the form. It updates the information of the db instance with id = 2      

method="DELETE" /students/2 ->> the destroy method ->> it deletes the instance in the db with id = 2.     



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a user I can see a header with 'To Do List'.
- As a user I can see a input field.
- As a user I can see a button.
- As a user I can see a empty list.
- As a user I can click the button and add the data from the input to the list
- As a user I can see the date and time of addition next to my list item
- As a user I can see a delete button next to my list item
- As a user I can click on the delete button and remove the respective item
- As a user I can click on my list item and cross the item name with a line