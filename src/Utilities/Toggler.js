import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from './useDarkMode';

const Toggler = () => {
    const [colorTheme, setTheme] = useDarkMode()
    const [isDarkMode, setDarkMode] = useState(colorTheme === 'light' ? true : false);

    console.log(isDarkMode);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkMode(checked);
       
    }
    return (
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
        >

        </DarkModeSwitch>
    );
};

export default Toggler;