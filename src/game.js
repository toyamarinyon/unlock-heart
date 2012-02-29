// enchant 初期化(global 領域に enchant を追加)
enchant();

/**
 * ロード
 */
window.onload = function()
{
    // ゲームクラスを生成
    var game = new Game(640, 960);
    game.preload('../img/boy2.png', '../img/girl2.png');

    game.onload = function(){
        var scene = new Scene();

        var boy = new Sprite(220, 368);
        var isBoyTouch = false;
        var touchX = 0;
        var currentX = 0;
        var moveX = 0;
        var unlock = false;
        boy.image = game.assets['../img/boy2.png'];
        boy.x = 5;
        boy.y = 571;
        boy.addEventListener(Event.TOUCH_START, function(e){ 
            console.log('touch!');
            touchX = e.x;
            currentX = e.x;
            isBoyTouch = true;
        });
        boy.addEventListener(Event.TOUCH_MOVE, function(e){ 
            currentX = e.x;
            moveX = currentX - touchX;
            touchX = currentX;
            if(boy.x < 190){
                boy.x += moveX;
            }
            else{
                unlock = true;
            }

            if(boy.x > 190){
                boy.x = 190;
            }
        });
        boy.addEventListener(Event.TOUCH_END, function(e){ 
            console.log('remove!');
            touchX = e.x;
            isBoyTouch = false;
            console.log(isBoyTouch);
        });
        scene.addChild(boy);

        var girl = new Sprite(261, 368);
        girl.image = game.assets['../img/girl2.png'];
        girl.x = 403;
        girl.y = 571;
        scene.addChild(girl);

        scene.backgroundColor = 'rgb(253,  244,  219)';
        scene.addEventListener(Event.ENTER_FRAME,  function(){
            if(!isBoyTouch && !unlock && boy.x > 5){
                boy.x-=40;
            }
        });
        game.pushScene(scene);
    }

    // 背景表示
    game.scale = 1.0;
    game.start();
}
                                               
