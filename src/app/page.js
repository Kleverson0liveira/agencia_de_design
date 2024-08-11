'use client';
import { useState } from 'react';
import styles from "./page.module.css";
import Topo from "@/componentes/Topo";
import Baner from '@/componentes/Baner';
import ExperienciaDeTrabalho from '@/componentes/ExperienciaDeTrabalho';
import Rodape from '@/componentes/Rodape';

export default function Home() {
  const [tema, setTema] = useState('Sun')
  const alteraTema = function ateraTema() {
    tema === 'Sun' ? setTema('Moon') : setTema('Sun')
  };

  return (
    <main>
      <Topo 
      trocaCor={alteraTema}
      Image={tema}
      />
      <Baner 
      Image={tema}
      />
      <ExperienciaDeTrabalho 
      Image={tema}
      />
      <Rodape 
      Image={tema}
      />
    </main>
  );
}
