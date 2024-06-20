
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Links</h1>
      <Link  href={"/exercicio/cadastrar"}><p className={styles.linkTemp}>Cadastrar Exercício</p></Link>
      <Link  href={"/exercicio/listar"}><p className={styles.linkTemp}>Listar Exercício</p></Link>
      <Link  href={"/plano/cadastro"}><p className={styles.linkTemp}>Listar Planos||</p></Link>
      <Link  href={"/plano/listar"}><p className={styles.linkTemp}>Cadastrar Planos</p></Link>
      <Link  href={"/treino/RecomendarTreino"}><p className={styles.linkTemp}>Recomendações de Treinos</p></Link>
      <Link  href={"/treino/listar"}><p className={styles.linkTemp}>Listar Treinos</p></Link>
      <Link  href={"/treino/InfoTreino"}><p className={styles.linkTemp}>Informações dos  Treinos</p></Link>
      <Link  href={"/treino/cadastro"}><p className={styles.linkTemp}>Cadastrar Treinos</p></Link>
      <Link  href={"/usuarios/cadastrar"}><p className={styles.linkTemp}>Cadastrar usuarios||</p></Link>
      <Link  href={"/usuarios/listar"}><p className={styles.linkTemp}>Listar usuarios</p></Link>
      <Link  href={"/usuarios/login"}><p className={styles.linkTemp}>Login||</p></Link>
      <Link  href={"/usuarios/recsenha"}><p className={styles.linkTemp}>Recuperação de senha||</p></Link>    
      <Link  href={"/inicial/telainicial"}><p className={styles.linkTemp}>telainicial</p></Link>    
    </div>
  );
}
