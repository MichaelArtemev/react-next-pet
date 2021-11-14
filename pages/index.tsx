import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Htag, Button, P }from "../components";

export default function Home():JSX.Element {
  return (
    <div className={styles.container}>
      <Htag tag="h1">text</Htag>
      <Button appearance="primary">Drop</Button>
      <P>text</P>
    </div>
  );
}
