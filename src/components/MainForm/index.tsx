import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export const MainForm = () => {
  return (
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
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='red' />
      </div>
    </form>
  );
};
