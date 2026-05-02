import { useEffect, useRef } from 'react'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  PointLight,
  Group,
  Mesh,
  SphereGeometry,
  MeshPhysicalMaterial,
  TorusGeometry,
  MeshStandardMaterial,
  Euler,
  DoubleSide,
  Color,
  MeshBasicMaterial,
  AdditiveBlending,
  BackSide,
} from 'three'

export function OrbitalScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new Scene()
    const camera = new PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = 2 // ACESFilmic
    renderer.toneMappingExposure = 1.45
    container.appendChild(renderer.domElement)

    scene.add(new AmbientLight(0xffffff, 0.75))

    const keyLight = new PointLight(0xfffaf5, 3.4)
    keyLight.position.set(3.8, 4.8, 6.2)
    scene.add(keyLight)

    const fillLight = new PointLight(0xcfd5ff, 2.3)
    fillLight.position.set(-4.5, -1.8, 4)
    scene.add(fillLight)

    const rimLight = new PointLight(0xffe7cd, 2.5)
    rimLight.position.set(0.4, -3.6, -5.5)
    scene.add(rimLight)

    const accentLight = new PointLight(0xf6b8ff, 1.35)
    accentLight.position.set(-3.4, 2.4, 2.5)
    scene.add(accentLight)

    const mainGroup = new Group()
    scene.add(mainGroup)

    const sphereMat = new MeshPhysicalMaterial({
      color: new Color(0xf8fbff),
      emissive: new Color(0xc9e4ff),
      emissiveIntensity: 0.18,
      transmission: 0.98,
      thickness: 1.35,
      roughness: 0.03,
      metalness: 0.02,
      transparent: true,
      opacity: 0.96,
      ior: 1.5,
      reflectivity: 0.45,
    })
    const centralSphere = new Mesh(new SphereGeometry(1.6, 96, 96), sphereMat)
    mainGroup.add(centralSphere)

    const innerCore = new Mesh(
      new SphereGeometry(1.02, 72, 72),
      new MeshBasicMaterial({
        color: new Color(0xfef7ee),
        transparent: true,
        opacity: 0.34,
      }),
    )
    mainGroup.add(innerCore)

    const aura = new Mesh(
      new SphereGeometry(2.12, 72, 72),
      new MeshBasicMaterial({
        color: new Color(0xd9e8ff),
        transparent: true,
        opacity: 0.18,
        side: BackSide,
        blending: AdditiveBlending,
      }),
    )
    mainGroup.add(aura)

    const atomGroup = new Group()
    mainGroup.add(atomGroup)

    const ringMaterial = new MeshBasicMaterial({
      color: new Color(0xe0bf7f),
      transparent: true,
      opacity: 0.62,
      side: DoubleSide,
    })

    const ringConfigs = [
      { x: Math.PI / 6, y: Math.PI / 4.2, z: Math.PI / 5, color: 0xf6b8ff, speed: 0.009, radius: 2.85, size: 0.16 },
      { x: -Math.PI / 4.8, y: Math.PI / 7, z: -Math.PI / 3.3, color: 0xbde0ff, speed: 0.006, radius: 3.22, size: 0.14 },
      { x: Math.PI / 2.3, y: 0, z: Math.PI / 8, color: 0xcdf7d6, speed: 0.011, radius: 3.58, size: 0.12 },
    ]

    type Electron = {
      mesh: Mesh
      ring: Mesh
      angle: number
      speed: number
      radius: number
    }
    const electrons: Electron[] = []

    ringConfigs.forEach((cfg) => {
      const ring = new Mesh(new TorusGeometry(cfg.radius, 0.014, 24, 180), ringMaterial)
      ring.rotation.set(cfg.x, cfg.y, cfg.z)
      atomGroup.add(ring)

      const electronMat = new MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.color,
        emissiveIntensity: 0.95,
        roughness: 0.16,
        metalness: 0.02,
      })
      const electron = new Mesh(new SphereGeometry(cfg.size, 22, 22), electronMat)
      atomGroup.add(electron)
      electrons.push({
        mesh: electron,
        ring,
        angle: Math.random() * Math.PI * 2,
        speed: cfg.speed,
        radius: cfg.radius,
      })
    })

    camera.position.z = 8.6

    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5
      mouseY = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('mousemove', onMouseMove)

    const onResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    let frame = 0
    let isVisible = true

    const animate = () => {
      frame = requestAnimationFrame(animate)
      if (!isVisible) return

      atomGroup.rotation.y += 0.0018
      atomGroup.rotation.z += 0.001

      electrons.forEach((el) => {
        el.angle += el.speed
        el.mesh.position.x = Math.cos(el.angle) * el.radius
        el.mesh.position.y = Math.sin(el.angle) * el.radius
        el.mesh.position.z = 0
        el.mesh.position.applyEuler(el.ring.rotation as unknown as Euler)
      })

      centralSphere.rotation.y += 0.0012
      aura.rotation.y -= 0.0008
      mainGroup.rotation.x += (mouseY * 0.24 - mainGroup.rotation.x) * 0.04
      mainGroup.rotation.y += (mouseX * 0.3 - mainGroup.rotation.y) * 0.04

      renderer.render(scene, camera)
    }
    animate()

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0 },
    )
    observer.observe(container)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
      scene.traverse((obj) => {
        if (obj instanceof Mesh) {
          obj.geometry.dispose()
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose())
          else obj.material.dispose()
        }
      })
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full cursor-pointer" aria-hidden />
}
