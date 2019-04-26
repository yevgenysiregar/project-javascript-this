const lfcPlayer = {
  name: "Mo Salah",
  number: "11",

  player() {
    console.log(
      `${this.name} is one of Liverpool FC player wearing the shirt number ${
        this.number
      }`
    );
  }
};
lfcPlayer.player();

const anotherLfcPlayer = {
  name: "Roberto Firmino",
  number: "9"
};
lfcPlayer.player.bind(anotherLfcPlayer)();

const lfcDefender = {
  playerName: "Virgil van Dijk",
  playerNumber: "4",

  playerAchievement(award) {
    console.log(
      `${
        this.playerName
      } is one of Liverpool FC player wearing the shirt number ${
        this.playerNumber
      } winning ${award} player award`
    );
  }
};

lfcDefender.playerAchievement.call(lfcDefender, 1);
lfcDefender.playerAchievement.apply(lfcDefender, [1]);
