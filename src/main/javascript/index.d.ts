export interface Object {
  isArray(someArray: any): boolean;
  isDate(someDate: any): boolean;
  isString(someString: any): boolean;
  isNumeric(someNumber: any): boolean;
  isBoolean(someBoolean: any): boolean;
  isDefined(target: any): boolean;
  isRegEx(someRegEx: any): boolean;
  getProperty(someObject: object, someProperty: any): boolean;
  setProperty(someObject: object, someProperty: any, someValue: any): void;
  hasProperty(someObject: object, someProperty: any): boolean;
  hasFunction(someObject: object, someProperty: any): boolean;
  isFunction(targetFunction: any): boolean;
  isConstructorFunction(targetFunction: any): boolean;
  isDefinedAndNotNull(someObject: any): boolean;
  isUndefinedOrNull(someObject: any): boolean;
}
