import './style.css'
import * as THREE from 'three';
import { OrbitControls } from './OrbitControls.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";




// Scene//////////////////////////////////////////////////////

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffcc99);
scene.fog = new THREE.FogExp2(0xDFE9F3, 0.0005);
//scene.fogg = new THREE.Fog(0xDFE9F3, 0.0, 500.0);



// Camera/////////////////////////////////////////////////////

const camera = new THREE.PerspectiveCamera(
  55, window.innerWidth / window.innerHeight, 0.1, 100000);
  //camera.position.setZ(90);
  //camera.rotation.set(3.14, -0.44, -3.14);
  camera.position.set( 0, 10, 100 );



// Renderer////////////////////////////////////////////////////


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#home-page')
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize',function(){
  renderer.setSize(window.innerWidth, window.innerHeight);
  SCREEN_WIDTH = window.innerWidth;
  SCREEN_HEIGHT = window.innerHeight;
  camera.aspect = window.innerWidth, window.innerHeight;
  camera.updateProjectionMatrix();

})



//Light/////////////////////////////////////////////////////////

const ambientLight = new THREE.AmbientLight(0xffffff,2);
ambientLight.castShadow = true;
scene.add(ambientLight);



//const pointLight = new THREE.PointLight(0xbf40BF);
//pointLight.position.set(-3,0,3);
//const pointLight2 = new THREE.PointLight(0xBC6280);
//pointLight2.position.set(3,2,15);

//const tLight = new THREE.DirectionalLight(0xffffff,1.5);
//tLight.castShadow = true;
//tLight.position.set(0, 0, 1)
//scene.add(tLight);


// GEOMETRY///////////////////////////////////////////////////////

const planegeometry = new THREE.PlaneGeometry( 300, 300 );
const planematerial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( planegeometry, planematerial );
//plane.rotation.x = 1.56;
plane.position.set(130,0,-2);
//scene.add( plane );

//const dodecGeometry = new THREE.DodecahedronGeometry();
//const shymaterial = new THREE.MeshStandardMaterial({
   //color:0x13438C,
   //metalness: 0.1,
   //roughness: 0.2,
   //shininess: 0.9,
   //transparent: true,
   //opacity: 0.7,
 //});
//const dodec = new THREE.Mesh(dodecGeometry, shymaterial);
//dodec.position.set(-1,1,40);
// Textured 3D OBJECT/////////////


//SKILLS//////////////////////////////////////////////////////////


const skillsfontloader = new FontLoader();
skillsfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('SKILLS',{
        font: droidFont,
        size:4.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const skillstextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    skillstextMesh.position.set(100,170,15);
    scene.add(skillstextMesh);
    
}  );

//HTML////////////////////

const htfontloader = new FontLoader();
htfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry(' HTML',{
        font: droidFont,
        size:3,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const httextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    httextMesh.position.set(15,130,15);
    //textMesh.rotation.x = -1.56;
    scene.add(httextMesh);
    
}  );

const atextureLoader = new THREE.TextureLoader();
const anormalTexture = atextureLoader.load('/assets/textures/hutm.png');
const atexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  roughness: 0.2,
  map: anormalTexture,
  //emissive: 0x9152cc,
});
const htmlGeometry = new THREE.BoxGeometry(16,16,16)
const html = new THREE.Mesh(htmlGeometry, atexturedMaterial);
html.position.set(60,130,15);

//CSS//////////////////////

const cssfontloader = new FontLoader();
cssfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry(' CSS',{
        font: droidFont,
        size:3,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const csstextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    csstextMesh.position.set(105,130,15);
    //textMesh.rotation.x = -1.56;
    scene.add(csstextMesh);
    
}  );

const btextureLoader = new THREE.TextureLoader();
const bnormalTexture = btextureLoader.load('/assets/textures/csss.png');
const btexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  roughness: 0.2,
  map: bnormalTexture,
  //emissive: 0x9152cc,
});
const cssGeometry = new THREE.BoxGeometry(16,16,16)
const css = new THREE.Mesh(cssGeometry, btexturedMaterial);
css.position.set(150,130,15);

// JAVASCRIPT//////////////

