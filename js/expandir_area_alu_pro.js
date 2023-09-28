const buttonSelecionado = () => {
  const areaASerMostrada = document.getElementById('containerAreaUsers')
  const imgSeta = document.getElementById('imgSeta')
  const buttonSelecionado = document.getElementById('bottonAreaUsers')

  if(areaASerMostrada.style.display == 'none') {
    areaASerMostrada.style.display = 'block'
    areaASerMostrada.classList.add('containerButtonSelecionado')
    buttonSelecionado.classList.add('containerButtonSelecionado')

    imgSeta.classList.add('imgSetaBaixo')
  } else {
    areaASerMostrada.style.display = 'none'
    areaASerMostrada.classList.remove('containerButtonSelecionado')
    buttonSelecionado.classList.remove('containerButtonSelecionado')

    imgSeta.classList.remove('imgSetaBaixo')
  }
}