//creating the scene

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



//add the cube
var geometry = new THREE.SphereGeometry(1,10,10);
var material = new THREE.MeshBasicMaterial({
    color : 0x00ff00,
    wireframe : true
});
var sphere = new THREE.Mesh(geometry,material);
scene.add(sphere);

camera.position.z = 10;
console.log(sphere.position);


function animate() {
    requestAnimationFrame( animate );
    sphere.rotation.x += 1/120;
    sphere.rotation.y += 1/120;
    renderer.render( scene, camera );
}
animate();