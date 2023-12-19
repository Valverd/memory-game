import * as C from './styles'
import b7Svg from '../../svgs/b7.svg'
import {items} from '../../data/items'

export const GridItem = ({item, onClick}) => {
    return(
        <C.Container onClick={onClick} showBackground={item.permanentShown || item.shown}>
            {/* Caso o item esteja com o shown ou o permanent false, ira mostrar o icone padrao,
                se não ira mostrar o item real virado.    
            */}
            {(!item.permanentShown && !item.shown) &&
                <C.Icon src={b7Svg} alt="" opacity={.1}/>
            }
            {(item.permanentShown || item.shown) &&
                <C.Icon src={items[item.item].icon} alt={items[item.item].name} />
            }
        </C.Container>
    )
}