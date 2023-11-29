# Canny Debugging Test

Howdy Candidate, we've created this pared down version of Canny to get a better idea of your experience debugging web applications. Best of luck!

## Getting Started

1. **Initialize your environment**

We recommend using nvm for managing node versions.

Install nvm from [here](https://github.com/creationix/nvm)

Then install the node version for this assessment:

```sh
nvm i
```

1. **Install dependencies**

Next you'll need to install this app

```sh
npm install
```

1. **Run the backend**

The backend is a node server. Everything to do with the server lives in `/server`.

Terminal tab #1:

```sh
npm run backend
```

1. **Run the frontend**

Webpack is used to bundle and serve our app. Everything to do with the frontend lives in `/app`.

Terminal tab #2:

```sh
npm run frontend
```

Once everything is running, you should see the app running http://127.0.0.1:8080.

## Customer Issues

For each of the following issues:

1. Identify the issue
1. Apply the fix
1. Provide a response to each technical customer in 1-2 sentences

**Customer 1:** When I open the application, my posts do not load and all I see is a 'server error'.
Issue: The issue was coming from the authenticateUser file. The function is checking to make sure we have a valid user with specific properties.

- The name property was being checked instead of the nayme property, therefore the server was throwing an internal error (500)
  Answer: Fix was to make sure we check against the correct property in the userData. So I just changed name to nayme.

**Customer 2:** When I click on "Top" or "Old", the selector does not update with my new selection.

- This error was created by our redux store for posts, the data were not being updated correctly as we were mutating the state hence creating issue with the whole rerender. After, adding the state by using a spread operator in order to make sure we were not mutating any of the data on state we were able to change the sort property to the desire action when the dropdown menu is selected

**Customer 3:** When I sort by "Top", there are posts with only 28 votes ranking higher than posts with 180 votes!

- This was caused because of the sortBy function which was getting mutated and called everytime we would sort by any key.
  I copied the array into a different array to avoid any mutation using the toSorted native ES2023 method which return a new array with the elements sorted.

**Customer 4:** When I page through posts, although the posts are changing, the vote count in the top left corner does not match the total count of votes of the displayed posts.

- There is a delay in updating the recountvote state because the function that are called and dispatched are all asynchronously called but RecountVote is not so we have to find a way to make sure recount vote is called properly

## 🎉 You're Done 🎉

Congrats on completing our assessment. All that is left for you to do is submit your assessment. We made a command that will zip your submission and send it to us. Send us an email to confirm that we got it.

```sh
npm run submit
```
