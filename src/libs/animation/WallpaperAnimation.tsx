import { gsap, Power0 } from 'gsap'

export function wallpaperAnimation() {
  const timeline = gsap.timeline()

  timeline.fromTo(
    '#wallpaper',
    {
      top: '0%',
    },
    {
      top: '-225%',
      duration: 60,
      repeat: -1,
      ease: Power0.easeInOut,
    }
  )
}
