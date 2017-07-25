import { ModTest } from './module';

let modTest = new ModTest(1, 2);
modTest.test();

function log(){
    console.log("Hello World");
}
log();

let count = 5;
//count = 'a';

let a : number;
let b : boolean;
let c : string;
let d : any;
let e : number[] = [ 1, 2, 3];
let f : any[] = [ 1, true, 'a', false];

enum color { Red, Green, Blue};
let bgColor = color.Blue;

let str: string = 'Hello World';
let strTest = str.length;

let anyType;
anyType = 'abcd';
(<string>anyType).length;
(anyType as string).length;

//Arrow functions
let doLog = (message) => {
    console.log(message);
}