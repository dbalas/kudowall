/* Get the documentElement (<html>) to display the page in fullscreen */
const elem = document.documentElement;

function isFullscreen() {
  return window.screenTop || window.screenY;
}

function fullscreenListener(cb) {
  return () => {
    cb(isFullscreen());
  };
}

export function init(cb) {
  document.addEventListener('webkitfullscreenchange', fullscreenListener(cb), false);
  document.addEventListener('mozfullscreenchange', fullscreenListener(cb), false);
  document.addEventListener('fullscreenchange', fullscreenListener(cb), false);
}

export function destroy(cb) {
  document.removeEventListener('webkitfullscreenchange', fullscreenListener(cb), false);
  document.removedEventListener('mozfullscreenchange', fullscreenListener(cb), false);
  document.removeEventListener('fullscreenchange', fullscreenListener(cb), false);
}

export function enter() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

export function exit() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

export default {
  init,
  destroy,
  enter,
  exit,
};
