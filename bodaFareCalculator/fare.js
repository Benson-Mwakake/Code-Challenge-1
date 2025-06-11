function calculateBodaFare(distanceInKm){
    const baseFare = 50;
    const chargePerKm = 15;

    const totalKmFee = chargePerKm*distanceInKm
    const totalFare = baseFare + (distanceInKm * chargePerKm)

    const outputDiv = document.getElementById("output");


    outputDiv.innerHTML += `Uko Kwote? Io ni ${distanceInKm} km<br>`;
    outputDiv.innerHTML += `Ukikalia Pikipiki: KES ${baseFare}<br>`;
    outputDiv.innerHTML += `Mpaka Uko: KES ${totalKmFee}<br>`;
    outputDiv.innerHTML += `<strong>Total: KES ${totalFare}</strong><br>`;
    outputDiv.innerHTML += `Panda Pikipiki!<br>`;
}

const BodaRide =prompt("Karibu! Unataka kupelekwa wapi leo?")
const distanceInKm = Number(BodaRide);
calculateBodaFare(distanceInKm);

