import { Links, ListItem} from "./styles.js"

import { Link } from 'react-router-dom'

export function Menu(){

    return(
        <Links>

            <Link to="/">
                Home
            </Link>

            <Link to="/destino">
                Destinos com Rota
            </Link>

            <ListItem to="/destino">
                Destinos
            </ListItem>

            <ListItem target="_black" href="#">
                Ofertas
            </ListItem>

            <ListItem href="mailto:brunobandeirafernandes@gmail.com">
                Contato
            </ListItem>


            

        </Links>
    )
}