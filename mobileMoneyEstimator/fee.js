function estimateTransactionFee(amountToSend){

    const baseFee = 0.015;
    const minFee = 10;
    const maxFee = 70;

    let fee = amountToSend * baseFee;

    if(fee<minFee){
        fee = minFee
    }else if(fee>maxFee) {
        fee = maxFee
    }

    const outputDiv = document.getElementById("output");

    const totalAmount = amountToSend+fee

    outputDiv.innerHTML += `Sending KES ${amountToSend}<br>`;
    outputDiv.innerHTML += `Calculated Transaction Fee: KES ${fee}<br>`;
    outputDiv.innerHTML += `Total amount to be debited: KES ${totalAmount}<br>`;
    outputDiv.innerHTML += `Send Money Securely!<br>`;

}

const sendInput = prompt("Hello customer, How much would you like to transact today")
const amountToSend = Number(sendInput);
estimateTransactionFee(amountToSend);