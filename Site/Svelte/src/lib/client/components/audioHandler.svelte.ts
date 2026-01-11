import click from '$client/sounds/click-short.mp3';
import { globalState } from '$lib/state/global.svelte';
const buttonSound = () => {
  const clickSound = new Audio(click);
  if (globalState.sound) {
    clickSound.play();
  }
}

export {buttonSound};