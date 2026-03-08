# ThreadState (React + Redux Reddit client App)

This project is a **Reddit** client built with **React** and **Redux** Toolkit. 
It allows users to browse posts from different subreddits, search for content, and view comment discussions using the **Reddit** public **API**.

## Live Demo

👉 https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME

## Screenshot
![App Screenshot](./Wireframe,%20structure%20&%20tasks/preview.png)

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

## Wireframe

![Wireframe](./Wireframe,%20structure%20&%20tasks/wireframe.png)

## Timeline followed

![Timeline](./Wireframe,%20structure%20&%20tasks/timeline.png)

## Project Structure

```
src
 ├── components
 │   ├── CommentCard
         ├── CommentCard.jsx
         ├── CommentCard.module.css
 │   ├── PostCard
         ├── PostCard.jsx
         ├── PostCard.module.css
 │   ├── PostDetail
         ├── PostDetail.jsx
         ├── PostDetail.module.css
 │   ├── PostFeed
         ├── PostFeed.jsx
         ├── PostFeed.module.css
 │   ├── SearchBar
         ├── SearchBar.jsx
         ├── SearchBar.module.css
 │   ├── Spinner
         ├── Spinner.jsx
         ├── Spinner.module.css
 │   └── SubredditList
         ├── SubredditList.jsx
         └── SubredditList.module.css
 │
 ├── redux
 │   ├── postsSlice.js
 │   ├── uiSlice.js
 │   └── store.js
 │
 ├── App.jsx
 ├── App.module.css
 ├── index.css
 ├── index.js
 └── main.jsx
```

## Installation

Clone the repository:

```
git clone https://github.com/C0DREA/ThreadState
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

Built by **C0DREA**, part of a React learning project.
GitHub: https://github.com/C0DREA

## License

This project is open source and available under the MIT License.
