import { useEffect, useState } from 'react';
import type { Project } from '../data/projects';
import type { GitHubRepo } from '../types/github';

export type ProjectWithRepo = Project & GitHubRepo;

export function useGitHubRepos(projects: Project[]) {
  const [repos, setRepos] = useState<ProjectWithRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        const result = await Promise.all(
          projects.map(async (p) => {
            const response = await fetch(`https://api.github.com/repos/${p.username}/${p.reponame}`);
            const data: GitHubRepo = await response.json();
            return { ...p, ...data };
          })
        );
        setRepos(result);
      } catch (error) {
        console.error('Failed to fetch project data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, [projects]);

  return { repos, loading };
}
