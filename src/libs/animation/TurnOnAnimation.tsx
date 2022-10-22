import { gsap } from 'gsap'
import { Power2 } from 'gsap'

export function TurnOnAnimation(timeline: gsap.core.Timeline) {
  timeline
    .to('#circle-flare', {
      height: '200px',
      opacity: '1',
      duration: 0.1,
      ease: Power2.easeOut,
    })
    .to('#circle-flare', {
      height: '0px',
      opacity: '0',
      duration: 0.1,
      ease: Power2.easeOut,
    })
    .to(
      '#stick-flare',
      {
        width: '100%',
        opacity: '1',
        duration: 0.1,
        ease: Power2.easeOut,
      },
      '-=0.2'
    )
    .to('#stick-flare', {
      width: '75%',
      opacity: '0',
      duration: 0.1,
      ease: Power2.easeOut,
    })
}
