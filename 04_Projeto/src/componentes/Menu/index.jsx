import { Links, ListItem} from "./styles.js"

// import { Link, useNavigate} from 'react-router-dom'

export function Menu(){

    // const navigate = useNavigate()

    // function handleDestiny(){
    //     navigate(`/details/`)
    // }

    // function handleHome(){
    //     navigate(`/`)
    // }

    return(
        <Links>

            {/* <ListItem target="_black" href="#" onClick={() => handleDestiny()}>
                Destinos
            </ListItem> */}

            <ListItem target="_black" href="#">
                Ofertas
            </ListItem>

            <ListItem href="mailto:brunobandeirafernandes@gmail.com">
                Contato
            </ListItem>

            {/* <ListItem href="mailto:brunobandeirafernandes@gmail.com">
                <Link to="/register">
                    Criar conta
                </Link>
            </ListItem> */}

            

        </Links>
    )
}