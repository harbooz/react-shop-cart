import React, { createContext, useState } from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { schema } from "../form-schema/schema";


export const ShopContext = createContext();

function AppContextProvider({ children }) {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false)
 

  const showSearch = () => {
    setSearch(!search)
    console.log(search)
}

  const toggleAction = () => {
    setActive(!active);
    console.log(active);
  };

  const showMenu = () => {
    setMenu(!menu)
    console.log(menu)
  }

  const { register, handleSubmit, formState: { errors },} = useForm({
    resolver: yupResolver(schema)
})

const submitForm = (data) => {
    console.log(data)
}

  const storeValue = {
    showSearch,
    setSearch,
    search,
    toggleAction,
    showMenu,
    menu,
    active,
    setActive,
    submitForm,
    register,
    handleSubmit,
    formState: { errors }
  };
  return (
    <ShopContext.Provider value={storeValue}>{children}</ShopContext.Provider>
  );
}

export default AppContextProvider;