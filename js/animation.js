/*

    USE DAT.GUI for GUI MENU



*/





var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight - 100);
document.body.appendChild( renderer.domElement );
var controls = new THREE.OrbitControls( camera )
camera.position.set(0,0,100);
camera.lookAt(new THREE.Vector3(0,0,0));
controls.update();

var planets = [];
var root = createPlanet(
    "Sun",
    0xffff00,
    10,
    {xRadius : 0, yRadius : 0, zRadius : 0},
    0
)

function createPlanet(name,hexColor,radius,orbitalGeometry,framerPerRevolution){
    var p = new Planet(name,hexColor,radius,orbitalGeometry,framerPerRevolution);
    planets.push(p);
    scene.add(p.mesh);
    //update list of available planets;
    return p;
}

function addMoon(planet,moon){
    planet.addMoon(moon);
}

// var sun = new Planet(
//     "Sun",
//     0xffff00, //yellow
//     10,
//     {xRadius : 0, yRadius : 0, zRadius : 0},
//     0
// )

// var earth = new Planet(
//     "Earth",
//     0x0000ff,
//     3,
//     {xRadius : 50, yRadius : 50},
//     240
// )

// var moon = new Planet(
//     "Earth's Moon",
//     0xffffff,
//     1,
//     {xRadius : 5, yRadius : 2, zRadius : 5 },//orbit sorta tilted
//     60
// )

// var mars = new Planet(
//     "Mars",
//     0xa1251b,
//     2,
//     {xRadius : 80, yRadius : 80},
//     300
// )

// //lolololol
// var nibiru = new Planet(
//     "Nibiru",
//     0x551A8B,
//     7,
//     {xRadius : 100, yRadius : 30, zRadius : 100 },
//     550
// )

// var nibiruMoon = new Planet(
//     "Nibiru's Moon",
//     0xffffff,
//     3,
//     {xRadius: 12, zRadius : 12},
//     120
// )

// //nibiru.addMoon(nibiruMoon);

// var mercury = new Planet(
//     "Mercury",
//     0xa9a9a9,
//     2.5,
//     {xRadius : 25, yRadius : 25 },
//     160
// )

// earth.addMoon(moon);
// sun.addMoon(earth);
// sun.addMoon(mars);
// sun.addMoon(nibiru);
// sun.addMoon(mercury);
// scene.add(sun.mesh);
// scene.add(earth.mesh);
// scene.add(moon.mesh);
// scene.add(mars.mesh);
// scene.add(nibiru.mesh);
// scene.add(mercury.mesh);

console.log(root)

function animate(){
    requestAnimationFrame( animate );
    root.update()//recursive
    controls.update();
    renderer.render( scene, camera );
}
animate();


