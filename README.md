# bytepushers-js-test-utils
Byte Pushers Core JavaScript library that supports core object extensions and general utilities that can be used as base
fundamental classes.
## Installation
**npm install bytepushers-js-obj-extensions**

## Synopsis
Byte Pushers Core JavaScript library that supports common object extensions and general utilities that can be used as base
fundamental classes. This module will be able to decipher and validate code from arrays to be able to tell whether a function is a constructor.
## Code Example
In the following code example, you can include your array as a paramater inside the function to test your code results in an array:
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
You will use the same logic for testing whether resulting code comes back in a date format with this code:
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

|                          Method Called                  |                                             Function Operated                                   |
|:--------------------------------------------------------|:------------------------------------------------------------------------------------------------|
| getInstance(ClassReference) method                      | Returns an instance of the ClassReference with exposed private methods in the "_privates" object|
| getInstance(ClassReference, [ ] );                      | Creates new instance via constructor parameters                                                 |
| ClassReferenceInstance._privates.somePrivateMethodName()| Calls the private method somePrivateMethodName                                                  |
| getInstance(ClassReference) method                      | Returns an instance of the ClassReference with exposed private methods in the "_privates" object|
| getInstance(ClassReference, [ ] );                      | Creates new instance via constructor parameters                                                 |
| ClassReferenceInstance._privates.somePrivateMethodName()| Calls the private method somePrivateMethodName                                                  |
| getInstance(ClassReference) method                      | Returns an instance of the ClassReference with exposed private methods in the "_privates" object|
| getInstance(ClassReference, [ ] );                      | Creates new instance via constructor parameters                                                 |
| ClassReferenceInstance._privates.somePrivateMethodName()| Calls the private method somePrivateMethodName                                                  |



Use dot notation to access private methods. Class content goes inside of the array for the second parameter.
## Tests
When running test within this module, we use Jasmine. For beginners, use this link right [here](https://jasmine.github.io/pages/getting_started.html). This will show you the documenation on how Jasmine works for testing. Now, this is an example in our **Tester.spec.js** file.
```javascript
define(['bytepushers', 'Employee'], function(BytePushers) {
    describe("Tester", function(){
        it('should be able to call private methods', function () {
            var emp = (new BytePushers.Tester()).getInstance(Employee);
            expect(emp).toBeDefined();
            expect(emp._privates).toBeDefined();
            expect(emp._privates["getFirstName"]).toBeDefined();
        });

//In this example we make sure that "emp" is defined after declaring "emp" as a variable.

        it('should be able to create instance via constructor parameters', function () {
            var actualBirthDate = "07/2/1970";
            var expectedAge = new Date().getFullYear() - new Date(actualBirthDate).getFullYear();
            var emp = (new BytePushers.Tester()).getInstance(Employee, ["Tim", "M", "Jones", actualBirthDate, null, "full-time", undefined]);

            expect(emp.getFullName).toBeDefined();
            expect(emp.getFullName()).toEqual("Tim M Jones");
        });

//In this example, we are making sure that we can put in an array as the second parameter and create the new instance

     });
});
```



## Contributors
Byte Pushers
## License
In order to build successfully, ensure the following:
  1.  Use either minified version of modules or normal version of modules in the Gruntfile.js and Karma.conf.js files;
      but not both and not mixed matched.