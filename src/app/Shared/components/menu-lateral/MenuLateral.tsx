import { Drawer, useTheme, Divider, Icon, List, ListItemButton, ListItemText, ListItemIcon, Avatar, useMediaQuery } from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import {Box} from "@mui/system"

import { useDrawerContext } from "../../contexts";
import { IconMap } from '../icons';
import { useEffect } from "react";


 
interface IListItemLinkProps {
    label: string;
    icon: React.ComponentType;
    to: string;
    onClick: (() => void) | undefined;
}
const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon: IconComponent, label, onClick}) => {
    const navigate = useNavigate();

        const resolvedPath = useResolvedPath(to);
        const match = useMatch({ path: resolvedPath.pathname, end: false });


    const handleClick = () => {
        navigate(to);
        onClick?.();
    }

    return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
       <IconComponent /> 
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};


interface Props {
    children: React.ReactNode;
}


export const MenuLateral: React.FC<Props> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, drawerOptions, toggleDrawerOpen,  setDrawerOptions } = useDrawerContext();

useEffect(() => {
    setDrawerOptions([
      {
        icon: IconMap.home,
        path: '/pagina-inicial',
        label: 'Página inicial',
      },
     
    ]);
  }, [setDrawerOptions]);

    return(
        <>
         <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}> 
            <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column" >
                
                <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                    <Avatar sx={{height: theme.spacing(12), width: theme.spacing(12) }} src="https://img.freepik.com/fotos-gratis/fundo-abstrato-pop-desfocado-rosa_58702-1699.jpg?semt=ais_hybrid&w=740&q=80"/>
                </Box>
                <Divider />

            <Box flex={1}>

            <List component="nav">
               {drawerOptions.map((drawerOption) => (
                <ListItemLink
                  to={drawerOption.path}
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
            </Box>

            </Box>
        </Drawer>

        <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
        </Box>
        </>
    );
}