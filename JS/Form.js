class Form{
    constructor(){}
    display(){
        var title = createElement('h2');
        title.html("Racing Game");
        title.position(130,0);

        var input = createInput('Name');
        var button = createButton('Play');
        var greeting = createElement('h3');

        input.position(550,200);
        button.position(610,300);
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount++ ;
            player.index = playerCount;

            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello " + name);
            greeting.position(590,250);
        });
    }
}