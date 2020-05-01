
const url = 'https://prime.exchangerate-api.com/v5/d9626b876f419de699340dfd/latest/'

const currency_1 = document.getElementById('currency-one')
const currency_2 = document.getElementById('currency-two')
const amount_1 = document.getElementById('amount-one')
const amount_2 = document.getElementById('amount-two')
const swap = document.getElementById('swap')

function convert() {
    const currency_1_val = currency_1.value;
    fetch(url + currency_1_val)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates
            console.log(rate)

            //Grad cur_2 value
            const currency_2_val = currency_2.value;
            console.log(rate[currency_2_val])

            document.getElementById('amount-two').value = (rate[currency_2_val] * amount_1.value).toFixed(2)

            document.getElementById('rate').innerText = `1 ${currency_1.value} = ${rate[currency_2_val]} ${currency_2.value}`
        })
}

function swapFun() {
    const temp = currency_1.value;
    currency_1.value = currency_2.value;
    currency_2.value = temp

    convert()
}

currency_1.addEventListener('change', convert)
currency_2.addEventListener('change', convert)
amount_1.addEventListener('input', convert)
amount_2.addEventListener('input', convert)
swap.addEventListener('click', swapFun)