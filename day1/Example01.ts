class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    print(){
        console.log("Name: "+this.name+"\nAge:" +this.age);
    }
}