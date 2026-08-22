import './styles/global.css';
import './styles/theme.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

export default function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form'>
          <div className='formRow'>
            <DefaultInput
              type='text'
              id='task'
              textLabel='Atividade'
              placeholder='Digite sua atividade'
              value='Estudar React'
              disabled
            />
          </div>
          <div className='formRow'>
            <p>Descrição da tarefa</p>
          </div>
          <div className='formRow'>
            <p>Cliclos</p>
            <p>0 0 0 0 0 0</p>
          </div>
          <div className='formRow'>
            <button type='submit'>Iniciar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
