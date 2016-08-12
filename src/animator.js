import Radium from 'radium';
import svars from './style-vars';

const colorTo = (property, colors) => {
  const keyframes = { },
    colorLength = colors.length - 1;

  colors.forEach((c, i) => {
    keyframes[Math.round((i/colorLength) * 100) + '%'] = {[property]: c};
  });

  return keyframes;
};

console.info(colorTo('border-color', svars.colorPath));
export default {
  colorJourneyBorder: Radium.keyframes(
    colorTo('border-color', svars.colorPath), 'color-journey-border'),
  colorJourneyBackground: Radium.keyframes(
    colorTo('background-color', svars.colorPath), 'color-journey-border'),
  colorJourneyFont: Radium.keyframes(
    colorTo('color', svars.colorPath), 'color-journey-border'),
};
