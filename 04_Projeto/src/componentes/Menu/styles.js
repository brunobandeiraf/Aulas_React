import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Links = styled.div`
    a + a {
        margin-left: 42px;
    }
`

// export const ListItem = styled.a`
//     color: black;
//     margin-bottom: 40px;
// `
export const ListItem = styled(Link)`
    color: black;
    margin-bottom: 40px;
`