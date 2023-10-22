<template>
	<div id="container"></div>
</template>

<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


onMounted(() => {
	// Get the container element
	const container = document.getElementById('container')

	const scene = new THREE.Scene()

	// Camera
	const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000)
	camera.position.set(-4, 3, 6)

	// Renderer
	const renderer = new THREE.WebGLRenderer({ antialias: true })
	renderer.setSize(container.clientWidth, container.clientHeight)
	renderer.setPixelRatio(window.devicePixelRatio)
	container.appendChild(renderer.domElement)

	// Light
	const ambientLight = new THREE.AmbientLight(0x404040)
	scene.add(ambientLight)

	const pointLight = new THREE.PointLight(0xffffff, 1)
	pointLight.position.set(0, 0, 300)
	scene.add(pointLight)

	// Load Earth model
	const loader = new GLTFLoader()
	loader.load('./planet/scene.gltf', (gltf) => {
		scene.add(gltf.scene)
	})

	// Orbit controls
	const controls = new OrbitControls(camera, renderer.domElement)
	controls.enableZoom = false
	controls.autoRotate = true

	// Render loop
	const render = () => {
		controls.update()
		renderer.render(scene, camera)
		window.requestAnimationFrame(render)
	}

	render()
})

</script>
