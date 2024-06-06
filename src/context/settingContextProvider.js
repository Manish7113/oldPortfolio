import React from "react";
import SettingContext from "./settingContext";

const SettingContextProvider = ({children}) =>{
    const [setting , setSetting] = React.useState('Hello brother ')
   return (<SettingContext.Provider value={{setting, setSetting}}>{children}</SettingContext.Provider>)
}
export default SettingContextProvider;

