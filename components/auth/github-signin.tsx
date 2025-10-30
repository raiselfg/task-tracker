import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';
import { SignInWithGitHub } from '@/app/auth/actions';

export const GitHubSignIn = () => {
  return (
    <form action={SignInWithGitHub}>
      <Button type="submit" className="w-full">
        <FaGithub />
        <p>Sign in with GitHub</p>
      </Button>
    </form>
  );
};
