import { gsap, Power2, Bounce, Circ } from 'gsap'

export function terminalAnimation() {
  const timeline = gsap.timeline()
  const timeline2 = gsap.timeline()
  const timeline3 = gsap.timeline()
  const timeline4 = gsap.timeline()

  timeline
    // Hide by gradually changing the white background to transparent
    .to('#overlay', {
      display: 'block',
      duration: 0,
    })
    .to('#overlay', {
      opacity: 1,
      duration: 0.3,
    })
    .to('#overlay', {
      opacity: 0,
      duration: 0.3,
      ease: Power2.easeOut,
    })
    .to('#overlay', {
      display: 'none',
      duration: 0,
      ease: Power2.easeOut,
    })
    // Show terminal
    .fromTo(
      '#terminal-wrap',
      {
        display: 'none',
      },
      {
        display: 'flex',
        duration: 0,
      },
      '-=0.3'
    )
    // Move terminal up
    .to(
      '#terminal',
      {
        bottom: '0px',
        duration: 1,
        ease: Power2.easeOut,
      },
      '-=0.4'
    )
    // Extend the loading bar
    .to(
      '#loading',
      {
        width: '124px',
        duration: 1,
        ease: Power2.easeOut,
      },
      '-=1'
    )
    // Show raindrops on the right and move down
    .to(
      '#right-rain',
      {
        display: 'block',
        duration: 0,
        ease: Power2.easeOut,
      },
      '-=1.8'
    )
    .to(
      '#right-rain',
      {
        bottom: '100px',
        duration: 1,
        ease: Power2.easeOut,
      },
      '-=1'
    )
    // Show raindrops on the left and move down
    .to(
      '#left-rain',
      {
        display: 'block',
        duration: 0,
        ease: Power2.easeOut,
      },
      '-=0.2'
    )
    .to(
      '#left-rain',
      {
        bottom: '20px',
        duration: 0.4,
        ease: Power2.easeOut,
      },
      '-=0.2'
    )
    // Scale up of terminal
    .to(
      '#terminal',
      {
        width: '105px',
        height: '80px',
        bottom: '0px',
        duration: 1,
        ease: Power2.easeOut,
      },
      '-=0.2'
    )
    // Show terminal of face from below
    .to(
      '#terminal #eye',
      {
        display: 'block',
        duration: 0,
        ease: Power2.easeOut,
      },
      '-=0.5'
    )
    .to(
      '#terminal #face',
      {
        bottom: '24px',
        duration: 1,
        ease: Power2.easeOut,
      },
      '-=0.5'
    )
    .to(
      '#terminal #mouth',
      {
        display: 'block',
        duration: 0,
        ease: Power2.easeOut,
      },
      '-=0.9'
    )
    // Stick out terminal tongue
    .to('#terminal #tongue', {
      display: 'block',
      duration: 0,
      ease: Power2.easeOut,
    })
    .to('#terminal #tongue', {
      height: '9px',
      duration: 0.2,
      ease: Power2.easeOut,
    })
    // Move the right raindrop down to hide it
    .to(
      '#right-rain',
      {
        bottom: '60px',
        duration: 1,
        ease: Power2.easeOut,
      },
      '-=0.8'
    )
    .to(
      '#right-rain',
      {
        display: 'none',
        duration: 0,
        ease: Power2.easeOut,
      },
      '-=0.8'
    )
    // Show umbrella and rotate to 0 degrees
    .to(
      '#umbrella',
      {
        display: 'block',
        duration: 0,
        ease: Power2.easeOut,
      },
      '-=1'
    )
    .to(
      '#umbrella',
      {
        bottom: '20px',
        right: '20px',
        transform: 'rotate(0deg)',
        duration: 1,
        ease: Power2.easeOut,
      },
      '-=1'
    )
    // Move the left raindrop down to hide it
    .to(
      '#left-rain',
      {
        bottom: '-10px',
        duration: 0.5,
        ease: Power2.easeOut,
      },
      '-=0.8'
    )
    .to(
      '#left-rain',
      {
        display: 'none',
        duration: 0,
        ease: Power2.easeOut,
      },
      '-=0.6'
    )
    // Move the umbrella down
    .to('#umbrella', {
      bottom: '0px',
      duration: 1,
      ease: Power2.easeOut,
    })

  timeline2
    // Bouncing the letter "U"
    .to('#text-UindowOS #char-U', {
      display: 'block',
      delay: 2,
    })
    .fromTo(
      '#text-UindowOS #char-U',
      {
        'margin-top': '0px',
      },
      {
        'margin-top': '20px',
        transform: 'scale(1, 0.8)',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=0.2'
    )
    .to('#text-UindowOS #char-U', {
      'margin-top': '10px',
      transform: 'scale(1, 1)',
      duration: 0.4,
      ease: Power2.easeOut,
    })
    .to(
      '#text-UindowOS #char-U',
      {
        'margin-top': '20px',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=0.1'
    )
    // Bouncing the letter "i"
    .to(
      '#text-UindowOS #char-i',
      {
        display: 'block',
      },
      '-=1.2'
    )
    .fromTo(
      '#text-UindowOS #char-i',
      {
        'margin-top': '4px',
      },
      {
        'margin-top': '20px',
        transform: 'scale(1, 0.8)',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=1.1'
    )
    .to(
      '#text-UindowOS #char-i',
      {
        'margin-top': '10px',
        transform: 'scale(1, 1)',
        duration: 0.4,
        ease: Power2.easeOut,
      },
      '-=0.7'
    )
    .to(
      '#text-UindowOS #char-i',
      {
        'margin-top': '20px',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=0.3'
    )
    // Bouncing the letter "n"
    .to(
      '#text-UindowOS #char-n',
      {
        display: 'block',
      },
      '-=1.2'
    )
    .fromTo(
      '#text-UindowOS #char-n',
      {
        'margin-top': '4px',
      },
      {
        'margin-top': '20px',
        transform: 'scale(1, 0.6)',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=1.1'
    )
    .to(
      '#text-UindowOS #char-n',
      {
        'margin-top': '10px',
        transform: 'scale(1, 1)',
        duration: 0.4,
        ease: Power2.easeOut,
      },
      '-=0.7'
    )
    .to(
      '#text-UindowOS #char-n',
      {
        'margin-top': '20px',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=0.3'
    )
    // Bouncing the letter "d"
    .to(
      '#text-UindowOS #char-d',
      {
        display: 'block',
      },
      '-=1.2'
    )
    .fromTo(
      '#text-UindowOS #char-d',
      {
        'margin-top': '4px',
      },
      {
        'margin-top': '20px',
        transform: 'scale(1, 0.8)',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=1.1'
    )
    .to(
      '#text-UindowOS #char-d',
      {
        'margin-top': '10px',
        transform: 'scale(1, 1)',
        duration: 0.4,
        ease: Power2.easeOut,
      },
      '-=0.7'
    )
    .to(
      '#text-UindowOS #char-d',
      {
        'margin-top': '20px',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=0.3'
    )
    // Bouncing the letter "o"
    .to(
      '#text-UindowOS #char-o',
      {
        display: 'block',
      },
      '-=1.2'
    )
    .fromTo(
      '#text-UindowOS #char-o',
      {
        'margin-top': '4px',
      },
      {
        'margin-top': '20px',
        transform: 'scale(1, 0.6)',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=1.1'
    )
    .to(
      '#text-UindowOS #char-o',
      {
        'margin-top': '10px',
        transform: 'scale(1, 1)',
        duration: 0.4,
        ease: Power2.easeOut,
      },
      '-=0.7'
    )
    .to(
      '#text-UindowOS #char-o',
      {
        'margin-top': '20px',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=0.3'
    )
    // Bouncing the letter "w"
    .to(
      '#text-UindowOS #char-w',
      {
        display: 'block',
      },
      '-=1.2'
    )
    .fromTo(
      '#text-UindowOS #char-w',
      {
        'margin-top': '4px',
      },
      {
        'margin-top': '20px',
        transform: 'scale(1, 0.6)',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=1.1'
    )
    .to(
      '#text-UindowOS #char-w',
      {
        'margin-top': '10px',
        transform: 'scale(1, 1)',
        duration: 0.4,
        ease: Power2.easeOut,
      },
      '-=0.7'
    )
    .to(
      '#text-UindowOS #char-w',
      {
        'margin-top': '20px',
        duration: 0.4,
        ease: Bounce.easeOut,
      },
      '-=0.3'
    )
    // Bouncing the letter "O"
    .fromTo(
      '#text-UindowOS #char-O',
      {
        right: '32px',
      },
      {
        right: '16px',
        duration: 0.5,
        ease: Power2.easeOut,
      },
      '-=0.6'
    )
    .to(
      '#text-UindowOS #char-O #path-0',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.6'
    )
    .to(
      '#text-UindowOS #char-O #path-1',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.55'
    )
    .to(
      '#text-UindowOS #char-O #path-2',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.5'
    )
    .to(
      '#text-UindowOS #char-O #path-3',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.45'
    )
    .to(
      '#text-UindowOS #char-O #path-4',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.4'
    )
    .to(
      '#text-UindowOS #char-O #path-5',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.35'
    )
    .to(
      '#text-UindowOS #char-O #path-6',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.3'
    )
    .to(
      '#text-UindowOS #char-O #path-7',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.3'
    )
    .to(
      '#text-UindowOS #char-O #path-8',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.25'
    )
    .to(
      '#text-UindowOS #char-O #path-9',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.2'
    )
    .to(
      '#text-UindowOS #char-O #path-10',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.15'
    )
    .to(
      '#text-UindowOS #char-O #path-11',
      0.05,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.1'
    )
    // Bouncing the letter "S"
    .to(
      '#text-UindowOS #char-S',
      0.5,
      {
        right: '0px',
        ease: Power2.easeOut,
      },
      '-=1'
    )
    .to(
      '#text-UindowOS #char-S #path-0',
      0.1,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=1.2'
    )
    .to(
      '#text-UindowOS #char-S #path-1',
      0.1,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=1.1'
    )
    .to(
      '#text-UindowOS #char-S #path-2',
      0.1,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=1.0'
    )
    .to(
      '#text-UindowOS #char-S #path-3',
      0.1,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.9'
    )
    .to(
      '#text-UindowOS #char-S #path-4',
      0.1,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.8'
    )
    .to(
      '#text-UindowOS #char-S #path-5',
      0.1,
      {
        visibility: 'visible',
        ease: Power2.easeOut,
      },
      '-=0.7'
    )

  timeline3.to(
    '#loading #loading-progress',
    3,
    {
      width: '100%',
      delay: 3,
      ease: Circ.easeOut,
    },
    '-=0.9'
  )

  timeline4
    // Blink the eyes of the terminal
    .to('#terminal #left-eye,#right-eye', { height: '12px', duration: 2 })
    .fromTo(
      '#terminal #left-eye,#right-eye',
      {
        height: '2px',
        duration: 0.2,
      },
      {
        height: '12px',
        duration: 0.8,
        ease: Power2.easeOut,
        repeat: 3,
      }
    )
    .fromTo(
      '#terminal #left-eye,#right-eye',
      {
        height: '2px',
        duration: 0.2,
      },
      {
        height: '12px',
        duration: 0.2,
        ease: Power2.easeOut,
      }
    )
    // Blur and shrink the entire terminal
    .fromTo(
      '#terminal-wrap',
      {
        filter: 'blur(0px)',
        transform: 'scale(1, 1)',
      },
      {
        filter: 'blur(4px)',
        transform: 'scale(0.4, 0.4)',
        duration: 0.5,
        ease: Power2.easeOut,
      }
    )
    // Hide the terminal by fading it out
    .fromTo(
      '#terminal-wrap',
      {
        display: 'flex',
        opacity: '1',
      },
      {
        display: 'none',
        opacity: '0',
        duration: 0.2,
        ease: Power2.easeOut,
      },
      '-=0.4'
    )
}
