import React from 'react';

import { useFetchUserData } from '../../hooks/useFetchUserData';

import {
  Container,
  UserData,
  FirstHalf,
  SecondHalf,
  Repos,
  RepoCard,
} from './styles';

interface UserProps {
  login: string;
  name: string;
  avatar_url: string;
  html_url_profile: string;
  followers: number;
  following: number;
}

const UserCard: React.FC<UserProps> = ({
  login,
  name,
  avatar_url,
  html_url_profile,
  followers,
  following,
}) => {
  const { repoData } = useFetchUserData();
  return (
    <Container>
      <UserData>
        <FirstHalf>
          <img src={avatar_url} alt={name} />

          <div>
            <h1>{name}</h1>
            <span>{login}</span>

            <div>
              <span>Followers: {followers} </span>
              <span>Following: {following} </span>
            </div>
            <a href={html_url_profile}>
              Veja esse perfil na plataforma do GitHub
            </a>
          </div>
        </FirstHalf>
        <SecondHalf>
          <h2>Lista de Repositórios: </h2>
          <Repos>
            {repoData &&
              repoData.map((value) => (
                <a href={value.html_url} key={value.id}>
                  <RepoCard>
                    <h1>{value.name}</h1>
                    <span>{value.description}</span>
                  </RepoCard>
                </a>
              ))}
          </Repos>
        </SecondHalf>
      </UserData>
    </Container>
  );
};

export default UserCard;
