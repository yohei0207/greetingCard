
let scene, camera, renderer, cube, loader, light, pointlight, controls;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

    pointLight = new THREE.PointLight(0xffffff, 1, 100 );
    pointLight.position.set(0, 10, 0);
    pointLight.castShadow = true;
    scene.add(pointLight);

    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x191970, 1)

    document.body.appendChild(renderer.domElement);

    
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
    cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);
    
    
    camera.position.z = 10;

    light = new THREE.AmbientLight(0xffffff);
    
    scene.add(light);

    
    
    //ゆきだるま
    loader = new THREE.GLTFLoader();
    loader.load('../models/snowman.gltf', function(gltf){
        scene.add(gltf.scene);
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.set(3, -5, 0);
        gltf.scene.rotation.set(0, 3, 0);

    })


    //クリスマスツリー
    loader2 = new THREE.GLTFLoader();
    loader2.load('../models/christmastree.gltf', function(gltf){
        scene.add(gltf.scene);
        gltf.scene.scale.set(3, 3, 3);
        gltf.scene.position.set(-3, -5, 0);
        gltf.scene.rotation.set(0, 3, 0);

    })

    controls = new THREE.OrbitControls(camera, document.body);

}




function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize);




init();
animate()
  
