const cost = document.getElementById('cost')
const tip = document.getElementById('tip')
const split = document.getElementById('split')
const total = document.getElementById('total')



total.addEventListener('click', calculateTip)

function calculateTip(){
  const costValue = cost.value
  const tipValue = tip.value
  const splitValue = split.value

  if(costValue === '' || tipValue === '' || splitValue === ''){
    total.innerHTML = "INSERT NUMBERS!"
  } else {
    const tips = costValue * (tipValue / 100)
    const totalTip = Number(costValue) + Number(tips)
    const afterSplit = totalTip / Number(splitValue)

    const fixed = afterSplit.toFixed(2)

    total.innerHTML = '$' + fixed
  }

}
