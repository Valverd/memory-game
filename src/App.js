import * as C from './App.styles'
import RestartIcon from './svgs/restart.svg'
import logo from './assets/devmemory_logo.png'
import { Buttom } from './components/Buttom'
import { InfoItem } from './components/InfoItem'

const App = () => {

  const resetAndCreateGrid = () => {

  }

  return (
    <C.Container>

      <C.Info>
        <C.LogoLink>
          <img src={logo} width={200} alt='Logo' />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label={'Tempo'} value={'00:00'} />
          <InfoItem label={'Movimentos'} value={'0'} />
        </C.InfoArea>

      <Buttom label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid}/>
      </C.Info>


      <C.GridArea>
        ...
      </C.GridArea>

    </C.Container>
  )
}

export default App