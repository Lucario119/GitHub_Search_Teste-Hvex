import { FormEvent, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { api } from '../services/api';

interface UserProps {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  followers: number;
  following: number;
}
interface RepoProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
}
export function useFetchUserData() {
  const history = useHistory();
  const location = useLocation();

  const [userName, setUserName] = useState('');

  const [githubUser, setGithubUser] = useState<UserProps>();
  const [repoData, setRepoData] = useState<RepoProps[]>([]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const userData = await api.get(`users/${userName}`);
      history.push(`?query=${userName.toLowerCase()}`);

      return setGithubUser(userData.data);
    } catch (error) {
      throw alert('Usuário não encontrado');
    }
  }
  const catchUserName = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    async function fetchReposData() {
      try {
        const reposData = await api.get(`users/${catchUserName}/repos`);
        setRepoData(reposData.data);
      } catch (error) {
        throw error;
      }
    }
    fetchReposData();
  }, [catchUserName]);
  return { handleSubmit, userName, setUserName, githubUser,repoData };
}
