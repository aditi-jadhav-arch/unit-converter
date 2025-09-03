const inputEl = document.getElementById("input-el") 
const cvtBtn = document.getElementById("cvt-btn")
const lenEl = document.getElementById("len-el")
const volEl = document.getElementById("vol-el")
const massEl = document.getElementById("mass-el")

cvtBtn.addEventListener("click", function() {
    const value = Number(inputEl.value)
    let feet = (value * 3.281).toFixed(3)
    let meter = (value * 0.305).toFixed(3)
    let gallons = (value * 0.264).toFixed(3)
    let litres = (value * 3.785).toFixed(3)
    let pounds = (value * 2.204).toFixed(3)
    let kilos = (value * 0.453).toFixed(3)

    lenEl.textContent = `${value} meters = ${feet} feets | ${value} feets = ${meter} meters`
    volEl.textContent = `${value} litres = ${gallons} gallons | ${value} gallons = ${litres} litres`
    massEl.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`
})