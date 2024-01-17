import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from '@components/ui/dropdown-menu';
import React from 'react';
import StatusBarItem from '../../status-bar/StatusBarItem';
import useActiveAppContext from 'src/helpers/hooks/useActiveAppContext';

const ViewMenu = () => {
  const { onMaximize } = useActiveAppContext()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <StatusBarItem type="text" label="View" />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem className='opacity-50'>Zoom In</DropdownMenuItem>
          <DropdownMenuItem className='opacity-50'>Zoom Out</DropdownMenuItem>
          <DropdownMenuItem onClick={onMaximize}>Full Screen</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default ViewMenu;
