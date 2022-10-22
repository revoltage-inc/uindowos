import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'

export function BiosTextAnimation(timeline: gsap.core.Timeline) {
  gsap.registerPlugin(TextPlugin)

  timeline
    .to('#text1', {
      text: {
        value: '(C)Shigure Ui. Inc.<br>STREAM Date : 05/18/19 First Stream',
        delimiter: '',
      },
      duration: 0.1,
      ease: 'ease',
    })
    .to('#text2', {
      text: {
        value: 'Product Serial Number: 490UI0ILLSTV<br>CPU : UIntel(R) Core i16 CPU @149.0GHz',
        delimiter: '',
      },
      duration: 0.1,
      ease: 'ease',
    })
    .to('#text3', {
      text: {
        value:
          'Press F2 to run Setup (CTRL+E on Serial Console)<br>Press F12 if you want to boot from the network (CTRL+N on Searial Console)<br>Press F8 for SU SET |UP (CTRL+P on Rearial Console)',
        delimiter: '',
      },
      duration: 0.1,
      ease: 'ease',
    })
    .to('#text4', {
      text: {
        value: 'Pen Controllers ..',
        delimiter: '',
      },
      duration: 0.1,
      ease: 'ease',
    })
    .to('#done', {
      text: {
        value: 'Done.',
        delimiter: '',
      },
      duration: 0.1,
      ease: 'ease',
    })
    .to('#text5', {
      text: {
        value: 'Check Date 530490MB',
        delimiter: '',
      },
      duration: 0.1,
      ease: 'ease',
    })
    .to('#text6', {
      text: {
        value: 'Check Date 0MB<br>Check Date 490MB<br>Check Date 12345MB<br>Check Date 530490MB',
        delimiter: '',
      },
      duration: 0.1,
      ease: 'ease',
    })
    .to('#ok', {
      text: {
        value: 'OK',
        delimiter: '',
      },
      duration: 0.1,
      ease: 'ease',
    })
    .to('#text7', {
      text: {
        value: '(C)Shigure Ui. Inc.',
        delimiter: '',
      },
      duration: 0.1,
      ease: 'ease',
    })
    .to('#text8', {
      text: {
        value: 'https://www.youtube.com/channel/UCt30jJgChL8qeT9VPadidSw',
        delimiter: '',
      },
      duration: 0.1,
      ease: 'ease',
    })
    .to('#text9', {
      text: {
        value: 'Created By @UindowOS',
        delimiter: '',
      },
      duration: 0.1,
      ease: 'ease',
    })
}
