const getRandNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const getRandColor = () => {
  const r = getRandNumber(0, 256);
  const g = getRandNumber(0, 256);
  const b = getRandNumber(0, 256);
  return `rgb(${r},${g},${b})`;
};


const cutContent = (text, maxCount) => {
  return text.length > maxCount ? `${text.slice(0, maxCount)}...` : text;
};

export default {
  getRandNumber,
  getRandColor,
  cutContent
}

