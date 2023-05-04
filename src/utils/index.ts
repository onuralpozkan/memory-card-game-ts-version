import { CardType } from "../types/card";

// shuffle the array data
function getShuffledArr(arr: Array<CardType>) {
  return [...arr].map((_, i, arrCopy) => {
    var rand = i + Math.floor(Math.random() * (arrCopy.length - i));
    [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]];
    return arrCopy[i];
  });
}
export default getShuffledArr;
