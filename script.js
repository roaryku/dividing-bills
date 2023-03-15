const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const food = document.querySelector("#food").value;
    const house = document.querySelector("#house").value;
    const people = document.querySelector("#people").value;

    if (bill === "" || food === "" || house === "" || people === "" || people < 1) {
        Swal.fire('Please enter your information!')
    }

    let billPerPerson = bill / people;
    let totalFood = food / people;
    let totalHouse = house / people;
    let totalSum = billPerPerson + totalFood + totalHouse;
    
    billPerPerson = billPerPerson.toFixed(3);
    totalFood = totalFood.toFixed(3);
    totalHouse = totalHouse.toFixed(3);
    totalSum = totalSum.toFixed(3);

    document.querySelector("#dividedBill").textContent = billPerPerson;
    document.querySelector("#dividedfood").textContent = totalFood;
    document.querySelector("#dividedHouse").textContent = totalHouse;
    document.querySelector("#allTogether").textContent = totalSum;
}
