import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" 
                 src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />                
            </Link>            
            <div className="header__search"> 
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>                
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo"> & Orders</span>
                </div><div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">                    
                        <ShoppingCartOutlinedIcon/>
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>               
            </div>           
        </div>
    )
}

export default Header