const jsfontloader = new FontLoader();
jsfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry(' Javascript',{
        font: droidFont,
        size:3,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const jstextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    jstextMesh.position.set(195,130,15);
    //textMesh.rotation.x = -1.56;
    scene.add(jstextMesh);
    
}  );
const ctextureLoader = new THREE.TextureLoader();
const cnormalTexture = ctextureLoader.load('/assets/textures/js.png');
const ctexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  roughness: 0.2,
  map: cnormalTexture,
  //emissive: 0x9152cc,
});
const jsGeometry = new THREE.BoxGeometry(16,16,16)
const js = new THREE.Mesh(jsGeometry, ctexturedMaterial);
js.position.set(240,130,15);

//THREEjs////////////////

const tjsfontloader = new FontLoader();
tjsfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry(' Threejs',{
        font: droidFont,
        size:3,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const tjstextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    tjstextMesh.position.set(15,95,15);
    //textMesh.rotation.x = -1.56;
    scene.add(tjstextMesh);
    
}  );

const dtextureLoader = new THREE.TextureLoader();
const dnormalTexture = dtextureLoader.load('/assets/textures/threejss.png');
const dtexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  roughness: 0.2,
  map: dnormalTexture,
  //emissive: 0x9152cc,
});
const thGeometry = new THREE.BoxGeometry(16,16,16)
const th = new THREE.Mesh(thGeometry, dtexturedMaterial);
th.position.set(60,95,15);

//PYTHON////////////////

const pyfontloader = new FontLoader();
pyfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry(' Python',{
        font: droidFont,
        size:3,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const pytextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    pytextMesh.position.set(105,95,15);
    //textMesh.rotation.x = -1.56;
    scene.add(pytextMesh);
    
}  );

const etextureLoader = new THREE.TextureLoader();
const enormalTexture = etextureLoader.load('/assets/textures/py.png');
const etexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  roughness: 0.2,
  map: enormalTexture,
  //emissive: 0x9152cc,
});
const pyGeometry = new THREE.BoxGeometry(16,16,16)
const py = new THREE.Mesh(pyGeometry, etexturedMaterial);
py.position.set(150,95,15);


//KIVY//////////////////

const kvfontloader = new FontLoader();
kvfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry(' Kivy',{
        font: droidFont,
        size:3,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const kvtextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    kvtextMesh.position.set(195,95,15);
    //textMesh.rotation.x = -1.56;
    scene.add(kvtextMesh);
    
}  );

const ftextureLoader = new THREE.TextureLoader();
const fnormalTexture = ftextureLoader.load('/assets/textures/kvv.png');
const ftexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  roughness: 0.2,
  map: fnormalTexture,
  //emissive: 0x9152cc,
});
const kvGeometry = new THREE.BoxGeometry(16,16,16)
const kv = new THREE.Mesh(kvGeometry, ftexturedMaterial);
kv.position.set(240,95,15);

//PYGAME///////////////


const pygfontloader = new FontLoader();
pygfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry(' Pygame',{
        font: droidFont,
        size:3,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const pygtextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    pygtextMesh.position.set(15,60,15);
    //textMesh.rotation.x = -1.56;
    scene.add(pygtextMesh);
    
}  );

const gtextureLoader = new THREE.TextureLoader();
const gnormalTexture = gtextureLoader.load('/assets/textures/pyg.png');
const gtexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  roughness: 0.2,
  map: gnormalTexture,
  //emissive: 0x9152cc,
});
const pygGeometry = new THREE.BoxGeometry(16,16,16)
const pyg = new THREE.Mesh(pygGeometry, gtexturedMaterial);
pyg.position.set(60,60,15);

//C#/////////////////

const csfontloader = new FontLoader();
csfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry(' C#',{
        font: droidFont,
        size:3,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const cstextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    cstextMesh.position.set(105,60,15);
    //textMesh.rotation.x = -1.56;
    scene.add(cstextMesh);
    
}  );

const htextureLoader = new THREE.TextureLoader();
const hnormalTexture = htextureLoader.load('/assets/textures/cds.png');
const htexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  roughness: 0.2,
  map: hnormalTexture,
  //emissive: 0x9152cc,
});
const csGeometry = new THREE.BoxGeometry(16,16,16)
const cs = new THREE.Mesh(csGeometry, htexturedMaterial);
cs.position.set(150,60,15);

//UNITY//////////////

const unifontloader = new FontLoader();
unifontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry(' Unity Engine',{
        font: droidFont,
        size:3,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const unitextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    unitextMesh.position.set(195,60,15);
    //textMesh.rotation.x = -1.56;
    scene.add(unitextMesh);
    
}  );

