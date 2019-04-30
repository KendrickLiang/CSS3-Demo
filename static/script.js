var left = document.getElementById('l_arr')
var right = document.getElementById('r_arr')
/** @type {HTMLImageElement} */
var image = document.getElementById('image')

// Current active navbar option
var active = 0

/**
* Function to change slides to the right. Originally made to fade in and out.
*/
function fade_right() {
    console.log('clicked')
    var num = Number(image.src.substr(image.src.indexOf('(') + 1, image.src.indexOf(')') - image.src.indexOf('(') - 1)) // the number of the slide
    var format = 'jpg'
    if (num >= 6) { // the final slide
        image.src = `/static/css3 (7).jpg`
        right.style.opacity = 0.5 // make right arrow dimmer to show disabled arrow
        active = 6
        change_active() // change current active navbar
        return
    }
    num += 1
    left.style.opacity = 1
    image.src = `/static/css3 (${num}).${format}` // change slide image
    if (num == 0 || num == 1 || num == 2 || num == 3 || num == 4 || num == 6 || num == 7) { // top nav sections
      active += 1
    }
    change_active() // change current active navbar
    change() // set image size
}

/**
* Function to change slides to the left. Originally made to fade in and out.
*/
function fade_left() {
    var num = Number(image.src.substr(image.src.indexOf('(') + 1, image.src.indexOf(')') - image.src.indexOf('(') - 1)) // number of slide
    var format = 'jpg'
    if (num <= 1) {
        image.src = `/static/css3 (0).jpg`
        left.style.opacity = 0.5 // dim arrow to show disable arrow
        active = 0
        change_active() // change current active navbar
        return
    }
    num -= 1
    right.style.opacity = 1
    image.src = `/static/css3 (${num}).${format}` // change slide image
    if (num == 0 || num == 1 || num == 2 || num == 3 || num == 4 || num == 6 || num == 7)  { // top nav sections
      active -= 1
    }
    change_active() //change current active navbar
    change()
}

/**
* Function to change image sizes
*/
function change() {
    var sizes = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    }
    image.width = sizes.x + 300
    image.height = sizes.y + 360
}

/**
* Function to change the current active navbar
*/
function change_active() {
  var links = document.getElementsByClassName('topnav')[0].children // the links (sections)
  for (i = 0; i < links.length; i++) {
    if (i == active) {
      links[i].setAttribute('class', 'active') // add class active
    }else{
      links[i].setAttribute('class', '') // remove class active
    }
  }
}

/**
* Function to jump to given slide
*/
function jump_to(jump) {
    var starter = `/static/css3 (`
    left.style.opacity = 1
    right.style.opacity = 1
    if (jump == 0) {
        image.src = `${starter}0).jpg`
        left.style.opacity = 0.5
        active = 0
    }
    if (jump == 1) {
        image.src = `${starter}1).jpg`
        active = 1
    }
    if (jump == 2) {
        image.src = `${starter}2).jpg`
        active = 2
    }
    if (jump == 3) {
        image.src = `${starter}3).jpg`
        active = 3
    }
    if (jump == 4) {
        image.src = `${starter}4).jpg`
        active = 4
    }
    if (jump == 5) {
        image.src = `${starter}6).jpg`
        active = 5
    }
    if (jump == 6) {
        image.src = `${starter}7).jpg`
        active = 6
    }
    change_active() // change current active navbar
}

/**
 * Changes image based on mousewheel scroll
 * @param {MouseEvent} e a mouse wheel scroll
 */
function wheel_change(e) {
    e.preventDefault()
    if (e.deltaY < 0) {
        fade_left()
    }else{
        fade_right()
    }
    return
}

change() // initial change to set height and width

right.addEventListener('click', fade_right )
left.addEventListener('click', fade_left )

window.onresize = change()

window.onwheel = wheel_change
