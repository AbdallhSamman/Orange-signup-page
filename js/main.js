let subBtn = document.querySelector('#subBtn')
let email = document.querySelector('.inEmail')
let pass = document.querySelector('.inPass')
let mobileNum = document.querySelector('.inMobile')
let agree = document.querySelector('.checkAgree')
let Alert = document.querySelectorAll('.alartMessage')
let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
let passPattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,8}$)')
let mobilPattern = /^[0][7][7][0-9]{7}$/

subBtn.addEventListener('click', function () {
  try {
    if (email.value === '') {
      Alert[0].innerHTML = 'This filed is Required to fill'
    } else if (email.value.match(emailPattern)) {
      Alert[0].innerHTML = ''
    } else if (email.value.match(emailPattern) !== emailPattern) {
      throw (err = 'this email is not vaild')
    }
  } catch (error) {
    Alert[0].innerHTML = error
  }

  try {
    if (pass.value === '') {
      Alert[1].innerHTML = 'This filed is Required to fill'
    } else if (pass.value.match(passPattern)) {
      Alert[1].innerHTML = ''
    } else if (email.value.match(passPattern) !== passPattern) {
      throw (err = `your passwor should contain:
                   1-at least one capitlaized charactar 
                   2-at least one lowercase charactar 
                   3-at least one number 
                   4-it should be between 6-8 charactar`)
    }
  } catch (error) {
    Alert[1].innerHTML = error
  }

  try {
    if (mobileNum.value === '') {
      Alert[2].innerHTML = 'This filed is Required to fill'
    } else if (mobileNum.value.match(mobilPattern)) {
      Alert[2].innerHTML = ''
    } else if (mobileNum.value.match(mobilPattern) !== mobilPattern) {
      throw (err = 'this mobile number is not vaild *must start with 077')
    }
  } catch (error) {
    Alert[2].innerHTML = error
  }
  try {
    if (agree.checked === true) {
      Alert[3].innerHTML = ''
    } else if (agree.checked === false) {
      Alert[3].innerHTML = 'this box must be checked'
    }
  } catch (error) {}
})