const itextureLoader = new THREE.TextureLoader();
const inormalTexture = itextureLoader.load('/assets/textures/unt.png');
const itexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  roughness: 0.2,
  map: inormalTexture,
  //emissive: 0x9152cc,
});
const uniGeometry = new THREE.BoxGeometry(16,16,16)
const uni = new THREE.Mesh(uniGeometry, itexturedMaterial);
uni.position.set(240,60,15);


//DART//////////////

//const jtextureLoader = new THREE.TextureLoader();
//const jnormalTexture = jtextureLoader.load('/assets/textures/drt.png');
//const jtexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  //roughness: 0.2,
  //map: jnormalTexture,
  //emissive: 0x9152cc,
//});
//const dtGeometry = new THREE.BoxGeometry(20,20,20)
//const dt = new THREE.Mesh(dtGeometry, jtexturedMaterial);
//dt.position.set(37,8,15);

//FLUTTER///////////

//const ktextureLoader = new THREE.TextureLoader();
//const knormalTexture = ktextureLoader.load('/assets/textures/fltt.png');
//const ktexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  //roughness: 0.2,
  //map: knormalTexture,
  //emissive: 0x9152cc,
//});
//const fltGeometry = new THREE.BoxGeometry(20,20,20)
//const flt = new THREE.Mesh(fltGeometry, ktexturedMaterial);
//flt.position.set(37,8,15);



// IMAGE//////////////

const imgtextureLoader = new THREE.TextureLoader();
const imgnormalTexture = imgtextureLoader.load('/assets/textures/MY_IMG.jpg');
const imgtexturedMaterial = new THREE.MeshStandardMaterial({
  //color: 0x13438C,
  //metalness: 0.1,
  //roughness: 0.2,
  map: imgnormalTexture,
  //emissive: 0x9152cc,
});
const imgGeometry = new THREE.BoxGeometry( 70, 70, 0 );
const img = new THREE.Mesh(imgGeometry, imgtexturedMaterial);
img.position.set(0,4,-1.93);
//img.rotation.x = -1.56;




// 3D TEXT




//INTRO//////////////////////////////////////////////////////////
const intfontloader = new FontLoader();
intfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
//intfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(json) => {

  //const jetBrainsFont = fonLoader.parse(json)  
    const textGeometry = new TextGeometry(" I'm a Game Developer with six years of experience in the\n tech industry, I have a strong commitment to collaboration\n and solutions-oriented problem-solving. I have usilized\n various tools, frameworks and programming languages to develop\n customer-focused Apps and designs. I'm Committed to high\n standards of software developement, user experience, usability\n and speed for multiple types of end-users. I Can also maintain\n customer satisfaction through effective customer support.",{
        font: droidFont,
        size:3,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial({color: 0x00ff00});
    const textMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    textMesh.position.set(37,8,-1);
    //textMesh.rotation.x = -1.56;
    scene.add(textMesh);
    
}  );
const int2fontloader = new FontLoader();
int2fontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry(' HEllo\n My Name is Nnamani Ikenna',{
        font: droidFont,
        size:4,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const textMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    textMesh.position.set(37,20,-1);
    //textMesh.rotation.x = -1.56;
    scene.add(textMesh);
    
}  );




//EXPERIENCE/////////////////////////////////////////////////////



const exfontloader = new FontLoader();
exfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('EXPERIENCE',{
        font: droidFont,
        size:4,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const extextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    extextMesh.position.set(250,15,-1);
    scene.add(extextMesh);
    
}  );
const ex1fontloader = new FontLoader();
ex1fontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('Tentacles Agency \n Designed and drove the vision and implementation of features and game systems\nDeveloped 3D, VR and AR application with unique features on android and web platforms in the unity engine. \n Performed gap analysis and developed optimized road maps to support strategic initiatives.\n Conducted manual testing to debug software programs and fixed bugs during development and in production.\n Worked on a team of developers, designers animators modelers and creative writers to build multiple applications. ',{
        font: droidFont,
        size:2.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const ex1textMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    ex1textMesh.position.set(221,0,-1);
    scene.add(ex1textMesh);
    
}  );
const ex2fontloader = new FontLoader();
ex2fontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('PinnacleBaseNIG \n Worked on a team as a supervisor on multiple LAN and Backup power(inverter and battery) connection projects. \nLed a team of developers and UI/UX designers to build multiple websites and Android applications.\nTrained over 50 staff members in internal web functions, like how to independently make minor updates and changes.',{
        font: droidFont,
        size:2.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const ex2textMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    ex2textMesh.position.set(221,-30,-1);
    scene.add(ex2textMesh);
    
}  );

