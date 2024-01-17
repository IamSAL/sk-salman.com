import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from '@components/ui/dropdown-menu';
import React from 'react';
import StatusBarItem from '../../status-bar/StatusBarItem';
import { useAppContext } from '../../app-window/appContext';
import { useDispatch } from 'react-redux';
import { terminateApp, updateAppStatus } from 'app/core/redux/memory/memory.slice';
import useActiveAppContext from 'src/helpers/hooks/useActiveAppContext';

const WindowMenu = () => {

  const { app, onTerminate, onHide } = useActiveAppContext();


  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <StatusBarItem type="text" label="Window" />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={onHide}>Minimize</DropdownMenuItem>
          <DropdownMenuItem onClick={onTerminate}>Close</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default WindowMenu;
