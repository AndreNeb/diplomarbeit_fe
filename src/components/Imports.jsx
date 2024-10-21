// Styles
import '../stylesheets/topbar/topbar.css';
import '../stylesheets/rules/leftbar/buttons.css';
import '../stylesheets/rules/leftbar/leftbar.css';
import '../stylesheets/rules/Build-grid.css';
import '../stylesheets/rules/Rules-overview.css';
import '../stylesheets/supportpage/support.css';
import '../stylesheets/general/general.css';
import '../stylesheets/homepage-widgets/small-widgets.css';
import '../stylesheets/homepage-widgets/big-widgets.css';
import '../stylesheets/loginoutpage/loginout.css';

// React
export { useContext, useState } from 'react';
export { Link, HashRouter} from 'react-router-dom';
export { useTranslation } from 'react-i18next';

// Components
export { default as Header } from './Header';
export { default as HiddenHeader } from './HiddenHeader';
export { DarkModeContext } from './DarkModeContext';
export { default as Rules } from "../components/RulesContent";
export { default as classNames } from 'classnames';



// Images
export { default as arrowleft } from '../pictures/lightMode/arrow-left_lightMode.png';
export { default as arrowleftBlack } from '../pictures/darkMode/arrow-left_darkMode.png';
export { default as arrowrightlight } from '../pictures/darkMode/arrow_right_darkMode.png';
export { default as arrowrightdark } from '../pictures/lightMode/arrow_right_lightMode.png';
export { default as plus } from '../pictures/lightMode/plus_lightMode.png';
export { default as plusBlack } from '../pictures/darkMode/plus_darkMode.png';
export { default as safe } from '../pictures/lightMode/safe_lightMode.png';
export { default as safeBlack } from '../pictures/darkMode/safe_darkMode.png';
export { default as deleteRule } from '../pictures/lightMode/delete_lightMode.png';
export { default as deleteRuleBlack } from '../pictures/darkMode/delete_darkMode.png';
export { default as ticklight } from '../pictures/darkMode/tick_darkMode.png';
export { default as tickdark } from '../pictures/lightMode/tick_lightMode.png';
export { default as apple } from '../pictures/other/NARKO_Logo.png';
export { default as hamburger } from '../pictures/lightMode/hamburger-menu_lightMode.png';
export { default as hamburgerBlack } from '../pictures/darkMode/hamburger-menu_darkMode.png';
export { default as patienten } from "../pictures/lightMode/patients_lightMode.png";
export { default as patientenBlack } from "../pictures/darkMode/patients_darkMode.png";
export { default as maske } from "../pictures/lightMode/mask_lightMode.png";
export { default as maskeBlack } from "../pictures/darkMode/mask_darkMode.png";
export { default as spritze } from "../pictures/lightMode/syringe_lightMode.png";
export { default as spritzeBlack } from "../pictures/darkMode/syringe_darkMode.png";
export { default as wartezimmer } from "../pictures/lightMode/waitingroom_lightMode.png";
export { default as wartezimmerBlack } from "../pictures/darkMode/waitingroom_darkMode.png";





