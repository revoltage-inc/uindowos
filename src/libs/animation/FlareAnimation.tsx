import * as BABYLON from '@babylonjs/core/Legacy/legacy'
import { Engine } from '@babylonjs/core/Engines/engine'
import { Scene } from '@babylonjs/core/scene'
import { Vector3 } from '@babylonjs/core/Maths/math'
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'
import { PointLight } from '@babylonjs/core/Lights/pointLight'
import { VolumetricLightScatteringPostProcess } from '@babylonjs/core/PostProcesses/volumetricLightScatteringPostProcess'
import { Texture } from '@babylonjs/core/Materials/Textures'
import { Color4, Color3 } from '@babylonjs/core/Maths/math.color'
import { FireProceduralTexture } from '@babylonjs/procedural-textures'

export function FlareAnimation() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement

  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false,
  })
  const scene = new Scene(engine)
  scene.clearColor = new Color4(0, 0, 0, 0)
  // scene.debugLayer.show()

  const light = new PointLight('Omni', new Vector3(20, 20, 100), scene)

  const camera = new ArcRotateCamera('Camera', 0, 0, 20, Vector3.Zero(), scene)
  camera.attachControl(canvas, false)

  // var createRibbon = function (mesh: BABYLON.Mesh, paths: string | any[]) {
  //   var positions = []
  //   var indices = []
  //   var normals: never[] = []
  //   var uvs = []
  //   var us = []
  //   var vs = []
  //   var uTotalDistance = []
  //   var vTotalDistance = []
  //   var minlg
  //   var lg = []
  //   var idx = []

  //   let closeArray = false
  //   let closePath = false
  //   var offset = Math.floor(paths[0].length / 2)

  //   if (paths.length < 2) {
  //     var ar1 = []
  //     var ar2 = []
  //     for (var i = 0; i < paths[0].length - offset; i++) {
  //       ar1.push(paths[0][i])
  //       ar2.push(paths[0][i + offset])
  //     }
  //     paths = [ar1, ar2]
  //   }

  //   var idc = 0
  //   minlg = paths[0].length
  //   for (var p = 0; p < paths.length; p++) {
  //     uTotalDistance[p] = 0
  //     us[p] = [0]
  //     var path = paths[p]
  //     var l = path.length
  //     minlg = minlg < l ? minlg : l
  //     lg[p] = l
  //     idx[p] = idc
  //     var j = 0
  //     while (j < l) {
  //       positions.push(path[j].x, path[j].y, path[j].z)
  //       if (j > 0) {
  //         var vectlg = path[j].subtract(path[j - 1]).length()
  //         var dist: any = vectlg + uTotalDistance[p]
  //         us[p].push(dist)
  //         uTotalDistance[p] = dist
  //       }
  //       j++
  //     }
  //     if (closePath) {
  //       var vectlg = path[0].subtract(path[j - 1]).length()
  //       var dist = vectlg + uTotalDistance[p]
  //       uTotalDistance[p] = dist
  //     }
  //     idc += l
  //   }

  //   for (var i = 0; i < minlg; i++) {
  //     vTotalDistance[i] = 0
  //     vs[i] = [0]
  //     for (var p = 0; p < paths.length - 1; p++) {
  //       var path1 = paths[p]
  //       var path2 = paths[p + 1]
  //       var vectlg = path2[i].subtract(path1[i]).length()
  //       var dist = vectlg + vTotalDistance[i]
  //       vs[i].push(dist)
  //       vTotalDistance[i] = dist
  //     }
  //     if (closeArray) {
  //       var path1 = paths[p]
  //       var path2 = paths[0]
  //       var vectlg = path2[i].subtract(path1[i]).length()
  //       var dist = vectlg + vTotalDistance[i]
  //       vTotalDistance[i] = dist
  //     }
  //   }

  //   for (var p = 0; p < paths.length; p++) {
  //     for (var i = 0; i < minlg; i++) {
  //       var u = us[p][i] / uTotalDistance[p]
  //       var v = vs[i][p] / vTotalDistance[i]
  //       uvs.push(u, v)
  //     }
  //   }

  //   var p = 0
  //   var i = 0
  //   var l1 = lg[p] - 1
  //   var l2 = lg[p + 1] - 1
  //   var min = l1 < l2 ? l1 : l2
  //   var shft = idx[1] - idx[0]
  //   var path1nb = closeArray ? lg.length : lg.length - 1
  //   while (i <= min && p < path1nb) {
  //     var t1 = i
  //     var t2 = i + shft
  //     var t3 = i + 1
  //     var t4 = i + shft + 1

  //     indices.push(i, i + shft, i + 1)
  //     indices.push(i + shft + 1, i + 1, i + shft)
  //     i += 1
  //     if (i == min) {
  //       if (closePath) {
  //         indices.push(i, i + shft, idx[p])
  //         indices.push(idx[p] + shft, idx[p], i + shft)
  //         t3 = idx[p]
  //         t4 = idx[p] + shft
  //       }
  //       p++
  //       if (p == lg.length - 1) {
  //         shft = idx[0] - idx[p]
  //         l1 = lg[p] - 1
  //         l2 = lg[0] - 1
  //       } else {
  //         shft = idx[p + 1] - idx[p]
  //         l1 = lg[p] - 1
  //         l2 = lg[p + 1] - 1
  //       }

  //       i = idx[p]
  //       min = l1 < l2 ? l1 + i : l2 + i
  //     }
  //   }

  //   BABYLON.VertexData.ComputeNormals(positions, indices, normals)

  //   mesh.setVerticesData(BABYLON.VertexBuffer.PositionKind, positions, false)
  //   mesh.setVerticesData(BABYLON.VertexBuffer.NormalKind, normals, false)
  //   mesh.setIndices(indices)
  //   mesh.setVerticesData(BABYLON.VertexBuffer.UVKind, uvs, false)
  // }

  // var harmonic = function (m: number[], lat: number, long: number) {
  //   var pi = Math.PI
  //   var pi2 = Math.PI * 2
  //   var steplat = pi / lat
  //   var steplon = pi2 / long
  //   let paths = []

  //   for (var theta = 0; theta <= pi2; theta += steplon) {
  //     var path = []

  //     for (var phi = 0; phi <= pi; phi += steplat) {
  //       var r = 0
  //       r += Math.pow(Math.sin(m[0] * phi), m[1])
  //       r += Math.pow(Math.cos(m[2] * phi), m[3])
  //       r += Math.pow(Math.sin(m[4] * theta), m[5])
  //       r += Math.pow(Math.cos(m[6] * theta), m[7])

  //       var p = new BABYLON.Vector3(
  //         r * Math.sin(phi) * Math.cos(theta),
  //         r * Math.cos(phi),
  //         r * Math.sin(phi) * Math.sin(theta)
  //       )
  //       path.push(p)
  //     }
  //     paths.push(path)
  //   }
  //   paths.push(paths[0])

  //   return paths
  // }

  // var paths = harmonic(
  //   [
  //     3, 3, 3, 3, 3, 3, 3, 3,
  //     // (Math.random() as any).toFixed(1) * 10,
  //     // (Math.random() as any).toFixed(1) * 10,
  //     // (Math.random() as any).toFixed(1) * 10,
  //     // (Math.random() as any).toFixed(1) * 10,
  //     // (Math.random() as any).toFixed(1) * 10,
  //     // (Math.random() as any).toFixed(1) * 10,
  //     // (Math.random() as any).toFixed(1) * 10,
  //     // (Math.random() as any).toFixed(1) * 10,
  //   ],
  //   64,
  //   64
  // )

  var mesh = new BABYLON.Mesh('mesh', scene)
  mesh.scaling = new BABYLON.Vector3(1, 1, 1)
  BABYLON.Effect.ShadersStore['myFirePixelShader'] =
    '#ifdef GL_ES\r\n' +
    'precision highp float;\r\n' +
    '#endif\r\n' +
    'uniform float time;\r\n' +
    'uniform vec3 c1;\r\n' +
    'uniform vec3 c2;\r\n' +
    'uniform vec3 c3;\r\n' +
    'uniform vec3 c4;\r\n' +
    'uniform vec3 c5;\r\n' +
    'uniform vec3 c6;\r\n' +
    'uniform vec2 speed;\r\n' +
    'uniform float shift;\r\n' +
    'uniform float alphaThreshold;\r\n' +
    'varying vec2 vUV;\r\n' +
    'float rand(vec2 n) {\r\n' +
    '  return fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\r\n' +
    '}\r\n' +
    'float noise(vec2 n) {\r\n' +
    '  const vec2 d = vec2(0.0, 1.0);\r\n' +
    '  vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\r\n' +
    '  return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\r\n' +
    '}\r\n' +
    'float fbm(vec2 n) {\r\n' +
    '  float total = 0.0, amplitude = 1.0;\r\n' +
    '  for (int i = 0; i < 4; i++) {\r\n' +
    '    total += noise(n) * amplitude;\r\n' +
    '    n += n;\r\n' +
    '    amplitude *= .5;\r\n' +
    '  }\r\n' +
    '  return total;\r\n' +
    '}\r\n' +
    'void main() {\r\n' +
    '  vec2 p = vUV * 8.0;\r\n' +
    '  float q = fbm(p - time * .1);\r\n' +
    '  vec2 r = vec2(fbm(p + q + time * speed.x - p.x - p.y), fbm(p + q - time * speed.y));\r\n' +
    '  vec3 c = mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y);\r\n' +
    '  vec3 color = c * cos(shift * vUV.y);\r\n' +
    '  float luminance = dot(color.rgb, vec3(0.3, 0.59, 0.11));\r\n' +
    '  gl_FragColor = vec4(color, luminance * alphaThreshold + (1.0 - alphaThreshold));\r\n' +
    '}'

  var fireMaterial = new BABYLON.StandardMaterial('fontainSculptur2', scene)

  var fireTexture = new FireProceduralTexture('fire', 256, scene)
  fireTexture.level = 1
  fireTexture.uScale = 0.7
  fireTexture.vScale = 0.7
  fireTexture.setFragment('myFire')
  fireMaterial.diffuseColor = new BABYLON.Color3(
    0.1,
    0.1,
    0.1
    // Math.random() / 2,
    // Math.random() / 2,
    // Math.random() / 2
  )
  fireMaterial.diffuseTexture = fireTexture
  fireMaterial.alpha = 1
  fireMaterial.specularTexture = fireTexture
  fireMaterial.emissiveTexture = fireTexture
  fireMaterial.specularPower = 4
  fireMaterial.backFaceCulling = false

  fireTexture.fireColors = [
    new Color3(2.09, 1.07, 1.97),
    new Color3(2.09, 1.07, 1.97),
    new Color3(2.09, 1.07, 1.97),
    new Color3(2.09, 1.07, 1.97),
    new Color3(2.09, 1.07, 1.97),
    new Color3(2.09, 1.07, 1.97),
    // new BABYLON.Color3(Math.random(), Math.random(), Math.random()),
    // new BABYLON.Color3(Math.random(), Math.random(), Math.random()),
    // new BABYLON.Color3(Math.random(), Math.random(), Math.random()),
    // new BABYLON.Color3(Math.random(), Math.random(), Math.random()),
    // new BABYLON.Color3(Math.random(), Math.random(), Math.random()),
    // new BABYLON.Color3(Math.random(), Math.random(), Math.random()),
  ]

  // mesh.material = fireMaterial

  // createRibbon(mesh, paths)

  // const godrays = new VolumetricLightScatteringPostProcess(
  //   'godrays',
  //   1.0,
  //   camera,
  //   mesh,
  //   100,
  //   Texture.BILINEAR_SAMPLINGMODE,
  //   engine,
  //   false
  // ) as any

  const godrays = new VolumetricLightScatteringPostProcess(
    'godrays',
    1.0,
    camera,
    undefined,
    100,
    Texture.BILINEAR_SAMPLINGMODE,
    engine,
    false
  ) as any

  godrays.mesh.material.diffuseTexture = new Texture(
    'textures/flare.png',
    scene,
    true,
    false,
    Texture.BILINEAR_SAMPLINGMODE
  )
  godrays.mesh.material.diffuseTexture.hasAlpha = true
  godrays.mesh.position = new Vector3(0, 0, 0)
  godrays.mesh.scaling = new Vector3(0.5, 0.5, 0.5)

  light.position = godrays.mesh.position

  scene.registerBeforeRender(() => {
    if (godrays.mesh.scaling.x >= 20) {
      scene.unregisterBeforeRender
    }

    if (godrays.mesh.scaling.x < 2) {
      godrays.mesh.scaling.x += 0.02
      godrays.mesh.scaling.y += 0.02
      godrays.mesh.scaling.z += 0.02
    } else if (godrays.mesh.scaling.x < 10) {
      godrays.mesh.scaling.x += 0.4
      godrays.mesh.scaling.y += 0.4
      godrays.mesh.scaling.z += 0.4
    } else {
      godrays.mesh.scaling.x += 0.8
      godrays.mesh.scaling.y += 0.8
      godrays.mesh.scaling.z += 0.8
    }
  })

  engine.runRenderLoop(() => {
    scene.render()
  })

  window.addEventListener('resize', function () {
    engine.resize()
  })

  return new Promise((resolve) => {
    resolve(1)
  })
}
