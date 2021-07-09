import './src/style/generic/reset.css';
import './src/style/settings/colors.css';
import './src/style/elements/base.css';
//import './style.css';
import BoardGame from './src/Objects/BoardGame';

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);
$root.insertAdjacentHTML('beforeend', $htmlBoardGame);
