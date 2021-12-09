const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const amountOne = document.querySelector('.amount-one');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
	const URL = `https://exchange-rates.abstractapi.com/v1/live/?api_key=5c93406a97294a8f82ae28db4ea50bfc&base=${currencyOne.value}&target=${currencyTwo.value}`;
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			const currency1 = currencyOne.value;
			const currency2 = currencyTwo.value;
			const rate = data.exchange_rates[currency2];
			rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`;
			amountTwo.value = (amountOne.value * rate).toFixed(2);
		});
};
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
const swap = () => {
	const currency1 = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = currency1;
	calculate();
};

swapBtn.addEventListener('click', swap);
calculate();
