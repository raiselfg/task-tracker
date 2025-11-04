import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';

export const TaskManageButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Manage</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Manage</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Create Project</DropdownMenuItem>
        <DropdownMenuItem>My Projects</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
