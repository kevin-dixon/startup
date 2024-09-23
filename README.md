# Startup Project

## Mafia Game Companion

### Elevator Pitch
If you have played the game "Mafia", you know how troublesome the voting phase of the game can be. Each round, all current players need to vote on someone to remove from the game and it can get messy with just raising hands and tallying it up. In addition, it's useful to know in future rounds of the game which players chose who to remove. In this app, a game leader can host a game that contains all the players, they can initiate voting rounds, and players can select who they want to eliminate. In addition, players can view past votes to see how they played out.

### Design
![login_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Login_Page.png)
![host_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Host_Page.png)
![player_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Player_Page.png)

1.
![home_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Home_Page_Concept.png)
2.
![create_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Create_Account_Concept.png)
3.
![host_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Host_Main_Page_Concept.png)
4.
![host vote_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Host_Vote_Page_Concept.png)
5.
![player_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Player_Main_Page_Concept.png)
6.
![event_page](https://github.com/kevin-dixon/startup/blob/main/Concept/Event_Page_Concept.png)
7.
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
