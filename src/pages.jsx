import react from 'react';
import Markdown from 'react-markdown'
import rulesData from './data/rules.md';
import aboutData from './data/about.md';

function getText(file) {
  const [text, settext] = react.useState();
  fetch(file)
    .then((response) => response.text())
    .then((textcontent) => {
      settext(textcontent);
    });
  return text || "loading...";
}

export const About = () => {
  return <main className="Main">
    <Markdown>{getText(aboutData)}</Markdown>
  </main>;
};

export const Rules = () => {
  return <main className="Main">
    <Markdown>{getText(rulesData)}</Markdown>
  </main>;
};

export const Guide = () => {
  return <main className="Main">
    <h1 className="Title">GlobeMC Wiki - Guide!</h1>
  </main>;
};

export const Plugins = () => {
  return <main className="Main">
    <h1 className="Title">GlobeMC Wiki - Plugins!</h1>
  </main>;
};
