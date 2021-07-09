import './src/style/generic/reset.css';
import './src/style/settings/colors.css';
import './src/style/elements/base.css';
import BoardGame from './src/Objects/BoardGame';
import PlayerName from './src/components/PlayerName';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML('beforeend', 
`
  ${PlayerName("Player1")}
  ${PlayerName("Player2")}
  ${BoardGame(6)}
`
);
