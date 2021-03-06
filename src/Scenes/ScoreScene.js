import Phaser from 'phaser';
import config from '../config/config';
import Button from '../Objects/Button';

export default class ScoreScene extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  create() {
    this.gameID = 'Zl4d7IVkemOTTVg2fUdz';
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameID}/scores`)
      .then(response => response.json())
      .then(result => {
        result.result.sort((a, b) => b.score - a.score);
        result.result.forEach((element, index) => {
          if (index < 10) {
            this.addScore(element.user, element.score, index);
          }
        });
      });
    this.titleButton = new Button(this, config.width / 2, 500, 'blueButton1', 'blueButton2', 'Back', 'Title');
  }

  addScore(name, score, index) {
    this.add.text(300, 150 + index * 30, `${index + 1}. ${name}: ${score}`, { fontSize: '24px', fill: '#fff' });
  }
}