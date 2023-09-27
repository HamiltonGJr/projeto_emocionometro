const areaUsers = document.getElementById('bottonAreaUsers')

areaUsers.addEventListener('click', function () {
  const areaASerMostrada = document.getElementById('containerAreaUsers')

  if(areaASerMostrada.style.display == 'none') {
    areaASerMostrada.style.display = 'block'
  } else {
    areaASerMostrada.style.display = 'none'
  }
})