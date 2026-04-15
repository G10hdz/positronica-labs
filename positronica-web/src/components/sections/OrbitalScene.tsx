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
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Lighting — three-point setup for the iridescent glow
    scene.add(new AmbientLight(0xffffff, 0.4))

    const keyLight = new PointLight(0xffffff, 2.5)
    keyLight.position.set(4, 6, 5)
    scene.add(keyLight)

    const fillLight = new PointLight(0xa78bfa, 1.8) // soft purple fill
    fillLight.position.set(-5, -2, 3)
    scene.add(fillLight)

    const rimLight = new PointLight(0x7dd3fc, 2.0) // cyan rim from behind
    rimLight.position.set(0, -4, -6)
    scene.add(rimLight)

    const mainGroup = new Group()
    scene.add(mainGroup)

    // Central sphere — iridescent glass, near-white with soft inner glow
    const sphereMat = new MeshPhysicalMaterial({
      color: new Color(0xf5f0ff),
      emissive: new Color(0x9bcfff),
      emissiveIntensity: 0.35,
      transmission: 0.85,
      thickness: 0.8,
      roughness: 0.04,
      metalness: 0.0,
      transparent: true,
      opacity: 0.92,
      ior: 1.45,
    })
    const centralSphere = new Mesh(new SphereGeometry(1.2, 64, 64), sphereMat)
    mainGroup.add(centralSphere)

    const atomGroup = new Group()
    mainGroup.add(atomGroup)

    // Gold ring material — matches the Quantum Core mockup
    const ringMaterial = new MeshBasicMaterial({
      color: new Color(0xc9a84c),
      transparent: true,
      opacity: 0.55,
      side: DoubleSide,
    })

    const ringConfigs = [
      { x: Math.PI / 6,  y: Math.PI / 3,  z: Math.PI / 4,  color: 0xff85c8, speed: 0.020 }, // pink
      { x: -Math.PI / 4, y: Math.PI / 6,  z: -Math.PI / 3, color: 0x5bb8ff, speed: 0.015 }, // sky blue
      { x: Math.PI / 2,  y: 0,            z: Math.PI / 6,  color: 0x6df7c1, speed: 0.025 }, // mint
      { x: 0,            y: Math.PI / 2,  z: 0,            color: 0xffd166, speed: 0.010 }, // gold
    ]

    type Electron = {
      mesh: Mesh
      ring: Mesh
      angle: number
      speed: number
      radius: number
    }
    const electrons: Electron[] = []

    ringConfigs.forEach((cfg, i) => {
      const radius = 2.5 + i * 0.4
      const ring = new Mesh(new TorusGeometry(radius, 0.012, 16, 120), ringMaterial)
      ring.rotation.set(cfg.x, cfg.y, cfg.z)
      atomGroup.add(ring)

      const electronMat = new MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.color,
        emissiveIntensity: 0.8,
        roughness: 0.2,
        metalness: 0.1,
      })
      const electron = new Mesh(new SphereGeometry(0.14, 16, 16), electronMat)
      atomGroup.add(electron)
      electrons.push({
        mesh: electron,
        ring,
        angle: Math.random() * Math.PI * 2,
        speed: cfg.speed,
        radius,
      })
    })

    camera.position.z = 7

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

      atomGroup.rotation.y += 0.005
      atomGroup.rotation.z += 0.002

      electrons.forEach((el) => {
        el.angle += el.speed
        el.mesh.position.x = Math.cos(el.angle) * el.radius
        el.mesh.position.y = Math.sin(el.angle) * el.radius
        el.mesh.position.z = 0
        el.mesh.position.applyEuler(el.ring.rotation as unknown as Euler)
      })

      mainGroup.rotation.x += (mouseY * 0.4 - mainGroup.rotation.x) * 0.05
      mainGroup.rotation.y += (mouseX * 0.4 - mainGroup.rotation.y) * 0.05

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
