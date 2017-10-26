# bytepushers-js-test-utils
Byte Pushers Object Extensions JavaScript library that supports core object extensions and general utilities that can be used as base
fundamental classes.
## Installation
**npm install bytepushers-js-obj-extensions**

## Synopsis
Byte Pushers Object Extensions JavaScript library that supports common object extensions and general utilities that can be used as base
fundamental classes. This module will be able to decipher and validate code from arrays to be able to tell whether a function is a constructor. This will show you how to use all code
## Code Example
In the following code example, we call Object.isArray() method to determine if the array literal passed to this method is an array or not:
```javascript
var result = Object.isArray([1, 3, 45, "d"]); // result ==> true
````
In the following code example, we call Object.isArray() method to determine if the object literal passed to this method is an array or not:
```javascript
var obj = {};
var result = Object.isArray(obj); // result ==> false
```
You will use the same logic for testing whether resulting code comes back true for a date to be defined as true:
```javascript
//string
var obj = "";
var result = Object.isString(obj); // result ==> true

```
In the following code, you can insert a constructor to validate that same constructor:

```javascript
//constructor
var obj = {};
var result = Object.isConstructorFunction(obj); //result ==> false
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

|    Function Named                 |                   Function Description                                  |
|:----------------------------------|:------------------------------------------------------------------------|
| Object.isArray(someArrayObject)                |Static function that tells you whether someArrayObject is an array. Returns true if someArrayObject is an array; otherwise returns false.|
| Object.isDate(someDateObject)                  |Static function that tells you whether someDateObject is a date or not. Returns true if someDateObject is an array; otherwise returns false. |
| Object.isString(someStringObject)              |Static function that tells you whether someStringObject is a string or not. Returns true if someString is an array; otherwise returns false. |
| Object.isNumeric(someNumericObject)            |Static function that tells you whether someNumericObject is numeric or not. Returns true if someNumericObject is an array; otherwise returns false.  |
| Object.isBoolean(someBooleanObject)            |Static function that tells you whether someBooleanObject is a boolean or not. Returns true if someBooleanObject is an array; otherwise returns false. |
| Object.isDefined(someDefinedObject)            |Static function that tells you whether someDefinedObject is defined or not. Returns true if someDefinedObject is an array; otherwise returns false. |
| Object.isRegEx(someRegExObject)                |Static function that tells you whether someRegExObject is defined or not. Returns true if someRegExObject is an array; otherwise returns false. |
| Object.getProperty(somePropertyObject)         |Static function that tells you whether somePropertyObject is caught or not. Returns true if somePropertyObject is an array; otherwise returns false. |
| Object.setProperty(somePropertyObject)         |Static function that tells you whether somePropertyObject is set or not. Returns true if somePropertyObject is an array; otherwise returns false. |
| Object.hasProperty(somePropertyObject)         |Static function that tells you whether somePropertyObject is defined or not. Returns true if somePropertyObject is an array; otherwise returns false. |
| Object.hasFunction(someFunctionObject)         |Static function that tells you whether someFunctionObject is found or not. Returns true if someFunctionObject is an array; otherwise returns false. |
| Object.isFunction(someFunctionObject)          |Static function that tells you whether someFunctionObject is defined or not. Returns true if someFunctionObject is an array; otherwise returns false. |
| Object.isConstructorFunction(someConstructor)  |Static function that tells you whether someConstructor is defined as a constructor. Returns true if someConstructor is an array; otherwise returns false. |
| Object.isDefinedAndNotNull(someObject)         |Static convenience function that determines whether an object is defined and not null. |
| Object.isUndefinedOrNull(someObject)           |Static convenience function that determines whether an object is undefined or null. |
<!--- for all "is" use some object, for the function description figure out how to get a paragraph within using the params and returns
      --->
<!--- TODO: Remember to ask Tonte to whether you use the dot method or parenthesis to finish off the functions.
            Also remember to ask Tonte about the dependencies so the installation is just as mentioned up top.
            Ask about how correct the Synopsis is.
            go throught the steps of making sure the installation --->

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