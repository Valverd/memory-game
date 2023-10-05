import * as C from './styles'

export const InfoItem = ({label, value}) => {
    return (
        <C.Container>
            <C.Label>{label}</C.Label>
            <C.Value>{value}</C.Value>
        </C.Container>
    )
}