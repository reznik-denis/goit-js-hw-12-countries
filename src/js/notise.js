import { error, Stack } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const defaultOptions = {
    styling: 'brighttheme',
    width: '400px',
    mode: 'light',
    delay: 3000,
    maxTextHeight: null,
}

const myStack = new Stack({
  dir1: 'up',
  dir2: 'left',
  firstpos1: 90,
  firstpos2: 90, 
  modal: true,
  overlayClose: false,
});

export function noticeManyMatces() {
  error({
    title: 'Oh No!',
    text:
      "Too many matches found. Please enter a more specific query!",
    ...defaultOptions,
    stack: myStack,
  });
}

export function noticeValidMatces() {
  error({
    title: 'Oh No!',
    text:
      "Please enter a valid query!",
    ...defaultOptions,
    stack: myStack,
  });
}