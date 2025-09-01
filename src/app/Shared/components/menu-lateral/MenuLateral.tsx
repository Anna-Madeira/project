import { Box, Drawer, useTheme, Divider, List, ListItemButton, ListItemText, ListItemIcon, Avatar, useMediaQuery } from "@mui/material";
import HomeFilledIcon from '@mui/icons-material/Home';
import { useDrawerContext } from "../../contexts";

interface Props {
    children: React.ReactNode;
}


export const MenuLateral: React.FC<Props> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const {isDrawerOpen, toogleDrawerOpen} = useDrawerContext();

    return(
        <>
         <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toogleDrawerOpen}> 
            <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column" >
                
                <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                    <Avatar sx={{height: theme.spacing(12), width: theme.spacing(12) }} src="https://img.freepik.com/fotos-gratis/fundo-abstrato-pop-desfocado-rosa_58702-1699.jpg?semt=ais_hybrid&w=740&q=80"/>
                </Box>
                <Divider />

            <Box flex={1}>

            <List component="nav">
                <ListItemButton>
                    <ListItemIcon>
                        <HomeFilledIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItemButton>
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