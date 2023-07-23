import { SHAPES, COLORS } from '../constants';
import { __, any, countBy, equals, gte, identity, values, complement, pipe, filter, length, gt, curry, both, all, test, lte } from 'ramda';

const log = el => { console.log(el); return el }

export const isRed = color => color === COLORS.RED;
export const isBlue = color => color === COLORS.BLUE;
export const isGreen = color => color === COLORS.GREEN;
export const isWhite = color => color === COLORS.WHITE;
export const isOrange = color => color === COLORS.ORANGE;

export const notRed = complement(isRed);
export const notBlue = complement(isBlue);
export const notGreen = complement(isGreen);
export const notWhite = complement(isWhite);
export const notOrange = complement(isOrange);

export const getStar = element => element[SHAPES.STAR];
export const getRekt = element => element[SHAPES.SQUARE];
/*
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠛⢩⣴⣶⣶⣶⣌⠙⠫⠛⢋⣭⣤⣤⣤⣤⡙⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡟⢡⣾⣿⠿⣛⣛⣛⣛⣛⡳⠆⢻⣿⣿⣿⠿⠿⠷⡌⠻⣿⣿⣿⣿
⣿⣿⣿⣿⠏⣰⣿⣿⣴⣿⣿⣿⡿⠟⠛⠛⠒⠄⢶⣶⣶⣾⡿⠶⠒⠲⠌⢻⣿⣿
⣿⣿⠏⣡⢨⣝⡻⠿⣿⢛⣩⡵⠞⡫⠭⠭⣭⠭⠤⠈⠭⠒⣒⠩⠭⠭⣍⠒⠈⠛
⡿⢁⣾⣿⣸⣿⣿⣷⣬⡉⠁⠄⠁⠄⠄⠄⠄⠄⠄⠄⣶⠄⠄⠄⠄⠄⠄⠄⠄⢀
⢡⣾⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⠄⠄⠄⠄⠄⠄⢀⣠⣿⣦⣤⣀⣀⣀⣀⠄⣤⣾
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⡶⢇⣰⣿⣿⣟⠿⠿⠿⠿⠟⠁⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡟⢛⡛⠿⠿⣿⣧⣶⣶⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣧⠸⣿⣿
⠘⢿⣿⣿⣿⣿⣿⡇⢿⡿⠿⠦⣤⣈⣙⡛⠿⠿⠿⣿⣿⣿⣿⠿⠿⠟⠛⡀⢻⣿
⠄⠄⠉⠻⢿⣿⣿⣷⣬⣙⠳⠶⢶⣤⣍⣙⡛⠓⠒⠶⠶⠶⠶⠖⢒⣛⣛⠁⣾⣿
⠄⠄⠄⠄⠄⠈⠛⠛⠿⠿⣿⣷⣤⣤⣈⣉⣛⣛⣛⡛⠛⠛⠿⠿⠿⠟⢋⣼⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠉⣻⣿⣿⣿⣿⡿⠿⠛⠃⠄⠙⠛⠿⢿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢬⣭⣭⡶⠖⣢⣦⣀⠄⠄⠄⠄⢀⣤⣾⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣶⣶⣶⣾⣿⣿⣿⣿⣷⡄⠄⢠⣾⣿⣿⣿
*/
export const getTriangle = element => element[SHAPES.TRIANGLE];
export const getCircle = element => element[SHAPES.CIRCLE];

export const isWhiteCircle = pipe(getCircle, isWhite);
export const isNotWhiteCircle = pipe(getCircle, notWhite);
export const isBlueCircle = pipe(getCircle, isBlue);

export const isWhiteTriangle = pipe(getTriangle, isWhite);
export const isNotWhiteTriangle = pipe(getTriangle, notWhite);
export const isGreenTriangle = pipe(getTriangle, isGreen);

export const isWhiteSquare = pipe(getRekt, isWhite);
export const isNotWhiteSquare = pipe(getRekt, notWhite);
export const isGreenSquare = pipe(getRekt, isGreen);
export const isOrangeSquare = pipe(getRekt, isOrange);

export const isWhiteStar = pipe(getStar, isWhite);
export const isNotWhiteStar = pipe(log, getStar, notWhite);
export const isRedStar = pipe(getStar, isRed);
export const isNotRedStar = complement(isRedStar);

export const getGreens = pipe(values, filter(isGreen), length);
export const getReds = pipe(values, filter(isRed), length, log);
export const getBlues = pipe(values, filter(isBlue), length, log);
export const getWhites = pipe(values, filter(isWhite), length);
export const getOranges = pipe(values, filter(isOrange), length);

export const haveTwoGreen = pipe(getGreens, curry(equals)(2));
export const haveOneRed = pipe(getReds, curry(equals)(1));

export const countRedsBlues = (obj) => {
  const red = getReds(obj);
  const blue = getBlues(obj)
  return [red, blue]
}

export const getTriAndSquare = (obj) => {
  return equals(getTriangle(obj), getRekt(obj))
}

export const compareTwo = ([a, b]) => equals(a, b);

export const countColorsExceptWhite = pipe(values, filter(notWhite), countBy(identity));

export const hasThreeOrMoreOfAnyColor = pipe(values, any(gte(__, 3)));

export const hasOnlyNumbers = all(test(/^\d$/));

export const hasCorrectLength = both(gte(2), lte(10), length);