


class Player extends Phaser.Physics.Matter.Sprite{
    constructor(data) {
        let{scene,x,y,texture,frame} = data;

        super(scene.matter.world,x,y,texture,frame);
        this.scene.add.existing(this);

       /* const{Body,Bodies}=Phaser.Physics.Matter.Matter;
        var playCollider = Bodies.circle(this.x ,this.y, 50 , 80,{isSensor:false,label:'playCollider'});
        var playSensor = Bodies.circle(this.x,this.y, 80, {isSensor:true,label:'playSensor'});
        const compoundBody = Body.create({
            parts:[playCollider,playSensor],
            frictionAir: 0.40
        })
        this.setExistingBody(compoundBody);*/
        this.setFixedRotation();

    }
    static preload(scene){
        scene.load.atlas('little_name', 'myImg/little_name.png', 'myImg/little_name_atlas.json');
        scene.load.animation('little_name_anim', 'myImg/little_name_anim.json');
       
    }

    get velocity(){
        return this.body.velocity;
    }
    update(){
        const speed = 2;
        let playVelos = new Phaser.Math.Vector2();
        if(this.inputKeys.left.isDown && this.x>=26){
            playVelos.x = -0.1;
            this.anims.play('walk', true);
        } else if(this.inputKeys.right.isDown && this.x<=953){
            playVelos.x = 0.1;
            this.anims.play('walk', true);
        }
        if(this.inputKeys.up.isDown && this.y>=40){
            playVelos.y = -0.1;
            this.anims.play('behind', true);
        } else if(this.inputKeys.down.isDown && this.y<=558){
            playVelos.y = 0.1;
            this.anims.play('face', true);
        }
       
        playVelos.normalize();
        playVelos.scale(speed);
        this.setVelocity(playVelos.x, playVelos.y);
        
    }
}


class MainScene extends Phaser.Scene{
    constructor(){
        super('mainscene');
    }
    preload(){
        Player.preload(this);
        this.load.image('tiles','myImg/RPG Nature Tileset.png');
        this.load.tilemapTiledJSON('map','myImg/map.json');
    }
    create(){
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('RPG Nature Tileset','tiles',32,32,0,0);
        const layer1 = map.createLayer('Слой тайлов 1',tileset,10,10);
        const layer2 = map.createLayer('Tile Layer 2',tileset,10,10);
        layer2.setCollisionByProperty({collides:true});
        this.matter.world.convertTilemapLayer(layer2);


        this.player = new Player({scene:this, x:100, y:100, texture:'little_name'});
        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            top: Phaser.Input.Keyboard.KeyCodes.Z
        })
        
        //this.scene.stop('mainscene');
        //this.scene.remove('MainScene');
        //console.log(this.scene);
        //this.scene.add('darkscene');
        
    }
    update(){
        this.player.update();
    }
}

class DarkScene extends Phaser.Scene{
    constructor(){
        super('darkscene');
    }
    preload(){
       /// this.load.image('tiles','myImg/RPG Nature Tileset.png');
        //this.load.tilemapTiledJSON('map','myImg/darkmap.json');
    }
    create(){
       /* const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('RPG Nature Tileset','tiles',32,32,0,0);
        const layer1 = map.createLayer('Tile Layer 1', tileset,10,10);
        const layer2 = map.createLayer('Tile Layer 2',tileset,10,10);
        layer2.setCollisionByProperty({collides:true});
        this.matter.world.convertTilemapLayer(layer2);*/
    }
}


const config = {
    width: 1000,
    height: 600,
    backgroundColor: '#99999',
    type: Phaser.AUTO,
    parent: 'do_it',
    scene: [MainScene, DarkScene],
    scale:{
        zoom:1
    },
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            gravity:{y:0}
        }
    },
    plugins:{
        scene:[
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }

}

new Phaser.Game(config);