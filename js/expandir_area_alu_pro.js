const areaUsers = document.getElementById('bottonAreaUsers')


areaUsers.addEventListener('click', function () {
  const areaASerMostrada = document.getElementById('containerAreaUsers')
  const containerButton = document.getElementById('containerButton')
  const imgSeta = document.getElementById('imgSeta')

  if(areaASerMostrada.style.display == 'none') {
    areaASerMostrada.style.display = 'block'
    areaASerMostrada.style.color = '#FFF'
    areaASerMostrada.style.background = '#faa61a'
    areaASerMostrada.style.borderLeft = '4px solid #f48221'

    bottonAreaUsers.style.color = '#FFF'
    bottonAreaUsers.style.background = '#faa61a'
    bottonAreaUsers.style.borderLeft = '4px solid #f48221'

    imgSeta.style.transform = 'rotate(88deg)'
    imgSeta.style.transition = '0.2s'
  } else {
    areaASerMostrada.style.display = 'none'
    
    bottonAreaUsers.style.color = '#aa6f34'
    bottonAreaUsers.style.background = '#f9e423'
    bottonAreaUsers.style.borderLeft = 'none'

    imgSeta.style.transform = 'rotate(0deg)'
    imgSeta.style.transition = '0.4s'
  }
})