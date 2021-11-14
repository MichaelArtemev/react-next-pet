import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Htag, Button, P, Rating }from "../components";
import { useState } from 'react';

export default function Home():JSX.Element {
  const [rating, setRating] = useState<number>(0);

  return (
    <div className={styles.container}>
      <Htag tag="h1">text</Htag>
      <Button appearance="primary">Drop</Button>
      <P>text</P>
      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
}
