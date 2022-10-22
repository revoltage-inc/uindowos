import { gsap, Power0, Power4 } from 'gsap'

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

export function iconAnimation() {
  const timeline = gsap.timeline({ delay: -0.6 })
  const timeline2 = gsap.timeline({ delay: -0.8 })

  timeline
    .addLabel('row')
    .fromTo(
      '#desktop #palette',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '52px',
        ease: Power4.easeInOut,
        duration: 2,
      },
      'row'
    )
    .fromTo(
      '#desktop #music',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '124px',
        ease: Power4.easeInOut,
        delay: 0.2,
        duration: 2,
      },
      'row'
    )
    .fromTo(
      '#desktop #stream',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '196px',
        ease: Power4.easeInOut,
        delay: 0.4,
        duration: 2,
      },
      'row'
    )
    .fromTo(
      '#desktop #folder',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '274px',
        ease: Power4.easeInOut,
        delay: 0.6,
        duration: 2,
      },
      'row'
    )
    .fromTo(
      '#desktop #tetris',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '340px',
        ease: Power4.easeInOut,
        delay: 0.8,
        duration: 2,
      },
      'row'
    )
    .fromTo(
      '#desktop #controller',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '412px',
        ease: Power4.easeInOut,
        delay: 1,
        duration: 2,
      },
      'row'
    )

  timeline2
    .addLabel('row')
    .fromTo(
      '#desktop #uiscord',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '52px',
        ease: Power4.easeInOut,
        duration: 2,
      },
      'row'
    )
    .fromTo(
      '#desktop #ui',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '124px',
        ease: Power4.easeInOut,
        delay: 0.2,
        duration: 2,
      },
      'row'
    )
    .fromTo(
      '#desktop #uine',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '196px',
        ease: Power4.easeInOut,
        delay: 0.4,
        duration: 2,
      },
      'row'
    )
    .fromTo(
      '#desktop #memo',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '268px',
        ease: Power4.easeInOut,
        delay: 0.6,
        duration: 2,
      },
      'row'
    )
    .fromTo(
      '#desktop #camera',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '340px',
        ease: Power4.easeInOut,
        delay: 0.8,
        duration: 2,
      },
      'row'
    )
    .fromTo(
      '#desktop #mail',
      {
        display: 'none',
        top: '100%',
      },
      {
        display: 'block',
        top: '412px',
        ease: Power4.easeInOut,
        delay: 1,
        duration: 2,
      },
      'row'
    )
}
