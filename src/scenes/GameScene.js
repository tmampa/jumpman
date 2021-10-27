import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene
{
    constructor()
    {
        super('game-scene')
    }

    preload()
    {
        this.load.image('sky', '../public/assets/sky.png')

        this.load.image('ground', '../public/assets/platform.png')
        this.load.image('apple', '../public/assets/apple.png')
        this.load.image('bomb', '../public/assets/bomb.png')

        this.load.spritesheet('dude',
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        )
    }

    create()
    {
        this.add.image(400, 300, 'sky')
        // this.add.image(400, 300, 'apple')
        this.createPlatforms()
    }

    createPlatforms()
    {
        const platforms = this.physics.add.staticGroup()

        platforms.create(400, 568, 'ground').setScale(2).refreshBody()

        platforms.create(600, 400, 'ground')
        platforms.create(50, 250, 'ground')
        platforms.create(750, 220, 'ground')
    }
}