import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/gitarika/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de Respositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
