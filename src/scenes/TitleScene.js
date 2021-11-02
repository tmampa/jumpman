import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('title-scene');
  }

  create() {
    this.add.text(10, 10, 'Enter your name:', { font: '32px Courier', fill: '#ffffff' });

    const textEntry = this.add.text(10, 50, '', { font: '32px Courier', fill: '#ffff00' });

    this.input.keyboard.on('keydown', (event) => {
      if (event.keyCode === 8 && textEntry.text.length > 0) {
        textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
      } else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) {
        textEntry.text += event.key;
      }
    });

    this.input.keyboard.on('keyup', (event) => {
      if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.ENTER) {
        this.scene.start('game-scene');
      }
    });
  }
}
