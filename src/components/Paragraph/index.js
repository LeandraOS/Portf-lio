import React from "react";
import { Container, Text, TitleHello } from "./styles";

export const Paragraph = () => {
  return (
    
    <Container>
        <TitleHello>Hello!</TitleHello>
      <Text>
        {" "}
        Meu nome é Leandra, tenho 21 anos e sou estudante de Ciência da
        Computação na Universidade Federal de Campina Grande. Atualmente estou
        no quinto período e trabalhando no projeto de pesquisa e desenvolvimento
        IATest pelo Laboratório de Mineração de Dados. Já fui monitora da
        disciplina Teoria dos Grafos por dois semestres, sou apaixonada por
        grafos, desenvolvimento web, e principalmente por desenvolver projetos
        que facilitem a vida das pessoas utilizando tecnologia. Também amo
        cozinhar, fazer lettering enquanto estudo e assistir.{" "}
      </Text>
    </Container>

  );
};
