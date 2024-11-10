# Startup Project

## Site
- Startup deploy available at startup.mafiamystery.click
- Simon deploy available at simon.mafiamystery.click

## Mafia Game Companion

### Elevator Pitch
If you have played the game "Mafia", you know how troublesome the voting phase of the game can be. Each round, all current players need to vote on someone to remove from the game and it can get messy with just raising hands and tallying it up. In addition, it's useful to know in future rounds of the game which players chose who to remove. In this app, a game leader can host a game that contains all the players, they can initiate voting rounds, and players can select who they want to eliminate. In addition, players can view past votes to see how they played out.

### Design
![home_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Home_Page_Concept.png)
![create_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Create_Account_Concept.png)
![host_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Host_Main_Page_Concept.png)
![host vote_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Host_Vote_Page_Concept.png)
![player_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Player_Main_Page_Concept.png)
![event_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Event_Page_Concept.png)
![host edit_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Host_EditPlayers_Page_Concept.png)

### Key features
* Secure login over HTTPS
* Game session hosting
* Host can select specific vote settings
* Host can toggle timer limits on player voting
* Game log updates for players
* Ability to view past voting sessions
* Displaying all active players
* Host can remove/add players

### Technologies
* HTML - Will use HTML structure for application. Multiple HTML pages; Login, Host, Player, and Results.
* CSS - Application will format to fit web browser, phone, and other screen sizes. Will use a consistent color scheme and images.
* JavaScript - Button interactivity, list interactions, host settings for votes, etc.
* React - Will provide login, game session interactivity, displaying game log, and other routing and components.
* Web Service - Backend to provide the following:
    * Login
    * Game session hosting
    * Player list retreival
    * Choice submissions
    * Voter results
* Authentication - Logs in hosts and initiates a game. Authenticates players connecting via Game ID.
* Database - Stores game session IDs, player usernames, host settings, and game log events. Register and login users. Stores credentials and game IDs securely.
* WebSocket - After vote tallying, results are displayed to players.

## HTML deliverable
For this deliverable I built out the structure of my application using HTML.
- [x] HTML pages - Each page has HTML elements built to represent the final product or act as a placeholders for future deliverable implementation.
- [x] Links - The index page shows links to all pages that will be included in the app. Each page contains a link directing back to the index page (this link will be removed upon full application implementation) and appropriate links to other pages.
- [x] Text - Each page contains either example text or textual titles/labels.
- [x] Images - Each page contains a logo in the header, further images will be added as a future deliverable.
- [x] DB/Login - A login page with an HTML form is the placeholder for the database and login implementation. Player lists and Game ID represent some of the data that will be pulled from the database.
- [x] WebSocket - The vote timer button represents the realtime element that will be implemented.

## CSS deliverable
For this delivarable I added styling to my application using CSS, Bootstrap, and Sass.
- [x] Header, footer, and main content body - each page has a header, footer, and content marked with the main tag
- [x] Navigation elements - each page with navigation elements has them marked with the nav tag, links are colored and underlined
- [x] Responsive to window resizing - the application pages are styled to responsively size to match visuals on all common window sizes
- [x] Application elements - color scheme and spacing creates visually appealing elements
- [x] Application text content - example content is listed and placeholders marked with brackets, consistent font and heading typography for all pages
- [x] Application images - custom icons for the header, browser head, and footer are added with proper sizing

## React deliverable
For this delivarable I implemented React for page rendering and other functionality.
- [x] Vite - application is bundeled using vite
- [x] React components - header, footer, usernames, gameID, and other elements in mock by react components.
- [x] React router - page routing is completed by the application react router.
- [x] React hooks - authentication state of home page is implemented with react hooks.
