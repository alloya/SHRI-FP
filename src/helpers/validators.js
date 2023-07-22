/**
 * @file Домашка по FP ч. 1
 *
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если какие либо функции написаны руками (без использования библиотек) это не является ошибкой
 */
import { __, allPass, any, compose, countBy, dissoc, equals, gte, identity, prop, values, propEq, complement, pipe, curry } from 'ramda';
import { isWhiteCircle, isWhiteTriangle, isRedStar, isGreenSquare, getGreens, countRedsBlues, compareTwo, isBlueCircle, isOrangeSquare, countColorsExceptWhite, hasThreeOrMoreOfAnyColor, isGreenTriangle, haveTwoGreen, haveOneRed, getOranges, isNotWhiteStar, isNotRedStar, isNotWhiteTriangle, isNotWhiteSquare, getTriAndSquare } from '../tools/helpers';

// 1. Красная звезда, зеленый квадрат, все остальные белые.
export const validateFieldN1 = allPass([isWhiteCircle, isWhiteTriangle, isRedStar, isGreenSquare])

// 2. Как минимум две фигуры зеленые.
export const validateFieldN2 = pipe(getGreens, gte(__, 2));

// 3. Количество красных фигур равно кол-ву синих.
export const validateFieldN3 = pipe(countRedsBlues, compareTwo);

// 4. Синий круг, красная звезда, оранжевый квадрат треугольник любого цвета
export const validateFieldN4 = allPass([isBlueCircle, isRedStar, isOrangeSquare]);

// 5. Три фигуры одного любого цвета кроме белого (четыре фигуры одного цвета – это тоже true).
export const validateFieldN5 = pipe(countColorsExceptWhite, hasThreeOrMoreOfAnyColor);

// 6. Ровно две зеленые фигуры (одна из зелёных – это треугольник), плюс одна красная. Четвёртая оставшаяся любого доступного цвета, но не нарушающая первые два условия
export const validateFieldN6 = allPass([isGreenTriangle, haveTwoGreen, haveOneRed])

// 7. Все фигуры оранжевые.
export const validateFieldN7 = pipe(getOranges, curry(equals)(4))

// 8. Не красная и не белая звезда, остальные – любого цвета.
export const validateFieldN8 = allPass([isNotWhiteStar, isNotRedStar])

// 9. Все фигуры зеленые.
export const validateFieldN9 = pipe(getGreens, curry(equals)(4))

// 10. Треугольник и квадрат одного цвета (не белого), остальные – любого цвета
export const validateFieldN10 = allPass([isNotWhiteTriangle, isNotWhiteSquare, getTriAndSquare])
