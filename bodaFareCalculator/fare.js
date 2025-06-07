function calculateBodaFare(distanceInKm){
    const baseFare = 50;
    const chargePerKm = 15;

    const totalKmFee = chargePerKm*distanceInKm
    const totalFare = baseFare + (distanceInKm * chargePerKm)

    console.log(`Uko Kwote? Io ni ${distanceInKm} km`)
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`)
    console.log(`Mpaka Uko: KES ${totalKmFee}`)
    console.log(`Total: KES ${totalFare}`)
    console.log("Panda Pikipiki!")
}

const BodaRide =prompt("Karibu! Unataka kupelekwa wapi leo?")
const distanceInKm = Number(BodaRide);
calculateBodaFare(distanceInKm);