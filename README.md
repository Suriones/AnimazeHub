<h1 align="center">Hi there, I'm <a target="_blank">Dmytro</a> 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">Frontend React developer from Ukraine</h3>

<p align="center">My project is a ready-made online platform for watching animated series, publishing news, detailed control and editing of any publications, communicating in comments, maintaining statistics on series and much more. The project interacts with Firebase.</p>

<h1><a href="https://github.com/Suriones/ReactApp_2023/blob/main/package.json">Technology</a></h1>
<p>I didn't use create-react-app and built the project from scratch.</p>
<ul>
  <li>HTML, Sass, JavaScript, React, Redux, Webpack</li>
  <li>Axios, Jest, Babel, gh-pages</li>
</ul>

<h1>Launch</h1>
<p>You can try the project simply by following the link: <a href="https://suriones.github.io/AnimazeHub/">https://suriones.github.io/AnimazeHub/</a></p>
<p>For a more detailed view, copy the repository from the main branch, and then enter the following commands into the console:</p>
<ul>
  <li>Install all dependencies: "npm install"</li>
  <li>Start webpack dev-server (8080 port): "npm run dev"</li>
  <li>URL: <a href="http://localhost:3000/">http://localhost:8080/</a></li>
</ul>
<p>The differences between the Dev version and the Deploy version are only the configuration of the webpack config:</p>
<img width="349" alt="image" src="https://github.com/Suriones/AnimazeHub/assets/111291999/cc12b2a4-0e50-460d-8592-b33e7ea6a18f">

<h1>Description</h1>
<p>My project allows users to watch animated series, register, communicate with other users through comments, and also vote for their personal favorite series to promote them in the rating feed. Users can also view brief main updates on the website in special news cards, and for more extensive news articles from the world of TV series there is a “Preview” section, where there is no character limit and there is an option to further customize the appearance of the article, with images, headings and more.</p>
<p><img width="1000" alt="Screenshot_1" src="https://github.com/Suriones/AnimazeHub/assets/111291999/ce83a820-c07b-43b5-b863-fa7d0342bad7"></p>
<p>Administrators, in turn, can add content to the website, news, reviews and video content.</p>
<p><img width="1000" alt="Screenshot_1" src="https://github.com/Suriones/AnimazeHub/assets/111291999/83819b7f-fbac-44b2-bc06-13c48ec25179"></p>

<p><img width="25" alt="Screenshot_1" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/085ca018-e490-4fd9-923b-c791a7258ec4">
Local storage stores all information entered by the user. Comment field, authentication field, all fields and any interaction. The database stores complete information on the content and all users, having the following form.
<p><img width="820" alt="image" src="https://github.com/Suriones/AnimazeHub/assets/111291999/5164818c-1ff0-482a-9f47-3e1fcfc725d3"></p>

<p><img width="25" alt="Screenshot_1" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/88c28633-c14c-49f9-aaf4-fe0b51e01026">
All my components use only information from props, without importing any external files. Only container components have dispatch and DAL functions, which are also transmitted through props.</p>
<p>Many components are wrapped in React.memo for optimization, and almost all pages include React.lazy functions. While all components are loading, a loading circle will pop up. All components are functional, hooks used: useEffect, useState, useParams, useRef.</p>
<img width="1920" alt="image" src="https://github.com/Suriones/AnimazeHub/assets/111291999/7033f3c4-1b64-400d-8e6c-39a68258dfa5">

<p><img width="25" alt="Screenshot_5" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/9630dea3-fe59-4ff3-8363-c0f88af4f291">
The comments component has a large amount of logic and is placed separately, so it can be used separately from the anime page. She just needs to pass the corresponding object through props. Comments on its use are left <a href="https://github.com/Suriones/AnimazeHub/blob/main/src/Components/ReusableComponents/CommentsBlock/CommentsBlockContainer.jsx">here.</a></p>
<p>The <a href="https://github.com/Suriones/AnimazeHub/blob/main/src/Components/ReusableComponents/CommentsBlock/CommentsBlockContainer.jsx">container component</a> is responsible for the logic, the <a href="https://github.com/Suriones/AnimazeHub/blob/main/src/Components/ReusableComponents/CommentsBlock/CommentsBlock.jsx">“dumb”</a> component is responsible for rendering.</p>

<p>Pages are divided into groups of 10, they can be switched, 5 comments are displayed at a time, and when a new one is sent, it is immediately re-rendered and the last page opens.</p>
<p>Users can respond to comments from other users by clicking on the nickname. Comments for each anime are stored in the anime object itself, but by passing the required object to the comments component, you can implement it on any other page.</p>
<img width="560" alt="image" src="https://github.com/Suriones/AnimazeHub/assets/111291999/e965f35c-92ad-4c1b-b612-6021f54d3cd5">
<p>There are no “artificial” elements on the site, made only for appearance. Each element fully performs its stated function, likes are taken into account in the database and each user has a personal list of liked anime, the recommendations page takes the top 5 anime by likes and offers them to all users. Any information displayed on the site is taken and processed from the database; there is almost no handwritten text in the code.</p>
<p>The site is also optimized for different user screen sizes other than mobile devices. The desktop design does not allow simple reduction and sorting to correctly display information for mobile phones; this requires a large-scale revision of the appearance.</p>
<img width="487" alt="image" src="https://github.com/Suriones/AnimazeHub/assets/111291999/12d6e8ee-9f0a-4a01-b892-b666429c74ea">

<p><img width="25" alt="Screenshot_12" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/8c2351ee-2f8b-4982-9f4d-c8f2f2ee1e50">
All styles used the SASS preprocessor.</p>

<p><h2>Thank you for checking it out! <img width="65" alt="Screenshot_12" src="https://github.com/Suriones/ReactApp_2023/assets/111291999/7ae6e0a7-1a7a-4861-831f-747489021a12"></h2></p>
