const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const resultDiv= document.getElementById("result");



async function fetchCurrency (){
    try {
        const response = await fetch (`https://v6.exchangerate-api.com/v6/bdf8c44fc28bfeea017cb969/codes`)
        if (!response.ok) throw new Error (`Error when fetching currencies: ${response.status}`);

        const data = await response.json();
        const currencies = data.supported_codes ;
        console.log(currencies) 
        // example: 0:["AED","UAE Dirham"]
        currencies.forEach(([code, name]) => {
            const option1 = document.createElement("option");
            const option2 = document.createElement("option");

            option1.value =option2.value = code;
            option1.innerText = option2.innerText= name;
            fromCurrency.appendChild(option1);
            toCurrency.appendChild(option2);
        })

    }catch (error) {
        console.log("Error while fetching", error)
    }
};

fetchCurrency()

async function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(amountInput.value);
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/bdf8c44fc28bfeea017cb969/pair/${from}/${to}/${amount}`)
        if (!response.ok) throw new Error (`Error when fetching currencies: ${response.status}`);

        const data = await response.json();
        const convertedAmount = data.conversion_result;

        resultDiv.innerText = (`${convertedAmount}`);
    } catch (error) {
        resultDiv.textContent = "Error fetching conversion rate.";
    }



    };
    document.getElementById("convert").addEventListener("click", convertCurrency);