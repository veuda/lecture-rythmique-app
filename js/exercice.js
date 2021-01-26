(function () {
  const images = document.querySelector('.images')
  const names = document.querySelector('.names')
  const btnReset = document.querySelector('.btn-reset')
  btnReset.addEventListener('click', setMesure)

  function setMesure () {
    const noires = document.querySelector('#noires').checked
    const croches = document.querySelector('#croches').checked
    const doublesOne = document.querySelector('#doubles-1').checked
    const doublesTwo = document.querySelector('#doubles-2').checked
    const doublesThree = document.querySelector('#doubles-3').checked
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

    if (doublesOne) {
      array.push(
        {
          number: 5,
          name: 'Shut crooche'
        },
        {
          number: 6,
          name: 'Shuut double'
        },
        {
          number: 5,
          name: 'Shut crooche'
        },
        {
          number: 6,
          name: 'Shuut double'
        },
        {
          number: 5,
          name: 'Shut crooche'
        },
        {
          number: 6,
          name: 'Shuut double'
        },
        {
          number: 5,
          name: 'Shut crooche'
        },
        {
          number: 6,
          name: 'Shuut double'
        }
      )
    }

    if (doublesTwo) {
      array.push(
        {
          number: 7,
          name: 'Shut crooche'
        },
        {
          number: 8,
          name: 'Shuut double'
        },
        {
          number: 9,
          name: 'Shut crooche'
        },
        {
          number: 10,
          name: 'Shuut double'
        },
        {
          number: 11,
          name: "Crooche double"
        },
        {
          number: 7,
          name: 'Shut crooche'
        },
        {
          number: 8,
          name: 'Shuut double'
        },
        {
          number: 9,
          name: 'Shut crooche'
        },
        {
          number: 10,
          name: 'Shuut double'
        },
        {
          number: 11,
          name: "Crooche double"
        },
        {
          number: 7,
          name: 'Shut crooche'
        },
        {
          number: 8,
          name: 'Shuut double'
        },
        {
          number: 9,
          name: 'Shut crooche'
        },
        {
          number: 10,
          name: 'Shuut double'
        },
        {
          number: 11,
          name: "Crooche double"
        },
        {
          number: 7,
          name: 'Shut crooche'
        },
        {
          number: 8,
          name: 'Shuut double'
        },
        {
          number: 9,
          name: 'Shut crooche'
        },
        {
          number: 10,
          name: 'Shuut double'
        },
        {
          number: 11,
          name: "Crooche double"
        }
      )
    }

    if (doublesThree) {
      array.push(
        {
          number: 12,
          name: 'Shuut double'
        },
        {
          number: 13,
          name: 'Shut crooche'
        },
        {
          number: 14,
          name: 'Shuut double'
        },
        {
          number: 15,
          name: 'Shuut double'
        },
        {
          number: 16,
          name: 'Shuut double'
        },
        {
          number: 12,
          name: 'Shuut double'
        },
        {
          number: 13,
          name: 'Shut crooche'
        },
        {
          number: 14,
          name: 'Shuut double'
        },
        {
          number: 15,
          name: 'Shuut double'
        },
        {
          number: 16,
          name: 'Shuut double'
        },
        {
          number: 12,
          name: 'Shuut double'
        },
        {
          number: 13,
          name: 'Shut crooche'
        },
        {
          number: 14,
          name: 'Shuut double'
        },
        {
          number: 15,
          name: 'Shuut double'
        },
        {
          number: 16,
          name: 'Shuut double'
        },
        {
          number: 12,
          name: 'Shuut double'
        },
        {
          number: 13,
          name: 'Shut crooche'
        },
        {
          number: 14,
          name: 'Shuut double'
        },
        {
          number: 15,
          name: 'Shuut double'
        },
        {
          number: 16,
          name: 'Shuut double'
        }
      )
    }

    const arrayShuffled = shuffle(array)

    arrayShuffled
      .slice(0, 4)
      .map(numero => (
        {
          img: '../src/img/exercice-rythme/note-' + numero.number + '.png',
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