//PROJECTS///////////////////////////////////////////////////////


const prjfontloader = new FontLoader();
prjfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('PROJECTS',{
        font: droidFont,
        size:5.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const prjtextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    prjtextMesh.position.set(125,-70,-1);
    scene.add(prjtextMesh);
    
}  );


const video9 = document.getElementById("video9");
const vidosoTexture = new THREE.VideoTexture(video9);
vidosoTexture.minFilter = THREE.LinearFilter;
vidosoTexture.magFilter = THREE.LinearFilter;

const vidosoMaterial = new THREE.MeshBasicMaterial({
  map: vidosoTexture,
  side: THREE.FrontSide,
  toneMapped: false,
});
const vidosoGeometry = new THREE.BoxGeometry( 25, 25, 0 );
const vidoso = new THREE.Mesh(vidosoGeometry, vidosoMaterial);
vidoso.position.set(250,-120,-1.93);
scene.add(vidoso);

const osofontloader = new FontLoader();
osofontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('OSO GA EME  game\n This Project is an endless runner \naction video game with a score system\n and an animated character that gradually\n increases speed and can jump or slide to\n evade objects. \nPygame,Python.',{
        font: droidFont,
        size:2.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const osotextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    osotextMesh.position.set(235,-145,-1);
    scene.add(osotextMesh);
    
}  );

const video8 = document.getElementById("video8");
const vidfallTexture = new THREE.VideoTexture(video8);
vidfallTexture.minFilter = THREE.LinearFilter;
vidfallTexture.magFilter = THREE.LinearFilter;

const vidfallMaterial = new THREE.MeshBasicMaterial({
  map: vidfallTexture,
  side: THREE.FrontSide,
  toneMapped: false,
});
const vidfallGeometry = new THREE.BoxGeometry( 25, 25, 0 );
const vidfall = new THREE.Mesh(vidfallGeometry, vidfallMaterial);
vidfall.position.set(175,-120,-1.93);
scene.add(vidfall);

const fallfontloader = new FontLoader();
fallfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('FALL ON YOU game\n This Project is a survival game with\n a score system and an animated character\n that moves left or right to evade\n objects falling from above. \nPygame,Python.',{
        font: droidFont,
        size:2.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const falltextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    falltextMesh.position.set(160,-145,-1);
    scene.add(falltextMesh);
    
}  );

const video7 = document.getElementById("video7");
const vidchapTexture = new THREE.VideoTexture(video7);
vidchapTexture.minFilter = THREE.LinearFilter;
vidchapTexture.magFilter = THREE.LinearFilter;

const vidchapMaterial = new THREE.MeshBasicMaterial({
  map: vidchapTexture,
  side: THREE.FrontSide,
  toneMapped: false,
});
const vidchapGeometry = new THREE.BoxGeometry( 25, 25, 0 );
const vidchap = new THREE.Mesh(vidchapGeometry, vidchapMaterial);
vidchap.position.set(100,-120,-1.93);
scene.add(vidchap);


const chapfontloader = new FontLoader();
chapfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('CHAPLET App\n This Project is a basic chaplet App with\n prayers and prayer counts. it contains\n the two major Roman Catholic prayers\n where the chaplet or a version of it\n is used. \nKivy,Python.',{
        font: droidFont,
        size:2.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const chaptextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    chaptextMesh.position.set(85,-145,-1);
    scene.add(chaptextMesh);
    
}  );

const video6 = document.getElementById("video6");
const vidplatTexture = new THREE.VideoTexture(video6);
vidplatTexture.minFilter = THREE.LinearFilter;
vidplatTexture.magFilter = THREE.LinearFilter;

const vidplatMaterial = new THREE.MeshBasicMaterial({
  map: vidplatTexture,
  side: THREE.FrontSide,
  toneMapped: false,
});
const vidplatGeometry = new THREE.BoxGeometry( 25, 25, 0 );
const vidplat = new THREE.Mesh(vidplatGeometry, vidplatMaterial);
vidplat.position.set(25,-120,-1.93);
scene.add(vidplat);


const platfontloader = new FontLoader();
platfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('PLATTY game\n This Project is a platformer game with an\n animated character, coin collection \nand a score system. \nPygame,Python.',{
        font: droidFont,
        size:2.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const plattextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    plattextMesh.position.set(10,-145,-1);
    scene.add(plattextMesh);
    
}  );

