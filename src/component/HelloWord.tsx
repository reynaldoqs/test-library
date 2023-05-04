import styles from './HelloWord.module.css'

export interface IHelloWorld {
  text: string
}
export const Helloworld = ({ text }: IHelloWorld) => {
  return <div className={styles.text}>This is test text: {text}</div>
}
