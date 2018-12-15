
//scene setup
//import THREE from './third_party/three.js';
var scene = new THREE.Scene();
	//scene.fog = new THREE.Fog(0x0000ff, 0,300);
var camera = new  THREE.PerspectiveCamera(75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000);
camera.position.z = 100;

var renderer = new THREE.WebGLRenderer();

renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.setSize(window.innerWidth,window.innerHeight);

const canvas = renderer.domElement;

//document.body.appendChild( renderer.domElement );

var m = new THREE.Object3D();


//postprocessing setup
var params = {
  projection: 'normal',
  background: false,
  exposure: 1.2,
  bloomStrength: 3,
  bloomThreshold: 0.85,
  bloomRadius: 1
};

var renderScene = new THREE.RenderPass( scene, camera );

var effectFXAA = new THREE.ShaderPass( THREE.FXAAShader );
effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth, 1 / window.innerHeight );

var bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 ); //1.0, 9, 0.5, 512);
bloomPass.renderToScreen = true;

var composer = new THREE.EffectComposer( renderer );
composer.setSize( window.innerWidth, window.innerHeight );
composer.addPass( renderScene );
composer.addPass( effectFXAA );
composer.addPass( bloomPass );

renderer.gammaInput = true;
renderer.gammaOutput = true;



//light setup
//scene.add( new THREE.AmbientLight( 0xffffff ) );

				scene.add( new THREE.AmbientLight( 0xffffff, 0.1 ) );

				var spotLight = new THREE.SpotLight( 0xffffff, 1 );
				spotLight.position.set( 50, 100, 50 );
				spotLight.angle = Math.PI / 7;
				spotLight.penumbra = 0.8;
				spotLight.castShadow = true;
				scene.add( spotLight );



//loaders
var imgTexture = new THREE.TextureLoader().load( "images/hm.jpg" );



//geometries

var sphere = new THREE.SphereBufferGeometry(10,32,32);
var sphereMaterial  = new THREE.MeshStandardMaterial( {
									map: imgTexture,

									//color: diffuseColor,
									metalness: 0.7,
									roughness: 0.3 ,
									//envMap: index % 2 === 0 ? null : hdrCubeRenderTarget.texture
								} );
var mesh = new THREE.Mesh(sphere,sphereMaterial);
scene.add (mesh);
mesh.receiveShadow=true;
mesh.castShadow=true;
var earth = mesh.clone();

earth.position.x +=15;
earth.position.y +=15;
earth.position.z +=-15;
scene.add (earth);


var geometry = new THREE.SphereBufferGeometry(10,32,32);
    var material = new THREE.MeshBasicMaterial( { color: new THREE.Color("white"),  transparent:true, opacity:1, side: THREE.DoubleSide } );
    var obj = new THREE.Mesh( geometry, material );
    obj.position.set( 20, 10, 10 );
    obj.rotateY(Math.PI/4);
    obj.receiveShadow = true;
    obj.castShadow = true;
  //  geomList.push(obj)
    scene .add(obj);




var geometry = new THREE.PlaneGeometry( window.innerWidth,window.innerHeight, 90,90 );
var material = new THREE.MeshLambertMaterial( { color: 0x333333, overdraw: 0.5 } );
var plane = new THREE.Mesh( geometry, material );
plane.position.z=-20
//scene.add( plane );

console.log(earth);


				renderer.toneMappingExposure = Math.pow( params.exposure, 4.0 );
//rendering loop
function Render(){


  renderer.toneMappingExposure = Math.pow( params.exposure, 4.0 );
mesh.rotation.x += 1/100;
composer.render();
//renderer.render(scene, camera);


}

export  {canvas,Render};
