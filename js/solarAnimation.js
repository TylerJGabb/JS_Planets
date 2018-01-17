var container = document.getElementById('animation-window');
var menu = document.getElementById('interactive-menu');


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(1000,1000);
container.appendChild(renderer.domElement);
var controls = new THREE.OrbitControls( camera );
controls.update();

//create the root of the solarsystem structure;
var root = new Star("Sun",0xffff00,10);
scene.add(root.mesh);


//create some planets and moons to play with in browser console
var p = new Planet("P1",0x0000ff,4,{xRadius : 20, yRadius : 10},240);
var m = new Moon("M1",0xffffff,1,{xRadius:10,yRadius:10},80);
scene.add(p.mesh);
scene.add(m.mesh);


//create a helper grid as an (0,0,1) plane normal reference
var size = 200;
var divisions = 20;
var majorColor = 0xff0000;//red
var gridColor = 0xffffff;//white

var grid = new THREE.GridHelper(size,divisions,majorColor,gridColor);
grid.rotation.x += Math.PI/2; //turn 90 degrees about x axis;
scene.add(grid);

//put the camera some place nice and look at the sun
camera.position.set(0,-50,50);
camera.lookAt(new THREE.Vector3(0,0,0));
controls.update();

function animate(){
    requestAnimationFrame( animate );
    root.update()//recursive
    controls.update();
    renderer.render( scene, camera );
}

menu.margin = container.margin;

animate();
