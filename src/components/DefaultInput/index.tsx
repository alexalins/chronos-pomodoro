import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  textLabel: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ type, id, textLabel, ...inputProps }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{textLabel}</label>
      <input className={styles.input} type={type} id={id} {...inputProps} />
    </>
  );
}
