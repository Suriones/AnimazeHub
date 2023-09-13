<h1 align="center">Hi there, I'm <a target="_blank">Dmitry</a> 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">Junior Frontend React developer from Ukraine</h3>

<p align="center">My project is a ready-made platform for watching and discussing anime. Users can register, leave comments, and administrators can add news and new series. The database is a JSON file.</p>

<h1><a href="https://github.com/Suriones/ReactApp_2023/blob/main/package.json">Technology</a></h1>
<p>I didn't use create-react-app and built the project from scratch.</p>
<ul>
  <li>React, Redux, Bootstrap</li>
  <li>Axios, Json-Server</li>
  <li>Webpack, Babel, Sass, Jest</li>
</ul>

<h1>Launch</h1>
<ul>
  <li>Install all dependencies: "npm install"</li>
  <li>Start webpack dev-server: "npm run dev" (3000) + open new console and start json-server "npm run json-server" (3001)</li>
  <li>URL: <a href="http://localhost:3000/">http://localhost:3000/</a></li>
</ul>

<h1>Description</h1>
<p>My project allows me to maintain an anime resource where users can view news, anime, learn about new titles and communicate in comments. Administrators have the ability to add news and new anime.</p>
<p><img width="1000" alt="Screenshot_1" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/693e9193-4e37-41a6-b45f-07a3639ef443"></p>

<p><img width="25" alt="Screenshot_1" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/085ca018-e490-4fd9-923b-c791a7258ec4">
Local state is used in form fields, button status and content display, but all global information such as news, comments, new users, etc. - this fills the json file. All API requests are implemented in the file <a href="https://github.com/Suriones/ReactApp_2023/blob/main/src/Redux/API/api.js">API.js.</a> "Database" here: <a href="https://github.com/Suriones/ReactApp_2023/blob/main/src/Redux/API/db.json">DB.json</a></p>
<p>All editor and reducer settings are located in the folder <a href="https://github.com/Suriones/ReactApp_2023/tree/main/src/Redux">Redux</a></p>

<p><img width="25" alt="Screenshot_1" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/88c28633-c14c-49f9-aaf4-fe0b51e01026">
All my components use only information from props, without importing any external files. Only container components have dispatch and DAL functions, which are also transmitted through props.</p>
<p>Many components are wrapped in React.memo for optimization, and almost all pages include React.lazy functions. While all components are loading, a loading circle will pop up. All components are functional, hooks used: useEffect, useState (just try it out), useParams, useRef.</p>  

<p><img width="1000" alt="Screenshot_5" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/fdf5f1d8-7fc2-46fb-b661-2f114f243ca8"></p>
<p><img width="25" alt="Screenshot_5" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/9630dea3-fe59-4ff3-8363-c0f88af4f291">
The comments component has a large amount of logic and is placed separately, so it can be used separately from the anime page. She just needs to pass the corresponding object through props. Comments on its use are left <a href="https://github.com/Suriones/ReactApp_2023/blob/main/src/Components/CommentsBlock/CommentsBlockContainer.jsx">here.</a></p>
<p>The <a href="https://github.com/Suriones/ReactApp_2023/blob/main/src/Components/CommentsBlock/CommentsBlockContainer.jsx">container component</a> is responsible for the logic, the <a href="https://github.com/Suriones/ReactApp_2023/blob/main/src/Components/CommentsBlock/CommentsBlock.jsx">“dumb”</a> component is responsible for rendering.</p>

<p>Pages are divided into groups of 10, they can be switched, 5 comments are displayed at a time, and when a new one is sent, it is immediately re-rendered and the last page opens.</p>

<p><img width="25" alt="Screenshot_12" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/7d307563-3772-442c-bbf1-d0b992c57991">
Covered all reducers with <a href="https://github.com/Suriones/ReactApp_2023/blob/main/src/Tests/Reducers/reducers.test.js">tests</a> while working.</p>
<p><img width="700" alt="Screenshot_12" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/d84fe56c-fa86-40b6-b4c7-be2872db86c3"></p>
<p><img width="25" alt="Screenshot_12" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/8c2351ee-2f8b-4982-9f4d-c8f2f2ee1e50">
All styles used the SASS preprocessor.</p>

<p><img width="25" alt="Screenshot_12" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/d6162b11-7ca0-482b-840c-840dfe31e6e1">
For styling I used basic bootstrap templates. At first I wrote my own design only on styles, but I decided to spend a day before the release and make it more beautiful :)</p>
<hr />

<p>I wrote the project for educational purposes, for myself, but it definitely won’t be my last.</p>

<p><h2>Thank you for checking it out! <img width="65" alt="Screenshot_12" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/7ae6e0a7-1a7a-4861-831f-747489021a12"></h2></p>
