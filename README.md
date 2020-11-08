# welp
Welp! Can't decide :/


Frustrated from your group of friends couldn't decide on a place to eat?
Well, introducing Welp! for those moments where you let a random algorithm decide your meal.

To get started: clone down a version of this application using the top right clone/copy git clone button.

Once connected: you should be able to see the following message: "Successfully connected to Welp! on http://localhost:3333/"

Navigate to your browser and enter the URL http://localhost:3333/

Demo:
<p align="center"><img src="https://welpassets.s3-us-west-1.amazonaws.com/demo.gif"/></p>
For Review use purpose:

# FullStack Review

## Ultimate Goal:
- Create an app the allows the user to add restaurant choices, displays them, and randomly chooses a winner
- User can delete indivdual restaurant choices or all restaurant choices

# If you get stuck...
- Did you install all of your dependencies (npm install/package.json)?
- Did you import/require your data correctly?
- Did you export your data correctly?
- Is your Webpack still running?
- If you're not getting a response in Postman, did you send a response back from your controller?

# Routes Guide
- GET /api/all                retrieves all added restaurants
- DELETE /api/all             deletes all added restaurants
- POST /api/add               allows user to add a restaurant
- DELETE /deleteOne/:id       user can delete one restaurant

## Step 1
- Build out the server in index.js
- Create any other necessary folders and files for your server (HINT: controller, router) and use the Routes Guide to add the necessary routes - done


## Step 2
- Build out the NoSQL database
- Create a properly formatted schema and use it to set up a new collection in your database
- Make sure there is a connection to the server - done

## Step 3
- Test all endpoints via [Postman](https://www.postman.com/downloads/) (HINT: test POST first) - done

## Step 4
- Build out the noted functions in your front end
- Refer to Routes Guide if you are lost - done

## Step 5
- Use conditional rendering to display a randomly selected restaurant upon pressing the "Go!" button

## EXTRA CREDIT
- Add a new feature that lets you add friends
- Add dropdown to show which friend is submitting each restaurant and save in database
- HINT: this may require you to build new schemas and/or modify existing schemas

{this.state.data.map((item) => {
                            if (this.state.isRandom) {
                                return (
                                    <div>
                                        {this.state.theRandomChoice}
                                    </div>
                                )
                            } else {
                                return (
                                <div key={item._id} className="individual_container">
                                    {item.restaurantName}
                                    <button id={item._id} onClick={this.handleDeleteOne} className="cross_button">x</button>
                                </div>
                                )
                            }
                        })}