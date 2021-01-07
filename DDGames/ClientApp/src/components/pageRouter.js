import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
} from "@material-ui/core";
import {
    Menu as MenuIcon,
    Home as HomeIcon,
} from "@material-ui/icons"

import PageList from "./pageList";

const APP_BAR_HEIGHT = 48;

const PageRouter = () => {

    const [path, setPath] = useState("Othello");
    const [open, setOpen] = useState({
        left: false,
    });

    const Drawer = () => {
        const toggleDrawer = (anchor, value) => {
            setOpen({ ...open, [anchor]: value });
        }

        const ChangePage = (path) => {
            setPath(path);
            setOpen({ ...open, left: false })
        }

        const list = (anchor) => {
            return (
                <div>
                    <div>
                        <IconButton onClick={() => ChangePage("")}>
                            <HomeIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {PageList.map((page) => {
                            if (!page.menuView) {
                                return void 0;
                            }
                            return (
                                <React.Fragment key={page.path}>
                                    <ListItem
                                        button
                                        onClick={() => ChangePage(page.path)}
                                    >
                                        {page.icon != null && <ListItemIcon><page.icon /></ListItemIcon>}

                                        <ListItemText
                                            primary={page.viewName}
                                        />
                                    </ListItem>
                                    {page.viewUnderDivider && <Divider />}
                                </React.Fragment>
                            );
                        })}
                    </List>
                </div>
            )
        }

        return (
            <div>
                <div style={{ height: APP_BAR_HEIGHT }}></div>
                <AppBar style={{ height: APP_BAR_HEIGHT }}>
                    <Toolbar>
                        <IconButton
                            color={"inherit"}
                            edge={"start"}
                            onClick={() => toggleDrawer("left", true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography>
                            {"めにゅ～"}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    anchor={"left"}
                    open={open.left}
                    onOpen={() => toggleDrawer("left", true)}
                    onClose={() => toggleDrawer("left", false)}
                >
                    {list("left")}
                </SwipeableDrawer>
            </div>
        )
    }

    return (
        <div>
            <Drawer />
            {PageList.map((page, index) => {
                return (
                    <React.Fragment key={index}>
                        {page.path === path && <page.component />}
                    </React.Fragment>

                )
            })}
        </div>
    )
}



export default (PageRouter);