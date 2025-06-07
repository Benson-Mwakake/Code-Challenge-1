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

    const totalAmount = amountToSend+fee

    console.log(`Sending KES ${amountToSend}`)
    console.log(`Calculated Transaction Fee: KES ${fee}`)
    console.log(`Total amount to be debited: KES ${totalAmount}`)
    console.log("Send Money Securely!")

}

const sendInput = prompt("Hello customer, How much would you like to transact today")
const amountToSend = Number(sendInput);
estimateTransactionFee(amountToSend);