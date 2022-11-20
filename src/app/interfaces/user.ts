export interface User {
    nickname: string;
    githubProfile: string;
    contributionsCount?: number;
    organizations?: Organization[];
    pullRequests?: PullRequest[];
}

export interface Organization {
    login: string;
    avatar_url: string;
    link: string
}

export interface PullRequest {
    title: string;
    issue_url: string;
    repoName: string;
    body: string;
    created_at: string;
}