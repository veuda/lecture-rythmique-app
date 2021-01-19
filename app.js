(function () {
  const images = document.querySelector('.images')
  const names = document.querySelector('.names')
  const btnReset = document.querySelector('.btn-reset')
  btnReset.addEventListener('click', setMesure)

  function setMesure () {
    const noires = document.querySelector('#noires').checked
    const croches = document.querySelector('#croches').checked
    images.innerHTML = ''
    names.innerHTML = ''

    const array = []

    if (noires) {
      array.push(
        {
          number: 1,
          name: 'Noire'
        },
        {
          number: 2,
          name: 'Shut'
        },
        {
          number: 1,
          name: 'Noire'
        },
        {
          number: 2,
          name: 'Shut'
        },
        {
          number: 1,
          name: 'Noire'
        },
        {
          number: 2,
          name: 'Shut'
        },
        {
          number: 1,
          name: 'Noire'
        },
        {
          number: 2,
          name: 'Shut'
        }
      )
    }

    if (croches) {
      array.push(
        {
          number: 3,
          name: 'Shut croche'
        },
        {
          number: 4,
          name: 'Deux croches'
        },
        {
          number: 3,
          name: 'Shut croche'
        },
        {
          number: 4,
          name: 'Deux croches'
        },
        {
          number: 3,
          name: 'Shut croche'
        },
        {
          number: 4,
          name: 'Deux croches'
        },
        {
          number: 3,
          name: 'Shut croche'
        },
        {
          number: 4,
          name: 'Deux croches'
        }
      )
    }

    const arrayShuffled = shuffle(array)

    arrayShuffled.slice(0, 4)
      .map(numero => (
        {
          img: './img/note-' + numero.number + '.jpg',
          name: numero.name
        }
      ))
      .forEach(item => {
        createImage(item)
      })

    function createImage(item) {
      const img = document.createElement('img')
      img.src = item.img
      images.appendChild(img)
      const nameDiv = document.createElement('div')
      nameDiv.innerHTML = item.name
      names.appendChild(nameDiv)
    }

    function shuffle(o) {
      for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };
  }

  setMesure()

})()


// <!DOCTYPE html>
// <html>
// <head>
// <title>Autoplay</title>
// <script src="JZZ.js"></script>
// <script src="JZZ.synth.Tiny.js"></script>
// <script src="JZZ.input.Kbd.js"></script>
// </head>

// <body>
// <h1>Autoplay</h1>

// <div id=piano></div>
// <button onclick='play();'>Play!</button>

// <script><!--
// JZZ.synth.Tiny.register('Web Audio');
// var piano = JZZ.input.Kbd({ at:'piano', active:false }).connect(JZZ().openMidiOut());

// function play() {
//   JZZ.util.iosSound();
//   piano.noteOn(0, 'C5', 120).wait(300).noteOff(0, 'C5')
//        .noteOn(0, 'E5', 100).wait(300).noteOff(0, 'E5')
//        .noteOn(0, 'G5', 100).wait(300).noteOff(0, 'G5')
//        .noteOn(0, 'C6', 120).wait(300).noteOff(0, 'C6')
//        .noteOn(0, 'G5', 100).wait(300).noteOff(0, 'G5')
//        .noteOn(0, 'E5', 100).wait(300).noteOff(0, 'E5')
//        .noteOn(0, 'C5', 120).wait(500).noteOff(0, 'C5');
// }
// --></script>

// </body>
// </html>
