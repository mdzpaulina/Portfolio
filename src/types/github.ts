export interface GitHubRepo {
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
  message?: string;
}
