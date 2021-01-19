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
          img: './src/img/note-' + numero.number + '.jpg',
          name: numero.name
        }
      ))
      .forEach(item => {
        createMesure(item)
      })

    function createMesure(item) {
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
