import { useEffect, useState } from 'react'
import * as C from './App.styles'

import RestartIcon from './svgs/restart.svg'
import logo from './assets/devmemory_logo.png'

import { Buttom } from './components/Buttom'
import { InfoItem } from './components/InfoItem'
import { GridItem } from './components/GridItem'

import { items } from './data/items'
import { formatTimeElapsed } from './helpers/formatTimeElapsed'

const App = () => {

  const [playing, setPlaying] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [moveCount, setMoveCount] = useState(0)
  const [shownCount, setShownCount] = useState(0) //quantas cartas foram selecionadas, no caso o máximo são duas
  const [gridItems, setGridItems] = useState([])

  useEffect(() => resetAndCreateGrid(), [])

  useEffect(() => {
    const timer = setInterval(() => {
      if(playing) setTimeElapsed(timeElapsed + 1)
    }, 1000);

    return () => clearInterval(timer)

  }, [playing, timeElapsed])
  

  const resetAndCreateGrid = () => {
    //passo 1 - resetar o jogo
    setTimeElapsed(0)
    setMoveCount(0)
    setShownCount(0)


    //passo 2 - criar o grid
    let tempGrid = []
    for(let i = 0; i < (items.length * 2); i++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      })
    } // grid vazio criado


    //criando laço for 2 vezes para repetir de forma aleatória os números de 1 a 6, 2 vezes
    for(let i = 0; i < 2; i++){
      for (let w = 0; w < items.length; w++) {
        let position = -1
        while(position < 0 || tempGrid[position].item !== null) {
          position = Math.floor(Math.random() * (items.length * 2))
        }
        tempGrid[position].item = w
      } // adicionado os elementos no grid
    }
    setGridItems(tempGrid)

    //passo 3 - começar o jogo
    setPlaying(true)
  }

  const handleItemClick = (i) => {

  }

  return (
    <C.Container>

      <C.Info>
        <C.LogoLink>
          <img src={logo} width={200} alt='Logo' />
        </C.LogoLink>
        <C.InfoArea>
          <InfoItem label={'Tempo'} value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label={'Movimentos'} value={'0'} />
        </C.InfoArea>

      <Buttom label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid}/>
      </C.Info>


      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, i) => {
            {console.log(item)}
            return(
              <GridItem 
                key={i}
                item={item}
                onClick={() => {handleItemClick(i)}}
              />
            )
          })}
        </C.Grid>
      </C.GridArea>

    </C.Container>
  )
}

export default App