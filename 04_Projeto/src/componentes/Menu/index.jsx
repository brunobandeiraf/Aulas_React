import { Link, ListItem} from "./styles.js"

export function Menu(){
    return(
        <Link>

            <ListItem target="_black" href="#">
                Destinos
            </ListItem>

            <ListItem target="_black" href="#">
                Ofertas
            </ListItem>

            <ListItem href="mailto:brunobandeirafernandes@gmail.com">
                Contato
            </ListItem>

        </Link>
    )
}