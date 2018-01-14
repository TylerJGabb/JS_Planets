class Planet {
    constructor(name,hexColor,radius,orbitalGeometry,framesPerRevolution){
        this.name = name;
        this.radius = radius;
        this.hexColor = hexColor; //is hex value duh
        this.moons = [];

        // {x-radius, y-radius, z-radius}
        this.orbitalGeometry = orbitalGeometry;
        //allows for eliptical orbit and out of plane orbit

        var geom = new THREE.SphereGeometry(radius,resolution,resolution);
        var mat = new THREE.MeshBasicMaterial({
            color : hexColor,
            wireframe : true
        });

        this.mesh = new THREE.Mesh(geom,mat);
        this.position = this.mesh.position;
        this.interval = 2*Math.PI/framesPerRevolution;
    }

    //adds a moon to orbit
    addMoon(moon){
        this.moons.push(moon);
    }

    update(){
        //this.do_updatey_things
        //for moon in moons:
            //moon.update()

    //this recursive structure allows moons which orbit moons which orbit....
    }

}


class Moon extends Planet {
    constructor(name,radius,color,mesh)
}