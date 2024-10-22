const date = document.getElementById('date')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')


const today = new Date()
console.log(today);
const weekDays = ["Monday","Tuesday","Wednesday","Friday","Saturday","Sunday"]
const allMonths = ["January","February","March","April","May","June","July","August","October","November","December"]

date.innerHTML = (today.getDate()<10?"0":"") +today.getDate()
// day.innerHTML = today.getDay() 
day.innerHTML = weekDays[today.getDay()-1 ] 
// month.innerHTML = today.getMonth()
month.innerHTML = allMonths[today.getMonth()-1]
year.innerHTML = today.getFullYear()
