//สร้างตัวแปลไปยังตำแหน่งคอนเทนด์ในเอกสาร HTML
let money = document.getElementById('money');
let person = document.getElementById('person');
let btnCal = document.getElementById('btnCal');
let btnCancel = document.getElementById('btnCancel');
let result = document.getElementById('result');

//ทอสอบตัวแปลที่สร้างไว้ข้างต้นไปยังคอนเทนด์ในเอกสาร HTML รึยัง
//event click ของปุ่ม btnCal
btnCal.addEventListener('click', () => {
    //alert(money.value)
    if (money.value.trim().length == 0) {
        alert('ป้อนเงินด้วย')
    } else if (person.value.trim().length == 0) {
        alert('ป้อนคนด้วย')
    } else {
        //พร้อมคำนวณ
        let moneyshare = Number(money.value) / Number(person.value)
        result.innerHTML = moneyshare.toFixed(2)
    }

})


//event click ของ btnCancel
//btnCancel.addEventListener('click', () => {
//alert(person.value)
// money.value = ''
// person.value = ''
//result.innerHTML = '0.00'
//})

btnCancel.addEventListener('click', clearScreen)
function clearScreen() {
    money.value = ''
    person.value = ''
    result.innerHTML = '0.00'
}