const video5 = document.getElementById("video5");
const vidtrayTexture = new THREE.VideoTexture(video5);
vidtrayTexture.minFilter = THREE.LinearFilter;
vidtrayTexture.magFilter = THREE.LinearFilter;

const vidtrayMaterial = new THREE.MeshBasicMaterial({
  map: vidtrayTexture,
  side: THREE.FrontSide,
  toneMapped: false,
});
const vidtrayGeometry = new THREE.BoxGeometry( 25, 50, 0 );
const vidtray = new THREE.Mesh(vidtrayGeometry, vidtrayMaterial);
vidtray.position.set(25,-205,-1.93);
scene.add(vidtray);

const trayfontloader = new FontLoader();
trayfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('TRAYS App\nThis project is an Augmented Reality\n app that tracks flat surfaces and can drop\n multiple preloaded 3D objects on them \n Unity,C#.',{
        font: droidFont,
        size:2.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const traytextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    traytextMesh.position.set(10,-240,-1);
    scene.add(traytextMesh);
    
}  );

const video1 = document.getElementById("video1");
const vidbivrTexture = new THREE.VideoTexture(video1);
vidbivrTexture.minFilter = THREE.LinearFilter;
vidbivrTexture.magFilter = THREE.LinearFilter;

const vidbivrMaterial = new THREE.MeshBasicMaterial({
  map: vidbivrTexture,
  side: THREE.FrontSide,
  toneMapped: false,
});
const vidbivrGeometry = new THREE.BoxGeometry( 25, 25, 0 );
const vidbivr = new THREE.Mesh(vidbivrGeometry, vidbivrMaterial);
vidbivr.position.set(175,-195,-1.93);
scene.add(vidbivr);

const bivrfontloader = new FontLoader();
bivrfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('BIVR App\n BIVR(BoatIsland VR) is a multiplayer Virtual\n Reality social platform with a basic avatar \nselection feature, a character controller \nwith two motion types, Interactibles in this\n application are synchronised over the \nnetwork.  \nUnity,C#.',{
        font: droidFont,
        size:2.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const bivrtextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    bivrtextMesh.position.set(160,-220,-1);
    scene.add(bivrtextMesh);
    
}  );


const video3 = document.getElementById("video3");
const vidportTexture = new THREE.VideoTexture(video3);
vidportTexture.minFilter = THREE.LinearFilter;
vidportTexture.magFilter = THREE.LinearFilter;

const vidportMaterial = new THREE.MeshBasicMaterial({
  map: vidportTexture,
  side: THREE.FrontSide,
  toneMapped: false,
});
const vidportGeometry = new THREE.BoxGeometry( 25, 50, 0 );
const vidport = new THREE.Mesh(vidportGeometry, vidportMaterial);
vidport.position.set(100,-205,-1.93);
scene.add(vidport);


const portfontloader = new FontLoader();
portfontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('PORTAL App\n  This project is an augmented reality app \nthat showcases the depth mask feature \n Unity,C#',{
        font: droidFont,
        size:2.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const porttextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    porttextMesh.position.set(85,-240,-1);
    scene.add(porttextMesh);
    
}  );


const video2 = document.getElementById("video2");
const vidbottleTexture = new THREE.VideoTexture(video2);
vidbottleTexture.minFilter = THREE.LinearFilter;
vidbottleTexture.magFilter = THREE.LinearFilter;

const vidbottleMaterial = new THREE.MeshBasicMaterial({
  map: vidbottleTexture,
  side: THREE.FrontSide,
  toneMapped: false,
});
const vidbottleGeometry = new THREE.BoxGeometry( 25, 50, 1 );
const vidbottle = new THREE.Mesh(vidbottleGeometry, vidbottleMaterial);
vidbottle.position.set(250,-205,-1.93);
scene.add(vidbottle);


const bottlefontloader = new FontLoader();
bottlefontloader.load('node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',(droidFont) => {
    const textGeometry = new TextGeometry('BOTTLE App\n This project is an augmented reality app,\n that showcases the cylinder target feature,\n multiple oblects are shown when the cylinder\n target is scanned.   \nUnity,C#',{
        font: droidFont,
        size:2.5,
        height: 2,
    })
    const textMaterial = new THREE.MeshNormalMaterial();
    const bottletextMesh = new THREE.Mesh(textGeometry,textMaterial);
    //textMesh.castShadow = true
    //textMesh.name = 'iti'
    bottletextMesh.position.set(235,-240,-1);
    scene.add(bottletextMesh);
    
}  );

