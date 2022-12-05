import { gsap, Power2 } from 'gsap'

export const animateSwitchOn = () => {
  const timeline = gsap.timeline()

  timeline
    // Init
    .to('#switch-wrap', {
      display: 'block',
      duration: 0,
    })
    .to('#switch', {
      transform: 'scale(0.5) rotateY(90deg)',
      duration: 0,
    })
    .to('#switch #thumbnail', {
      filter: 'brightness(75%)',
      duration: 0,
    })
    // Zoom in while rotating
    .to('#switch', {
      transform: 'scale(0.6) rotateY(80deg)',
      duration: 0.4,
      ease: Power2.easeOut,
    })
    .to(
      '#switch',
      {
        transform: 'scale(1) rotateY(0deg)',
        duration: 0.6,
        ease: Power2.easeOut,
      },
      '-=0.2'
    )
    // Brighten thumbnail
    .to(
      '#switch #thumbnail',
      {
        filter: 'brightness(100%)',
        duration: 0.4,
      },
      '-=0.4'
    )
}

export const animateSwitchOff = () => {
  const timeline = gsap.timeline()

  timeline
    // Init
    .to('#switch-wrap', {
      display: 'block',
      duration: 0.2,
    })
    // Rotate while shrinking
    .to('#switch', {
      'transform-origin': 'bottom right',
      duration: 0,
    })
    .to('#switch', {
      transform: 'scale(0.5) rotateY(-20deg)',
      opacity: 0.4,
      duration: 0.5,
      ease: Power2.easeOut,
    })
    .to(
      '#switch',
      {
        transform: 'scale(0.3) rotateY(-90deg)',
        opacity: 0,
        duration: 1,
        ease: Power2.easeOut,
      },
      '-=0.2'
    )
    // Hide thumbnail
    .to('#switch-wrap', {
      display: 'none',
      duration: 0,
    })
}
