import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import './Menu.css'

export default function Menux() {

    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <PersonIcon  style={{fontSize: "3rem"}}/>
                    </ListItemIcon>
                    <ListItemText >
                        <p className="text-menu">{localStorage.getItem("name")}</p>
                        <p className="text-menu">{localStorage.getItem("correo")}</p>
                    </ListItemText>
                </ListItem>

            </List>
            <Divider />

        </div>
    );
    return (
        <div>
            <MenuIcon onClick={toggleDrawer('left', true)}/>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>

        </div>
    );
}