import './src/style/generic/reset.css';
import './src/style/settings/colors.css';
import './src/style/elements/base.css';
import BoardGame from './src/Objects/BoardGame';
import ScoreBoard from './src/Objects/ScoreBoard';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML('beforeend', 
`
  ${ScoreBoard()}
  ${BoardGame(6)}
`
);
