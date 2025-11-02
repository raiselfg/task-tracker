import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';
import { SignInWithGitHub } from '@/app/auth/actions';

export const GitHubLoginButton = () => {
  return (
    <form action={SignInWithGitHub}>
      <Button type="submit" className="w-full">
        <FaGithub />
        <p>GitHub</p>
      </Button>
    </form>
  );
};
