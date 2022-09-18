import React from "react";
import { Container, Text, TitleHello } from "./styles";

export const Paragraph = () => {
  return (
    
    <Container>
        <TitleHello>Hello!</TitleHello>
      <Text>
        {" "}
        Meu nome é Leandra, sou natural da cidade de Solânea-PB, tenho 22 anos e sou estudante de Ciência da
        Computação na Universidade Federal de Campina Grande (UFCG), atualmente estou cursando disciplinas do sétimo período do curso. Conheci essa área no último
        ano do ensino médio, quando um grupo de mulheres da UFPB foi apresentar os cursos 
        de Ciência da Computação e Engenharia da Computação no meu colégio. 
        Foi amor a primeira vista e a partir dali, nunca mais me vi fazendo outra coisa. 
        Também amo cozinhar, fazer lettering enquanto estudo e assistir.{" "}
      </Text>
    </Container>

  );
};
