//Control statement คำสั่งควบคุม
//Selection Statement
//if, if-else, if-else-if, switch
let a = 15;

if (a < 20) {
    console.log('Hello....')

}
//---------------------------------

let b = 5;

if (b == 5) {
    console.log('Wow...')
} else {
    console.log('Wee...')
}

//----------------------------------

let c = 99;

if (c > 100) {
    console.log('Hi')

} else if (c > 80) {
    console.log('Hey')

} else if (c > 50) {
    console.log('Hello')

} else if (c > 30) {
    console.log('Hem')

} else if (c > 0) {
    console.log('Hoo')

} else { //ไม่จำเป็นต้องมี if แปลว่ามี if ไม่ผิด
    console.log('555')
}

//---------------------------------

let d = 55

switch (d) {
    case 2: console.log('aaa')
        break
    case 4, 3: console.log('bbb')
        break
    case 5: console.log('ccc')
    //break
    case 9: console.log('ddd')
        break
    case 12, 88, 55: console.log('eee')
        break
    defult: console.log('fff')
}


//Loop/Iteration/Repeat Statement
//while, do-while, for,  for-in, for-of
let i = 1

while(i <= 5){
    console.log('SAU')
    ++i //i++ , i = i + 1, i += 1
}

//--------------------------------

let j = 1

do{
    console.log('IoT')
    ++j //i++ , i = i + 1, i += 1
}while( j <= 5)

//-------------------------------

for(let k = 1; k <= 5; k++){
    console.log('DTI')
}

console.log(i)
console.log(j)
console.log(k)