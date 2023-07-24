import isNil from "lodash/isNil";

/**
 Converts a numeric string to a number, striping off all the commas
 Receive a numeric string, and remove all commas, e.g.: from '1,250.35' to 1250.35
 *
 * @param {string} payload numeric string to remove the commas
 * @returns {number} number without any commas
 */
export const convertStringToNumber = (payload: string): number => {
  const convertedNumber: string = payload.replace(/,/g, "");
  return Number(convertedNumber);
};

/**
 * Checks if the value we are asserting is an array with values
 *
 * @param {any} value The receiving value to check if is an array
 * @returns {boolean} true if is an array with values
 */
export const isArrayWithValues = (value: any) =>
  Array.isArray(value) && value.length > 0;

/**
 * Checks is variable is an error
 *
 * @param {any} error The receiving error
 * @param {string} status The response status
 * @returns {boolean} true if is an error type
 */
export function isError(error: any, status?: string): boolean {
  if (error && error.stack && error.message) {
    return true;
  }
  if (status) {
    return /^[4-5]+$/.test(status.substring(0, 1));
  }
  return false;
}

/**
 * Checks if the object has any keys/attributes
 *
 * @param {any} value The receiving json object
 * @returns {boolean} true if is a valid object with keys
 */
export const isObjectWithKeys = (value: any): boolean =>
  value instanceof Object &&
  value.constructor === Object &&
  Object.keys(value).length > 0;

/**
 * Checks if the object has any keys with values
 *
 * @param {any} value The receiving json object
 * @returns {boolean} true if is a not only a valid object with keys but also with values
 */
export const isObjectWithKeysAndValues = (value: any): boolean =>
  isObjectWithKeys(value) &&
  Object.values(value).some((value) => {
    return isNil(value) ? false : true;
  });

/**
 * Checks if is an object with a specific attribute with values
 *
 * @param {any} jsonObj The receiving json object
 * @param {string} prop The attribute description
 * @returns {boolean} true if not only the attribute exists but also it has a value
 */
export const hasAttributeWithValue = (jsonObj: any, prop: string): boolean => {
  return (
    isObjectWithKeysAndValues(jsonObj) &&
    jsonObj.hasOwnProperty(`${prop}`) &&
    jsonObj[prop].length > 0
  );
};
