

function setup() {
    createCanvas(400, 400)
    // background(220)

}

function draw() {

    // background(200);

    
}

function mousePressed() {
    background(200);
    makeACreature()
    fill(0);
    text(mouseX, 10, 10);
    text(mouseY, 100, 10);

}

function makeACreature() {
    let creatureColor = color(random(255), random(255), random(255))
    print(creatureColor)
    fill(creatureColor);
    line(171, 270, 118, 250)
    line(169, 319, 117, 337)
    line(230, 270, 280, 250)
    line(232, 320, 280, 337)
    ellipse(200, 300, 70, 120)
    ellipse(width/2, height/2, 100, 100)
    triangle(142, 119, 155, 181, 175, 156)
    triangle(250,119, 246, 181, 225, 156)
    fill(0);
    ellipse(180, 200, 30, 60)
    ellipse(220, 200, 30, 60)
    
    


}
