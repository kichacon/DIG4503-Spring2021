class Person {
    name = "";
    favoritecolor = "";

    constructor(name, favoritecolor) {
        this.name = name;
        this.favoritecolor = favoritecolor;
    }

    speak() {
        console.log("My name is" + this.name, "and my favorite color is" + this.favoritecolor)
    }
}


const c = new Person();