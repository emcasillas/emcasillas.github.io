let snowman= class{
    //instantiates a snowman
    constructor(name, height,x,z){
        this.name=name;
        this.height=height; //height is in snowballs
        this.x=x;
        this.z=z;
    }

    build(x,z){
        for( let i=0; i< this.height*1.1;i+=1.5){
            let sphere= BABYLON.MeshBuilder.CreateSphere('sphere', {diameter:3.4-i*0.75, segments:32},scene);
            sphere.position.y = -0.5+i;
            sphere.position.x = x;
            sphere.position.z = z;

           var mat = new BABYLON.StandardMaterial("mat", scene);
    mat.diffuseTexture = new BABYLON.Texture("https://patch.com/img/cdn20/users/22896833/20210201/092442/styles/patch_image/public/snow-generic-shutterstock-115233304___01092405948.jpg", scene);
    sphere.material=mat;
        }
    }

}

// let snowmannose=class{
//     constructor(nose, amount,l,o){
//         this.nose=nose;
//         this.amount=amount; 
//         this.l=l;
//         this.o=o;
//     }
//         build(l,o){
//             for( let i=0; i< this.height*1.1;i+=1.5){
//             let cone = BABYLON.MeshBuilder.CreateCylinder("cone", options, scene);
//             cone.position.y = -0.5+i;
//             cone.position.l = l;
//             cone.position.o = o;
//                 }
//             }

//     }




      var canvas = document.getElementById("renderCanvas");

        var startRenderLoop = function (engine, canvas) {
            engine.runRenderLoop(function () {
                if (sceneToRender && sceneToRender.activeCamera) {
                    sceneToRender.render();
                }
            });
        }

        var engine = null;
        var scene = null;
        var sceneToRender = null;
        var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
        var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);



    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(2, 2, 10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // let tgt = model_settings.position; 
    // camera.setTarget(BABYLON.Vector3(tgt.x, tgt.y, tgt.z));

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
    // var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    // skyboxMaterial.backFaceCulling = false;
    // skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
    // skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    // skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    // skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    // skybox.material = skyboxMaterial;
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 1;


    let frosty= new snowman('Frosty', 3, 0, 0);
    console.log(frosty);

 

        
        frosty.build(2,2);

 
            // let nose= new snowmannose('Nose', 1,0,0);
            // nose.build(2,2);
    return scene;
};
                window.initFunction = async function() {


                    
                    var asyncEngineCreation = async function() {
                        try {
                        return createDefaultEngine();
                        } catch(e) {
                        console.log("the available createEngine function failed. Creating the default engine instead");
                        return createDefaultEngine();
                        }
                    }

                    window.engine = await asyncEngineCreation();
        if (!engine) throw 'engine should not be null.';
        startRenderLoop(engine, canvas);
        window.scene = createScene();};
        initFunction().then(() => {sceneToRender = scene                    
        });

        // Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });

        