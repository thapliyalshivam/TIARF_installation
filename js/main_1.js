import THREE from './third_party/three.js';

var scene = new THREE.Scene();

	//scene.fog = new THREE.Fog(0x0000ff, 50,1000);
var camera = new  THREE.PerspectiveCamera(75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000);

camera.position.z = 100;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);



var m = new THREE.Object3D();

var geometry = new THREE.IcosahedronGeometry
 (20,2);
var material = new THREE.MeshNormalMaterial({wireframe:true});
// add the geometry to the mesh - and apply the material to it
var ico = new THREE.Mesh( geometry, material );

m.add(ico);


var geometry = new THREE.BoxGeometry( 11, 11, 11 );
var material =  new THREE.MeshLambertMaterial( { color: 0xffffff, overdraw: 0 } );
var cube = new THREE.Mesh( geometry, material );
m.cube=cube;
m.add(cube);
scene.add(m);
m.receiveShadow=true;



				scene.add( new THREE.AmbientLight( 0x00020 ) );
				var light1 = new THREE.PointLight( 0xff0040, 1, 90 );

light1.add(new THREE.Mesh(
  new THREE.SphereBufferGeometry( 0.5, 16, 8 ),
  new THREE.MeshBasicMaterial( { color: 0xff0040 } )));



scene.add( light1 );
			var	light2 = new THREE.PointLight( 0x0040ff, 1, 90 );
				scene.add( light2 );
			var	light3 = new THREE.PointLight( 0x80ff80, 1, 90 );
				scene.add( light3 );


var geometry = new THREE.PlaneGeometry( window.innerWidth,window.innerHeight, 90,90 );
var material = new THREE.MeshLambertMaterial( { color: 0xffffff, overdraw: 0.5 } );
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );
plane.position.y=0;


//scene.add( cube );
m.rotation.x = 100;
m.dynamic= true;
Render();
function Render(){


				var time = Date.now() * 0.0005;
				light1.position.x = Math.sin( time * 0.7 ) * 30;
				light1.position.y = Math.cos( time * 0.5 ) * 40;
				light1.position.z = Math.cos( time * 0.3 ) * 30;
				light2.position.x = Math.cos( time * 0.3 ) * 30;
				light2.position.y = Math.sin( time * 0.5 ) * 40;
				light2.position.z = Math.sin( time * 0.7 ) * 30;
				light3.position.x = Math.sin( time * 0.7 ) * 30;
				light3.position.y = Math.cos( time * 0.3 ) * 40;
				light3.position.z = Math.sin( time * 0.5 ) * 30;

var a =(Math.sin(Date.now()*0.004444)*.9)+2;
m.rotation.y += 0.01;
m.rotation.x += 0.01;
m.scale.set(a,a,a);
  //m.cube.scale.set(-a,-a,-a);
renderer.render(scene, camera);

requestAnimationFrame(Render);
}
export  renderer;
