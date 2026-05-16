function GymInventory(){
    let equipment = [
        { name: "Treadmill", quantity: 5, condition: "Good" },
        { name: "Dumbbells", quantity: 30, condition: "Excellent" },
        { name: "Bench Press", quantity: 3, condition: "Good" },
        { name: "Yoga Mats", quantity: 20, condition: "Fair" },
        { name: "Resistance Bands", quantity: 15, condition: "Excellent" }
      ]
    return(
        <>
        {equipment.map(i => (
            <div>
                <p>name: {i.name}</p>
                <p>quantity: {i.quantity}</p>
                <p>condition: {i.condition}</p>
            </div>
        ))};
        </>
    )
}
export default GymInventory