import MainScene from "./MainScene.js";

const config = {
    width: 1000,
    height: 600,
    //backgroundColor: '#99999',
    type: Phaser.AUTO,
    parent: 'do_it',
    scene: [MainScene],
    scale:{
        zoom:1
    },
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity:{y:0}
        }
    }

}

new Phaser.Game(config);