import { FiUser, FiLogOut } from 'react-icons/fi';
import { Container, User } from './styles';

export function Header() {
 
    return (
        <Container>
            <h1>Aula - useState</h1>

            <aside>
                <User>
                    <span>Olá </span>
                    <small>
                        <FiUser /> Perfil do usuário
                    </small>
                </User>
            </aside>

            <button type="button">
                <FiLogOut size={24} />
            </button>
        </Container>
    );
};