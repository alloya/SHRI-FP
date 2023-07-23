/**
 * @file Домашка по FP ч. 2
 *
 * Подсказки:
 * Метод get у инстанса Api – каррированый
 * GET / https://animals.tech/{id}
 *
 * GET / https://api.tech/numbers/base
 * params:
 * – number [Int] – число
 * – from [Int] – из какой системы счисления
 * – to [Int] – в какую систему счисления
 *
 * Иногда промисы от API будут приходить в состояние rejected, (прямо как и API в реальной жизни)
 * Ответ будет приходить в поле {result}
 */
// processSequence.js
import { allPass, andThen, compose, ifElse, length, pipe, prop, otherwise, tap } from 'ramda';
import Api from '../tools/api';
import { hasCorrectLength, hasOnlyNumbers } from '../tools/helpers';

const api = new Api();
const NUMBERS_BASE = 'https://api.tech/numbers/base';
const ANIMAL_TECH = 'https://animals.tech/';

const isValidInput = allPass([hasOnlyNumbers, hasCorrectLength]);
const addProperty = (input) => ({ from: 10, to: 2, number: input });
const getApiResult = compose(String, prop('result'));
const getApiRequest = pipe(addProperty, api.get(NUMBERS_BASE));
const awaitGetApiResult = andThen(getApiResult);
const getAnimalsRequest = (input) => api.get(ANIMAL_TECH, input);
const transformInput = pipe(Number, Math.floor);
const square = (input) => Math.pow(input, 2);
const modulo = (input) => input % 3;
const count = pipe(String, length);

const logAndReturn = (writeLog) => (input) => tap(writeLog, input);

const processSequence = async ({ value, writeLog, handleSuccess, handleError }) => {
    const logStep = logAndReturn(writeLog);
    const waitLogStep = andThen(logStep);
    const onError = (error) => handleError('ValidationError');
    const onSuccess = (input) => handleSuccess(input);

    const process = pipe(
        logStep,
        transformInput,
        logStep,
        getApiRequest,
        awaitGetApiResult,
        waitLogStep,
        andThen(count),
        waitLogStep,
        andThen(square),
        waitLogStep,
        andThen(modulo),
        waitLogStep,
        getApiRequest,
        awaitGetApiResult,
        andThen(getAnimalsRequest),
        awaitGetApiResult,
        andThen(onSuccess),
        otherwise(onError)
    )

    const start = ifElse(isValidInput, process, onError);
    await start(value);
}

export default processSequence;
