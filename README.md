# Overview
A React web app that resembles the Google search engine and fetches up to 20 jokes from an [API](https://icanhazdadjoke.com) based on keywords from user input. The "I'm feeling funny" button prompts the app to display 1 joke which can be random or based on the text input.
Different parts of the page were implemented as React components to maximise modularity. 

The `App` class component retrieves the data through its `searchJokes` method which uses the JavaScript `fetch` API. 
In the `render` method, two functional components - `SearchForm` and `SearchResultsList` are created and `props` are used to pass on access to `App`'s methods and state data.

# UI Screenshot
![Sample Output](https://raw.githubusercontent.com/deyansp/React-Dad-Joke-Generator/main/screenshot.PNG?token=AKMQMV76WXXB6CUQ62T327TAYUUHG)
