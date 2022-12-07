/*export default class Player extends Phaser.Physics.Matter.Sprite{
    constructor(data){
        let{scene,x,y,texture} = data;
        super(scene.matter.world,x,y,texture);
        this.scene.add.existing(this);

        const{Body,Bodies}=Phaser.Physics.Matter.Matter;
        var playCollider = Bodies.circle(this.x, this.y, 20, {isSensor:false,label:'playCollider'});
        var playSensor = Bodies.circle(this.x, this.y, 40, {isSensor:true,label:'playSensor'});
        const compoundBody = Body.create({
            parts:[playCollider,playSensor],
            frictionAir: 0.40
        })
        this.setExistingBody(compoundBody);
        this.setFixedRotation();
    }
    static preload(scene){
        scene.load.atlas('little_name', 'myImg/little_name.png', 'myImg/little_name_atlas.json');
        scene.load.animation('little_name_anim', 'myImg/little_name_anim.json');
        //let imgUP = scene.load.image('')
    }

    get velocity(){
        return this.body.velocity;
    }
    update(){
        const speed = 4;
        let playVelos = new Phaser.Math.Vector2();
        if(this.inputKeys.left.isDown){
            playVelos.x = -1;
        } else if(this.inputKeys.right.isDown){
            playVelos.x = 1;
        }
        if(this.inputKeys.up.isDown){
            playVelos.y = -1;
        } else if(this.inputKeys.down.isDown){
            playVelos.y = 1;
        }
        /*if(playVelos==up){

        }else if(playVelos==down){

        }


        playVelos.normalize();
        playVelos.scale(speed);
        this.setVelocity(playVelos.x, playVelos.y);
        
        this.anims.play('walk', true);

    }
}*/