//  Video/////////////////////////////////////////////////////////


const video4 = document.getElementById("video4");
const vidnormalTexture = new THREE.VideoTexture(video4);
vidnormalTexture.minFilter = THREE.LinearFilter;
vidnormalTexture.magFilter = THREE.LinearFilter;

const vidtexturedMaterial = new THREE.MeshBasicMaterial({
  map: vidnormalTexture,
  side: THREE.FrontSide,
  toneMapped: false,
});
const vidGeometry = new THREE.BoxGeometry(.16,.16,.1)
const vid = new THREE.Mesh(vidGeometry, vidtexturedMaterial);
vid.position.set(-10,130,15);

// BUTTONS//////////////////////////////////////////////////////


/* 

// First, create the 3D object that will represent the button. This could be a simple plane with a texture, or a more complex model.

// Create a geometry for the button using the THREE.PlaneGeometry class
const buttonGeometry = new THREE.PlaneGeometry(width, height); // width and height are the dimensions of the button

// Load a texture for the button using the THREE.TextureLoader class
const buttonTexture = new THREE.TextureLoader().load("./button.png"); // button.png is the image file for the button's texture

// Create a material for the button using the THREE.MeshBasicMaterial class
const buttonMaterial = new THREE.MeshBasicMaterial({ map: buttonTexture });

// Create a mesh for the button using the THREE.Mesh class
const button = new THREE.Mesh(buttonGeometry, buttonMaterial);

// Set the position of the button
button.position.set(235,-250,-1); // x, y, and z are the coordinates for the button's position

// Add the button to the scene
scene.add(button);

// Next, set up an event listener for the button.

// Create a raycaster to detect clicks on the button
const raycaster = new THREE.Raycaster();

// Set up a mouse event listener to update the raycaster on mouse move
document.addEventListener("mousemove", onMouseMove, false);

// Set up a mouse event listener to handle clicks on the button
document.addEventListener("mousedown", onMouseClick, false);

function onMouseMove(event) {
  // Update the raycaster's position to the mouse position
  raycaster.setFromCamera(new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  ), camera);
}

function onMouseClick(_event) {
  // Check if the raycaster intersects the button
  const intersects = raycaster.intersectObjects([button]);
  if (intersects.length > 0) {
    // The raycaster intersected the button, so the user clicked on the button.
    // You can now perform the desired action for the button click, such as navigating to a new URL.
    window.location.href = "https://nnamanichijindu.github.io/";
  }
}
 */

// Controls//////////////////////////////////////////////////////

const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = true;
controls.enableRotate = true;
controls.enableZoom = true;
controls.minDistance = 60;
controls.maxDistance = 300;
controls.enableDamping = true;
controls.dampingFactor = 0.025;
controls.panSpeed = 1.3;
controls.screenSpacePanning = true; 
controls.minPolarAngle = .5;
controls.maxPolarAngle = 3;
controls.minAzimuthAngle = 0;
controls.maxAzimuthAngle = 0;
//controls.minAzimuthAngle = 4.71239;
//controls.maxAzimuthAngle = 1.5708;
vidnormalTexture.needsUpdate = true;

// Animate//////////////////////////////////////////////////////


scene.add(vid,html,css,js,th,py,kv,pyg,cs,uni,
  img);

const animatedMeshes = []; 
const animate = function () {
    requestAnimationFrame(animate);
    animatedMeshes.map(mesh => mesh.rotation.y += 0.005)

    //dodec.rotation.x += 0.01;
    //dodec.rotation.z += 0.005;
    html.rotation.z += 0.01;
    html.rotation.y += 0.005;
    css.rotation.z += 0.01;
    css.rotation.y += 0.005;
    js.rotation.z += 0.01;
    js.rotation.y += 0.005;
    th.rotation.z += 0.01;
    th.rotation.y += 0.005;
    py.rotation.z += 0.01;
    py.rotation.y += 0.005;
    kv.rotation.z += 0.01;
    kv.rotation.y += 0.005;
    pyg.rotation.z += 0.01;
    pyg.rotation.y += 0.005;
    cs.rotation.z += 0.01;
    cs.rotation.y += 0.005;
    uni.rotation.z += 0.01;
    uni.rotation.y += 0.005;
    //dt.rotation.z += 0.01;
    //dt.rotation.y += 0.005;
    //flt.rotation.z += 0.01;
    //flt.rotation.y += 0.005;

    
    controls.update();
    

    renderer.render(scene, camera);
};

animate();
