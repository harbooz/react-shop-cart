import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "react-use-cart";
import { ShopContext } from "../context/AppContextProvider";
import { LuShoppingCart } from "react-icons/lu";
import { SiSnapcraft } from "react-icons/si";
import { BsSearch } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";



const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  background: #131c2b;
  color: #fff;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 0px 11px 2px rgba(255,255,255,0.25);

  a {
    color: #019ba7;
    padding: 10px;
    text-decoration: unset;
    &:hover {
        opacity: .8;
    }
  }

  a.brand {
    text-decoration: unset;
    color: #FFF;
  }

  .shop__cart-value {
    display: flex;
    align-items: center;

    .shop__cart {
        margin-left: 20px;
    }

    .item--value {
        padding-left: 5px;
    }
  }

.burger-menu {
    display: none
}


  @media (max-width: 768px) {
    .formSearch {
        margin-top: 100px;
        width: 100%;
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;

        .search__input {
            max-width: 320px;
        }
    }

    position: sticky;
    top: 0;

    .nav {
        display: none;
    }

    .burger-menu {
        display: block
    }
    .brand {
        position: absolute;
        left: 40px;
    }

    .mobileMenu {
    position: fixed;
    height: calc(100% - 60px);
    left: 0;
    animation: menu .25s;
   -webkit-animation-name:  menu .25s;
    width: 80vw;
    background: #1f2731;
    z-index: 10;
    right: 0;
    display: flex;
    top: 60px;
    flex-direction: column;
    transition: all .25s ease;
    display: flex;

        &.showMenu {
            left: 0;
        }
    }    
  }

  .close--menu {
    margin-left: -6x;
  }

  @-webkit-keyframes menu {
    0% {
      left: -100%;
    }
    100% {
      left: 0%;
    }   
  }
`;

const Brand = styled.div`
display: flex;
align-items: center;
span {
    padding-left: 10px;
}
`

const SearchInput = styled.input`
    max-width: 150px;
    width: 100%;
    height: 25px;
    background: #121b27;
    border: solid 1px #3e5777;
    color: #bbd1d9;
    font-size: 12px;
    padding: 5px;
    &:focus {
        outline: unset;
    }
`

const GoButton = styled.button`
eight: 25px;
width: auto;
padding: 5px 8px;
color: #fff;
background: #3fd9e5;
border: unset;
margin-top: 1px;
margin-right: 10px;
`

function Header() {
  const { items } = useCart();
  const [input, setInput] = useState("")
  const navigate = useNavigate()
  const { toggleAction, showMenu, menu, search, showSearch,setSearch} = useContext(ShopContext);

const handleSubmitSearch = (e) => {
e.preventDefault();
navigate("/searched/" + input);
setSearch(false);
setInput("")
}


  return (
    <>
    <HeaderWrapper>    
    

    {menu ?  <IoMdClose size={24} className="close--menu" onClick={showMenu}/> : <VscMenu className="burger-menu" onClick={showMenu} />}

    <Link to="/"  className='brand'>
       <Brand><SiSnapcraft size={32}/> <span>E-comm</span> </Brand>
    </Link>

    {menu ? (<div className="mobileMenu">
   
        <Link to="/" onClick={showMenu}>Home</Link>
        <Link to="/shop" onClick={showMenu}>Shop</Link>
        <Link to="/contact" onClick={showMenu}>Contact</Link>
      </div>) :
      ( <div className="nav">
      <Link to="/" >Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/contact">Contact</Link>
    </div>)
      }

     
      <div className="shop__cart-value">
      {search && (
        <form className="formSearch" onSubmit={handleSubmitSearch}>
            <SearchInput className="search__input" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <GoButton type="submit" >Go</GoButton>
        </form>
      )}

        <BsSearch size={24} onClick={showSearch}/>
        <div className="shop__cart">
        <LuShoppingCart onClick={toggleAction} size={24} />
        <span className="item--value">{items.length}</span>
        </div>
      </div>
     
    </HeaderWrapper>

    </>
  );
}

export default Header;