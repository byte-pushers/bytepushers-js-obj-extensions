# bytepushers-js-test-utils
Byte Pushers Core JavaScript library that supports core object extensions and general utilities that can be used as base
fundamental classes.
## Installation
**npm install bytepushers-js-obj-extensions**

## Synopsis
Byte Pushers Core JavaScript library that supports common object extensions and general utilities that can be used as base
fundamental classes. This module will be able to decipher and validate code from arrays to be able to tell whether a function is a constructor. This will show you how to use all code
## Code Example
In the following code example, you insert an array to get the resulting true or false:
```javascript
    Object.isArray = function (someArray) {
        var result = false;
        if (Object.isDefined(someArray)) {
            if (someArray.constructor.toString().indexOf("Array") > -1) {
                result = true;
            }
        }

        return result;
    };
    //Your code replaces the (someArray) portion
```
You will use the same logic for testing whether resulting code comes back true for a date to be defined as true:
```javascript
    Object.isDate = function (someDate) {
        var result = false;
        if (Object.isDefined(someDate)) {
            if (typeof someDate === "object" && someDate instanceof Date) {
                result = true;
            }
        }

        return result;
    };
    //Your code goes replaces the (someDate) parameter
```
In the following code, you can insert a constructor to validate that same constructor:

```javascript
    Object.isConstructorFunction = function (targetFunction) {
        var isConstructorFunction = false,
            isNotFirstLetterUppercase;

        if (Object.isFunction(targetFunction)) {
            isNotFirstLetterUppercase = !(/^[A-Z]/.test(targetFunction.name));
            isConstructorFunction = true;
        } else {
            throw new BytePushers.exceptions.InvalidParameterException("Function(" + targetFunction + ") is not a Function.");
        }

        if (isNotFirstLetterUppercase) {
            throw new BytePushers.exceptions.InvalidParameterException("Fist letter of Function(" + targetFunction + ") name must be capitalized.");
        }

        return isConstructorFunction;
    };

    if (Function.prototype.name === undefined) {
        // Add a custom property to all function values
        // that actually invokes a method to get the value
        Object.defineProperty(Function.prototype, 'name', {
            get: function () {
                return (/function ([^(]*)/).exec(this)[1];
            }
        });
    }
    //You input the name of your constructor as a reference into the (targetFunction) to get your results
```
The same injection method is used in all of the functions to test. Be in mind that these are all either static convenience functions or static functions. The trend of injecting the parameters with your code is followed throughout all of the functions. To see any more examples of the non karma test functions, see the **software.bytepushers.object.extensions.js** file located in project.
## Motivation
The motivation behind the creation of the software.bytepushers.object.extensions.js is to create pre-made test for your code. This can be a time saver by keeping you away from "console.log()".
The test ran will give you true or false for all code so you will quickly be able to tell whether the specified code is defined as expected.

|     Testable Objects      |
|:--------------------------|
|Arrays                     |
|Dates                      |
|Strings                    |
|Numerics                   |
|Booleans                   |
|Defined                    |
|Regular Expressions        |
|Gets Properties            |
|Sets Properties            |
|Has Properties             |
|Has Function               |
|Functions                  |
|Constructors               |
|Defined & not null or null |
## API Reference

|    Method Called                  |                   Function Definition                                   |
|:----------------------------------|:------------------------------------------------------------------------|
| Object.isArray                    | |
| Object.isDate                     | |
| Object.isString                   | |
| Object.isNumeric                  | |
| Object.isBoolean                  | |
| Object.isDefined                  | |
| Object.isRegEx                    | |
| Object.getProperty                | |
| Object.setProperty                | |
| Object.hasProperty                | |
| Object.hasFunction                | |
| Object.isFunction                 | |
| Object.isConstructorFunction      | |
| Object.isDefinedAndNotNull        | |
| Object.isUndefinedOrNull          | |

<!--- TODO: Remember to ask Tonte to whether you use the dot method or parenthesis to finish off the functions.
            Also remember to ask Tonte about the dependencies so the installation is just as mentioned up top.
            Ask about how correct the Synopsis is.--->

Use dot notation to access private methods. Class content goes inside of the array for the second parameter.
## Tests
When running test within this module, we use Jasmine. For beginners, use this link right [here](https://jasmine.github.io/pages/getting_started.html). This will show you the documenation on how Jasmine works for testing. Now, this is an example in our **objectExtensionSpec.js** file.
```javascript
describe('Object.isArray', function () {
          it('can tell an object is an array', function() {
              var result = Object.isArray([1, 3, 45, "d"]);

                expect(result).toBe(true);
          });

          it('can tell an object is not an array', function () {
              var obj = {};
              obj[0] = 1; obj[1] = 2; obj[2] = 3;

              var result = Object.isArray(obj);

              expect(result).toBe(false);
          });
        });
//In this example we check the array of [1,3,45, "d"] for being an array.

        describe("Object.setProperty", function(){
            it('can set a property', function() {
                var car = {
                        model: undefined
                    },
                    expectedResult = "Viper";

                Object.setProperty(car, "model", "Viper");
                var actualResult1 = Object.getProperty(car, "model");
                var actualResult2 = car.model;

                expect(actualResult1).toBe(expectedResult);
                expect(actualResult2).toBe(expectedResult);
            });
            it('can set property by the setter method', function(){
                var car = {
                        model: undefined,
                        setCarModel: function(someCarModel) {
                            this.model = someCarModel;
                        }
                    },
                expectedResult = "Viper";

                Object.setProperty(car,"carModel", "Viper");
                var actualResult1 = car.model;
                var actualResult2 = Object.getProperty(car, "model");
                expect(actualResult1).toBe(expectedResult);
                expect(actualResult2).toBe(expectedResult);
            });
        });
//In this example we have to test that will make sure that the variable "car"'s properties will be set to the model: viper.


```



## Contributors
Byte Pushers
## License
In order to build successfully, ensure the following:
  1.  Use either minified version of modules or normal version of modules in the Gruntfile.js and Karma.conf.js files;
      but not both and not mixed matched.