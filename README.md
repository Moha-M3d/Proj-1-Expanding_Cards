## Expanding Cards Project

### 1. The Project
This project is about creating `expanding cards`, which means all the cards will have an inactive state, in which they are all shrinked down to small width size, except the one that is active, that should be expanded to the expected normal width size. By using `JavaScript` the project should be `dynamic`, so that any hovered card should be expanded(active) and the others shrinked(inactive).

### 2. Set Up The Project WorkFlow
Initial Project Setup, which includes creating a `README.md` file, `index.html`, `assets/css/main.css` for the main css file, and a folder dedicated to project needed images `assets/images` 

### 3. The Project Styling & Responsiveness
I've styled the project layout using `flexbox`, which is a simple and straightforward approach to make all the inactive cards have the same shrinked width, and the one that is active should have a normal width. As for the responsiveness of the project I've switched the mode from `landscape` to `portrait mode` when the viewport width size is smaller. I achieved this switching the flex-direction `css` property from `row` to `column` and also I've made some changes to the cards in that `portrait mode`.

### 4. The Project Behavior 
I've added a little bit of `JavaScript` code so that the state of active can be transfered to any clicked card. I've made this working using the power of `event listeners(click event)` and the higher order function `forEach()`.