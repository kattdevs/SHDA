'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 5)

    const ambient = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambient)

    // Key light — yellow/gold from palette
    const keyLight = new THREE.DirectionalLight(0xe0ce00, 3.5)
    keyLight.position.set(3, 4, 3)
    scene.add(keyLight)

    // Fill light — navy tint
    const fillLight = new THREE.DirectionalLight(0x0e202f, 1.5)
    fillLight.position.set(-3, -1, 2)
    scene.add(fillLight)

    // Rim light — white
    const rimLight = new THREE.DirectionalLight(0xffffff, 1)
    rimLight.position.set(0, -4, -3)
    scene.add(rimLight)

    // Main shape — gold from palette
    const material = new THREE.MeshStandardMaterial({
      color: 0xe0ce00,
      metalness: 0.85,
      roughness: 0.12,
    })

    const knotGeo = new THREE.TorusKnotGeometry(1, 0.32, 200, 32, 2, 3)
    const knot = new THREE.Mesh(knotGeo, material)
    scene.add(knot)

    // Orb — navy
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0x0e202f,
      metalness: 1,
      roughness: 0.1,
    })
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.18, 32, 32), orbMat)
    orb.position.set(1.8, 1.4, 0.5)
    scene.add(orb)

    // Cube — dark
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x0a0b0a,
      metalness: 0.85,
      roughness: 0.2,
    })
    const cube = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.22), cubeMat)
    cube.position.set(-1.9, -1.2, 0.3)
    scene.add(cube)

    const handleResize = () => {
      if (!canvas) return
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      const t = Date.now() * 0.001
      knot.rotation.x = t * 0.18
      knot.rotation.y = t * 0.26
      orb.position.y = 1.4 + Math.sin(t * 0.9) * 0.18
      orb.position.x = 1.8 + Math.cos(t * 0.6) * 0.1
      cube.rotation.x = t * 0.4
      cube.rotation.y = t * 0.3
      cube.position.y = -1.2 + Math.sin(t * 0.7 + 1) * 0.14
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return (
    <section className="min-h-screen bg-white flex flex-col">

      {/* Top — centered headline */}
      <div className="flex flex-col items-center justify-center pt-40 pb-20 px-6 text-center">
        <p
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.3em' }}
          className="text-xs uppercase mb-6 text-[#0E202F]/50"
        >
          SkillHub Digital Agency
        </p>

        <h1
          style={{ fontFamily: 'var(--font-playfair)', lineHeight: 1.05 }}
          className="text-[clamp(2.8rem,8vw,6.5rem)] font-bold text-[#0E202F] max-w-4xl"
        >
          Transforming Ideas Into{' '}
          <em
            style={{ fontStyle: 'italic', fontFamily: 'var(--font-playfair)' }}
            className="text-[#E0CE00]"
          >
            Digital Experiences
          </em>
        </h1>

        <div className="w-16 h-px bg-[#0E202F]/20 mt-10" />
      </div>

      {/* Bottom — bio far left, 3D far right */}
      <div className="flex-1 w-full flex flex-col md:flex-row items-center px-10 md:px-20 pb-24 gap-10">

        {/* Left — bio */}
        <div className="w-full md:w-[42%] flex flex-col gap-7">
       <p
  style={{ fontFamily: 'var(--font-dm-sans)', lineHeight: 1.85 }}
  className="text-[1rem] font-semibold text-[#0E202F]/70"
>
  SkillHub Digital is based out of Sandton, Johannesburg but our designs 
  and partnerships reach across Africa and beyond. We partner with ambitious 
  brands to craft strategy-led design, high-performance web builds, and 
  campaigns that actually convert. Our team of strategists, designers, and 
  developers is dedicated to working with forward-thinking organisations to 
  create custom digital solutions, compelling visual content, and brand 
  experiences that leave a mark.
</p>

         <Link
  href="/services"
  style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '0.05em' }}
  className="self-start text-base font-bold italic text-white bg-[#0E202F] px-7 py-3 hover:bg-[#E0CE00] hover:text-[#0E202F] transition-colors duration-300"
>
  Our Services
</Link>
        </div>

        {/* Spacer */}
        <div className="hidden md:block flex-1" />

        {/* Right — 3D canvas */}
        <div className="w-full md:w-[42%] aspect-square">
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
          />
        </div>

      </div>
    </section>
  )
}