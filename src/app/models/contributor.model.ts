export interface Contributor{
  id: string;
  login: string;
  dateOfBirth: Date;
  address: string;
  avatar_url: string;
  url: string;
  gists_url: string;
  repos_url: string;
  followers_url: string;
  followers: number;
  repositories: number;
  gists: number;
  contributions: number;
  detail: any;
}
