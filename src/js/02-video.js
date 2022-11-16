import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_CURRENT_KEY = 'videoplayer-current-time'; // key localstorage
const iframe = document.querySelector('iframe'); //данные из библиотеки Player
const player = new Player(iframe);

const durationCallback = ({ seconds }) => {
  localStorage.setItem(PLAYER_CURRENT_KEY, seconds); //вносим данніе в хранилище
};

player.on('timeupdate', throttle(durationCallback, 1000)); // задержка обновления данных хранилища

const currentTimePlay = localStorage.getItem(PLAYER_CURRENT_KEY); // получаем данные из хранилища

player
  .setCurrentTime(currentTimePlay) //начинаем воспроизводить с места остановки
  .then(function (seconds) {}) // весь скрипт из библиотеки
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

// const PLAYER_CURRENT_KEY= "videoplayer-current-time";
// const iframeEl = document.querySelector('iframe');
// const player = new Player(iframeEl);

// player.on('timeupdate', throttle(onVideoPlay, 1000));

// player.setCurrentTime(localStorage.getItem(PLAYER_CURRENT_KEY)).then(function (seconds) {
//     seconds = localStorage.getItem(PLAYER_CURRENT_KEY);
// }).catch(function (error) {
//     switch (error.name) {
//         case 'RangeError':
//             break;
//         default:
//             break;
//     }
// });
// function onVideoPlay(evt) {
//     localStorage.setItem(PLAYER_CURRENT_TIME, evt.seconds);
// }
