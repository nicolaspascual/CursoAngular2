var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        console.log("Name: " + this.name + "\nAge:" + this.age);
    };
    return Person;
}());
