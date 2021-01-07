import TopPage from "./Top";
import Jinro from "./Jinro";
import JinroCharacters from "./Jinro/CharacterViewPage";
import { Board as Othello } from "./Othello/board";
import {
    Menu as MenuIcon,
} from "@material-ui/icons";

const RouteCreater = ({
    path,
    component,
    viewName = "undefined",
    icon = null,
    exact = false,
    menuView = true,
    viewUnderDivider = false
}) => {
    return ({
        path: path,
        component: component,
        viewName: viewName,
        exact: exact,
        menuView: menuView,
        icon: icon,
        viewUnderDivider: viewUnderDivider
    })
}

const PageList = [
    RouteCreater({
        path: "/DDGames",
        component: TopPage,
        viewName: "トップページ",
        icon: MenuIcon,
        exact: true,
        menuView: false
    }),
    RouteCreater({
        path: "/DDGames/Jinro",
        component: Jinro,
        viewName: "一人狼ゲーム",
    }),
    RouteCreater({
        path: "/DDGames/Jinro/Characters",
        component: Jinro,
        viewName: "一人狼ゲーム",
    }),
    RouteCreater({
        path: "/DDGames/Othello",
        component: Othello,
        viewName: "オセロ"
    }),
];

export default (PageList);