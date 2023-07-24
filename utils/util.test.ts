import {
  convertStringToNumber,
  isObjectWithKeys,
  isObjectWithKeysAndValues,
  hasAttributeWithValue,
} from "./utils";

describe("Test the full library", () => {
  it("When receiving numeric string should convert to number without any comma", () => {
    let result;

    const dozens = "250.35";
    const thousands = "1,250.35";
    const hundredsThousands = "358,125.85";
    const millionNumber = "5,358,125.22";

    const thousandsNoDecimal = "1,250.00";

    result = convertStringToNumber(dozens);
    expect(result).toEqual(250.35);
    result = convertStringToNumber(thousands);
    expect(result).toEqual(1250.35);
    result = convertStringToNumber(hundredsThousands);
    expect(result).toEqual(358125.85);
    result = convertStringToNumber(millionNumber);
    expect(result).toEqual(5358125.22);

    result = convertStringToNumber(thousandsNoDecimal);
    expect(result).toEqual(1250);
  });

  it("isObjectWithKeys should return false when value is null", () => {
    expect(isObjectWithKeys(null)).toBe(false);
  });

  it("isObjectWithKeys should return false when value is not an object", () => {
    expect(isObjectWithKeys(1)).toBe(false);
  });

  it("isObjectWithKeys should return false when value is not an object", () => {
    expect(isObjectWithKeys("q")).toBe(false);
  });

  it("isObjectWithKeys should return false when value is an empty array", () => {
    expect(isObjectWithKeys([])).toBe(false);
  });

  it("isObjectWithKeys should return false when value is an array", () => {
    expect(isObjectWithKeys([1])).toBe(false);
  });

  it("isObjectWithKeys should return false when value is a date", () => {
    expect(isObjectWithKeys(new Date())).toBe(false);
  });

  it("isObjectWithKeys should return true when value is an object with keys", () => {
    expect(isObjectWithKeys({ key: "value" })).toBe(true);
  });

  it("isObjectWithKeysAndValues should return false when value is null", () => {
    expect(isObjectWithKeysAndValues(null)).toBe(false);
  });

  it("isObjectWithKeysAndValues should return false when value is not an object", () => {
    expect(isObjectWithKeysAndValues(1)).toBe(false);
  });

  it("isObjectWithKeysAndValues should return false when value is not an object", () => {
    expect(isObjectWithKeysAndValues("q")).toBe(false);
  });

  it("isObjectWithKeysAndValues should return false when value is an empty array", () => {
    expect(isObjectWithKeysAndValues([])).toBe(false);
  });

  it("isObjectWithKeysAndValues should return false when value is an array", () => {
    expect(isObjectWithKeysAndValues([1])).toBe(false);
  });

  it("isObjectWithKeysAndValues should return false when value is a date", () => {
    expect(isObjectWithKeysAndValues(new Date())).toBe(false);
  });

  it("isObjectWithKeysAndValues should return true when value is an object with keys", () => {
    expect(isObjectWithKeysAndValues({ key: "value" })).toBe(true);
  });

  it("isObjectWithKeysAndValues should return true when value has key and value", () => {
    expect(isObjectWithKeysAndValues({ key: "value" })).toBeTruthy();
  });

  it("isObjectWithKeysAndValues should return false when value has key but value is null", () => {
    expect(isObjectWithKeysAndValues({ key: null })).toBeFalsy();
  });

  it("isObjectWithKeysAndValues should return false when value has key but value is undefined", () => {
    expect(isObjectWithKeysAndValues({ key: undefined })).toBeFalsy();
  });

  it("isObjectWithKeys should return true when key attribute exists and has values", () => {
    expect(hasAttributeWithValue({ key: "value" }, "key")).toBe(true);
  });

  it("hasAttributeWithValue should return false when value is null and empty string", () => {
    expect(hasAttributeWithValue(null, "")).toBe(false);
  });

  it("isObjectWithKeys should return false when key attribute exists but is null", () => {
    expect(hasAttributeWithValue({ key: null }, "key")).toBeFalsy();
  });

  it("isObjectWithKeys should return false when key attribute exists but is undefined", () => {
    expect(hasAttributeWithValue({ key: undefined }, "key")).toBeFalsy();
  });

  it("isObjectWithKeys should return false when key attribute does not exists", () => {
    expect(
      hasAttributeWithValue({ somethingElse: "value" }, "key")
    ).toBeFalsy();
  });
});
