<!--
 * @Author: gm.chen
 * @Date: 2021-04-29 19:10:04
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-29 22:37:57
 * @Description: file content
 * @FilePath: /vue-demo/src/components/gmThree/index.vue
-->

<template>
  <div>
    <div id="container" />
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: 'GmThree',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      const container = document.getElementById('container')

      this.camera = new THREE.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new THREE.Scene()

      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
      const material = new THREE.MeshNormalMaterial()
      this.mesh = new THREE.Mesh(geometry, material)
      this.mesh.translateX(-0.8)
      this.scene.add(this.mesh)

      const geometry2 = new THREE.SphereGeometry(0.06, 0.24, 0.24)
      const material2 = new THREE.MeshNormalMaterial()
      const mesh2 = new THREE.Mesh(geometry2, material2)

      mesh2.translateX(0.4)
      this.scene.add(mesh2)

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function() {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    //   var controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)// 创建控件对象
    //   controls.addEventListener('change', this.render)
    }

  }
}
</script>
<style lang="scss" scoped>
#container {
    height: 600px;
  }

</style>
