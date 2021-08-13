import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ProjectPresenting } from './styles';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <ProjectPresenting>
        <div>
          <h1>GitHub Search</h1>
          <span>
            Pesquise qualquer perfil de usuário da plataforma GitHub e visualize
            seus dados.
          </span>
        </div>
        <Link to="search">Clique aqui para iniciar a busca</Link>
      </ProjectPresenting>
    </Container>
  );
};

export default LandingPage;
