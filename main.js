//Facade - повторення викликів функцій загортаємо в окрему функцію

function logger(string) {
    console.log(string)
}

function sum(a, b){
    return a + b
}

function powSq(a) {
    return a * a
}

const total = sum(1, 3)
const pow = powSq(total)
logger(pow.toString())

function allIn(a, b) {
    const total = sum(a, b)
    const pow = powSq(total)
    logger(pow.toString())
}

allIn(1, 3)

//Proxy - можливість огорнути одну функцію в іншу, результат не змінний,
    //наприклад в одному з випадків потрібно вивести зп в гривнях

function convertToUAH(value) {
    return value * 25.9
}

function salary() {
    return 700 //$
}

console.log(salary())
console.log(convertToUAH(salary()))
console.log(salary())

//Composer 

const taxesUkraine = {
    PDV: 0.2
}

const taxesUSA = {
    PDV: 0.08
}

function composeTaxes(country1, country2) {
    const commonPDV = country1.PDV + (country2 ? country2.PDV : 0 )
    return (total) => {
       return total * commonPDV
    }
}

const getMyTaxes = composeTaxes(taxesUkraine, taxesUSA)
const getSheTaxes = composeTaxes(taxesUkraine)
console.log(getMyTaxes(1000))
console.log(getSheTaxes(1000))  

//Decorator - використовують для виділення чогось одного з загальної маси

function disabledBUtton(button) {
    button.button.setAttribute('disabled', true)
    return button
}

function btnText(button, text) {
    button.button.innerText = text
    return button
}

function btnColor(button, color) {
    button.button.style.backgroundColor = color
    return button
}

class Button {
    constructor(){
        this.button = document.createElement('button')
        this.button.innerText = 'Button'
        document.body.append(this.button)
    }
}

const button1 = new Button()

const button2 = disabledBUtton(new Button())

const button3 = btnColor(new Button(), 'yellow')

const button4 = btnText(new Button(),'button#4')

const button5 = disabledBUtton(btnColor(new Button(), 'blue'))

//Command - дуже часто використовується для опису команд пов*язаних з клавіатурою

const value = ['Hello World', 'Hello Wor', 'Hello']

const commands = {
    'forward': () => {
        value[1] = 'Hello World'
        value[0] = null
        value[2] = 'Hello Wor'
    },
    'back': () => {
        value[1] = 'Hello '
        value[0] = 'Hello wor'
        value[2] = 'Hel'
    }
}

function execute(commandName, ...params){
    commands[commandName](params)
}