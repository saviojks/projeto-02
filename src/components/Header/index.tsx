import { HeaderContent } from "./styles";
import logoIgnite from '../../assets/ignite-logo.svg'
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header() {
    return (
        <HeaderContent>
            <img src={logoIgnite} />
            <nav>
                <NavLink to="/" title='Timer' >
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="Histórico" >
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContent>
    )
} 