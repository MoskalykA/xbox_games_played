# xbox_games_played

## A function to find the number of games played from a Gamertag

### Module installation

#### With NPM

```bash
npm i xbox_games_played
```

#### With Yarn

```bash
yarn add xbox_games_played
```

#### With PNPM

```bash
pnpm add xbox_games_played
```

### Example code

#### Importing the module

```js
const gamesPlayed = require("xbox_games_played");
```

#### Retrieving the number of games played

```js
gamesPlayed
  .search("hello")
  .then((gamesPlayed) => {
    console.log(gamesPlayed); // -> 0
  })
  .catch((reason) => {
    console.error(reason);
  });
```

#### Retrieving the number of games played with asynchronous code

```js
console.log(await gamesPlayed.search("hello")); // -> 0
```
