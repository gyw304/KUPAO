MyGame.MainMenu = function(game) {

};
MyGame.MainMenu.prototype = {
    create: function() {
    	game.add.image(0,0,'MainMenu_bg');
        game.pep = game.add.sprite(game.world.centerX - 50,game.world.height - 350,'pep');
        game.pep.anchor.set(0.5,0.6);
        game.add.tween(game.pep.scale).from({x:.1,y:.1},800,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
        	game.add.tween(game.pep).to({y:game.world.height - 350 - 20},800,Phaser.Easing.Linear.None,true,0,-1,true)
        })
        
        game.startBtn = this.add.button(game.world.centerX,game.world.height - 150,'startBtn',function(){
       		document.getElementById('cover').style.display = 'block'
       	},this);
       	game.startBtn.anchor.set(0.5,1);
       	
       	
       	game.mypoilBtn = this.add.button(game.world.width - 20,game.world.height - 80,'mypoil_btn',function(){
       		game.poilCover.visible = true;
       		game.startBtn.visible = false;
       	},this);
       	game.mypoilBtn.anchor.set(1,0);
       	
       	
       	game.poilCover = game.add.graphics(0,0);
    	game.poilCover.beginFill(0x000000,.9);
        game.poilCover.drawRect(0, 0, 784,game.world.height);
        game.poilCover.endFill();
        game.poilCover.fixedToCamera = true;
        
        game.poilBox = game.add.sprite(game.poilCover.width/2,150,'poil_box');
        game.poilBox.anchor.set(0.5,0)
        game.poilCover.addChild(game.poilBox);
        
        game.poilText = game.add.text(0,300,'',{font: "36px Microsoft YaHei", fill: "#ffffff",align:'center'});
        game.poilText.anchor.set(0.5);
        game.poilBox.addChild(game.poilText);
        
        game.backIndexBtn = this.add.button(game.world.centerX,game.world.height - 150,'backIndex_btn',function(){
       		game.poilCover.visible = false;
       		game.startBtn.visible = true;
       	},this);
       	game.backIndexBtn.anchor.set(0.5,1);
       	
       	game.poilCover.addChild(game.backIndexBtn)
        
        
        if(user.ispoil)
        {
        	game.poilText.setText(user.poil)
        }
        else
        {
        	game.poilText.setText('����δ��Ľ�Ʒ')
        }
        
        game.poilCover.visible = false
       	
        
        GameUI.cutscenes()
    }
};

