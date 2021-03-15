class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.posiition(130,0);
        var input = createInput("Name");
        var button = createButton('Play');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value
            var greeting = createElement('h3');
            greeting.html("Hello" + name);
            greeting.posiion(130,160);
        })
    }
}