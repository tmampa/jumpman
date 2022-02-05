# Video Game: Jumpman
Runner is an RPG video game built with [Phaser 3](https://phaser.io), an open source framework for Canvas and WebGL powered games. This game was inspired by [Phaser 3 tutorial: Endless Runner](http://phaser.io/tutorials/making-your-first-phaser-3-game/part1). The main objective was to create a custom role play game.

Assignment [link](https://www.notion.so/Platform-game-4a55a7d1fcc245bcb012c76814764712).

## Overview
Jumpman is a single player based game. The game is intended to determine how fast a player can collect enough stars. 
The game has infinite levels and the player is  expected to collect 6000 stars to escape.

![Runner](https://res.cloudinary.com/dlxmthxth/image/upload/v1635949520/jumpman-game/Screenshot_from_2021-11-03_16-22-17_qnrdqa.png)

![Runner](https://res.cloudinary.com/dlxmthxth/image/upload/v1635949520/jumpman-game/Screenshot_from_2021-11-03_16-24-57_izsihn.png)

![Runner](https://res.cloudinary.com/dlxmthxth/image/upload/v1635949520/jumpman-game/Screenshot_from_2021-11-03_16-21-30_vvihwb.png)

### Live [link](https://tmampa.github.io/jumpman/)

## Gameplay
###### Player
Player (Jumpman) uses the direction keys( up: to jump and move to upper blocks, down: to move down in a faster way, 
left: to move left, right: to move right). He continues on in quest to collect stars while scoring points in the 
process.

###### Enemy
Bombs are released from vertically into game. They will continue bounce.


## Design and Thinking
In the first day I went through the Phaser library tutorials and got a better feel of the framework. I then planned 
out my characters, scenes and music. Used Figma to design the UI buttons. I came up with all the mechanics and 
physics for the game and then took it in my own direction.

## Assets
Game sprites, images and sounds used in this game are from [Open Game Art](https://opengameart.org).
UI buttons and check boxes were design by me in Figma.

## Technologies used
* HTML5 and CSS
* JavaScript
* Phaser 3
* Webpack
* Eslint
* Babel
* Jest
* Github
* [Netlify](https://app.netlify.com/) for the deployment
* [Leaderboard API service](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3) for the leaderboard

## Future work
- Adding more levels
- Defence mechanisms

## Project Setup

Use the [git](https://git-scm.com/downloads) to clone the project to your local machine.
```sh
$ git clone https://github.com/tmampa/jumpman.git
```

Navigate to the extracted folder
```sh 
cd Jumpman
```

Install the dependencies and modules
```sh
$ npm install
```

### Usage
```sh
$ npm run start
```
This will open the app at port-8080. If it doesn't open, visit ```http://localhost:8080```

### Testing

```sh
$ npm run test
```

## Author

👤 **Tshephang Mampa**

- GitHub: [@tmampa](https://github.com/tmampa)
- Twitter: [@tshephangm_](https://twitter.com/tshephangm_)
- LinkedIn: [Tshephang Mampa](https://linkedin.com/in/tshephangmampa)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
You can open a new issue on the [issues page](https://github.com/tmampa/jumpman/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgements
- [Microverse](https://www.microverse.org/)
- [The Odin Project](https://www.theodinproject.com/)
- [Freecodecamp](http://freecodecamp.org/)
- [Phaser](https://phaser.io)
- [Open Game Art](https://opengameart.org)

## 📝 License

This project is licensed under MIT license - see [LICENSE](/LICENSE) for more details.
