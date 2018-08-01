## Deploy React and Express i.e. a MERN app to Heroku - 16-June-2018 - implemented in my devbook main project this way

Simple steps

Following - https://daveceddia.com/deploy-react-express-app-heroku/

1> The regular steps of creating an Express sever and setting and setting up Heroku for that project by doing  ``heroku create``

2> Then set up the React app in a separate folder inside the project root folder named as “client” folder.

3> Now assuming that my server.js files listens to port 5000

Create React App will proxy API requests from the React app to the Express app if we add a “proxy” key in package.json like this:

``"proxy": "http://localhost:5000"``

This goes in client/package.json, not in the Express app’s package.json, and it will be completely ignored by Heroku after deploying (as in production environment this port number or localhost in the url has not effect).

4> In package.json of the server file - under script section, include the below line

``"heroku-postbuild": "cd client && npm install && npm run build"``

Explanation of the above step - Express depends on the built client code in client/build, which we don’t have yet, and which we’d rather not check in to git.

What we’ll do is tell Heroku to build the React app after we push up the code, and we can do that by adding a “heroku-postbuild” script in the top-level (Express app’s) package.json.

So with the ``“heroku-postbuild”`` configuration - I tell Heroku “hey, after you’re done doing what you do, go into the client folder and build my React app.” The npm run build script will kick off Create React App’s production build, which will put its output files in the client/build folder so Express can find them.

5> Then the normal

``git add .``

``git commit -m "some message"``

``git push`` and then

``git push heroku master``
