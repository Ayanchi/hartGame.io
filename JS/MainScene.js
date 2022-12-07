/*import Player from "./Player.js";


export default class MainScene extends Phaser.Scene{
    constructor(){
        super('MainScene');
    }
    preload(){
        Player.preload(this);
        this.load.image('tiles','myImg/RPG Nature Tileset.png');
        this.load.tilemapTiledJSON('map','myImg/map.json');
    }
    create(){
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('RPG Nature Tileset','tiles',32,32,0,0);
        const layer1 = map.createStaticLayer('Слой тайлов 1',tileset,10,10);
        const layer2 = map.createStaticLayer('Tile Layer 2',tileset,10,10);
        layer1.setCollisionByProperty({collides:true});
        this.matter.world.convertTilemapLayer(layer2);


        this.player = new Player({scene:this, x:200, y:200, texture:'little_name'});

        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
    }
    update(){
        this.player.update();
    }
}*/