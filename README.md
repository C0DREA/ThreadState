# ThreadState (React + Redux Reddit client App)

A simple Reddit client built with **React** and **Redux Toolkit** that allows users to browse posts, search content, and read comments from Reddit.

## Live Demo

👉 https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME

## Features

* Browse Reddit posts from popular subreddits
* Search posts by keyword
* View detailed post information
* Display comment threads
* Responsive layout
* Loading states and error handling
* Clean component-based architecture

## Technologies Used

* React
* Redux Toolkit
* Vite
* CSS Modules
* Reddit JSON API

## Project Structure

```
src
 ├── components
 │   ├── CommentCard
 │   ├── PostCard
 │   ├── PostDetail
 │   ├── PostFeed
 │   ├── SearchBar
 │   ├── Spinner
 │   └── SubredditList
 │
 ├── redux
 │   ├── postsSlice.js
 │   ├── uiSlice.js
 │   └── store.js
 │
 ├── App.jsx
 └── main.jsx
```

## Installation

Clone the repository:

```
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
```

Go into the project folder:

```
cd YOUR_REPOSITORY_NAME
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

The app will run locally at:

```
http://localhost:5173
```

## How It Works

This app fetches data from the Reddit public JSON API.

Examples:

```
https://www.reddit.com/r/reactjs.json
https://www.reddit.com/r/javascript/comments/{postId}.json
```

Redux Toolkit manages:

* posts
* comments
* loading states
* selected post UI

## Future Improvements

* Dark mode
* Pagination / infinite scroll
* Improved comment threading
* Mobile UI improvements
* Subreddit filtering

## Author

Built by **YOUR NAME** as part of a React learning project.

## License

This project is open source and available under the MIT License.
