var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 
 boyImg = loadAnimation("Jake1.png", "Jake2.png" , "jake3.png" , "jake4.PNG" , "jake5.png")
pathImg = loadAnimation("path.png")

}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path = createSprite (200,200,100,400)
path.scale=1.2;

path.addAnimation("pathImg", pathImg)
boy = createSprite (200,200,40,50)
boy.addAnimation("boyImg" , boyImg)

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy.scale=0.60;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

leftBoundary.visible = false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false
}

function draw() {
  background("black");
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
if(keyDown(mouseX)){

  boy.velocityX = 5

}
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita

boy.collide(leftBoundary)

boy.collide (rightBoundary)


  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
