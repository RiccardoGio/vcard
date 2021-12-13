  function toggleClass(){
    const list = document.getElementById('info-list')
    list.classList.toggle('hidden')

    const toggleButton = document.querySelector('.show-hide')
    toggleButton.classList.toggle('show')
  }

  // Define event handler
  const onPageLoad = (e) => {
    const showInfoButton = document.querySelector('.button.show-hide')

    showInfoButton.addEventListener('click', toggleClass)


    // const overlay = document.getElementById('overlay')
    // const closeOverlay = document.querySelectorAll('.close-overlay')
    // const openOverlay = document.querySelectorAll('.open-overlay')

    // const openOverlayHandler = open.bind(null, overlay)
    // const closeOverlayHandler = close.bind(null, overlay)

    // closeOverlay.forEach((element) => {
    //   element.addEventListener('click', closeOverlayHandler)
    // })

    // openOverlay.forEach((element) => {
    //   element.addEventListener('click', openOverlayHandler)
    // })
  }

  // Listen for `DOMContentLoaded` event
  document.addEventListener('DOMContentLoaded', onPageLoad)