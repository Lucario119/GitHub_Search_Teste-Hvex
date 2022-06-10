import React from 'react';

import UserCard from '../../components/UserCard';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { Container, SearchUserForm, SearchField } from './styles';
import { useFetchUserData } from '../../hooks/useFetchUserData';
import { Link } from 'react-router-dom';

function SearchUserPage() {
  const { userName, githubUser, setUserName, handleSubmit } =
    useFetchUserData();
  return (
    <Container>
      <header>
        <Link to="">GitHub Search</Link>
        <SearchUserForm onSubmit={handleSubmit}>
          <h1>Pesquise um perfil do GitHub</h1>
          <SearchField>
            <button type="submit"></button>
            <SearchIcon />
            <input
              type="text"
              placeholder="Nome de usuário do GitHub"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </SearchField>
        </SearchUserForm>
      </header>
      {githubUser && (
        <UserCard
          key={githubUser.id}
          login={githubUser.login}
          name={githubUser.name}
          avatar_url={githubUser.avatar_url}
          html_url_profile={githubUser.html_url}
          followers={githubUser.followers}
          following={githubUser.following}
          // repos_url={githubUser.repos_url}
        />
      )}
    </Container>
  );
}

export default SearchUserPage;
