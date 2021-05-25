import './style.css'

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


// Basic config
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75,
  window.innerWidth / window.innerHeight, 0.1,
  1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.setZ(30)
camera.position.setX(-3)

// rendering on screen
renderer.render(scene, camera)

// torus

// Geometery
const geometery = new THREE.TorusGeometry(
  10, 3, 16, 100
)
// material for geometery
const material = new THREE.MeshStandardMaterial(
  {
    color: 0xff6347,
    // wireframe: true
  } 
)
// mesh config
const torus = new THREE.Mesh(geometery, material)

scene.add(torus)


// lighting
const pointLight = new THREE.PointLight(
  0xffffff
)
const ambientLight = new THREE.AmbientLight(
  0xffffff
)

//positioning light
pointLight.position.set(5, 5, 5)
scene.add(pointLight, ambientLight)


// // Helpers
// const lightHelper = new THREE.PointLightHelper(
//   pointLight)
// const gridHelper = new THREE.GridHelper(
//   200, 50
// )
// scene.add(lightHelper, gridHelper)

// // controls
// const controls = new OrbitControls(camera,
// renderer.domElement)



// function to randomly add stars
function addStar() {
  const geometery = new
    THREE.SphereGeometry(
      0.25, 24, 24)
  
  const material = new
    THREE.MeshStandardMaterial({
      color: 0xffffff
    })
  
  const star = new THREE.Mesh(geometery,
    material)
  
  const [x, y, z] = Array(3)
    .fill()
    .map(
    () => THREE.MathUtils.randFloatSpread(100)
  )
  star.position.set(x, y, z)
  scene.add(star)
}
// Count of stars
Array(200).fill().forEach(addStar)


// Background
const spaceTexture = new
  THREE.TextureLoader().load('img/space.jpg')

scene.background = spaceTexture


// Avatar
const gautamTexture = new
  THREE.TextureLoader().load('img/gautam.jpg')

const gautam = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({
    map: gautamTexture
  })
)

scene.add(gautam)


// moon 

const moonTexture = new
  THREE.TextureLoader().load('img/moon.jpg')
const normalTexture = new
  THREE.TextureLoader().load('img/normal.jpg')

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture
  })
)

scene.add(moon)

moon.position.z = 30
moon.position.setX(-10)

gautam.position.z = -5
gautam.position.x = 2


function moveCamera() {
  const t =
    document.body.getBoundingClientRect().top
  moon.rotation.x += 0.05
  moon.rotation.y += 0.075
  moon.rotation.z += 0.05

  gautam.rotation.x += 0.01
  gautam.rotation.y += 0.01

  camera.position.z = t * -0.01
  camera.position.x = t * -0.0002
  camera.position.y = t * -0.0002
}

document.body.onscroll = moveCamera
moveCamera()

// a loop method for continously calling render
function animate() {
  requestAnimationFrame(animate)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01

  moon.rotation.x += 0.005

  // controls.update()

  // rendering on screen
  renderer.render(scene, camera)
}

animate()