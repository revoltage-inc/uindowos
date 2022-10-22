import { gsap, Power2 } from 'gsap'

export function switchOnAnimation() {
  const timeline = gsap.timeline()

  timeline
    // 初期化
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
    // 蓋絵を回転しながら拡大する
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
    // 蓋絵の照度を明るくする
    .to(
      '#switch #thumbnail',
      {
        filter: 'brightness(100%)',
        duration: 0.4,
      },
      '-=0.4'
    )
}

export function switchOffAnimation() {
  const timeline = gsap.timeline()

  timeline
    // 初期化
    .to('#switch-wrap', {
      display: 'block',
      duration: 0.2,
    })
    // 蓋絵を縮小しながら回転させる
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
    // 蓋絵を非表示にする
    .to('#switch-wrap', {
      display: 'none',
      duration: 0,
    })
}
