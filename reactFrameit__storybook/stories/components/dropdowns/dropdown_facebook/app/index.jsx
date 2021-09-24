import Dropdown from "../../dropdown/app/dropdown";
import NavItem from "./components/navItem";

const FacebookDropdown = ( { dropdownProvider , theme , ...props } ) => {
    return (
            <NavItem dropdownProvider={ dropdownProvider } theme={ 'dark' }>
                    <Dropdown theme={ theme } { ...props } />
            </NavItem>
    )
}

export default FacebookDropdown;