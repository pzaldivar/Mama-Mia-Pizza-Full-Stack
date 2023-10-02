// Alert Box Display Success/Failure
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search)

    if (urlParams.has('success')) {
        alert('Reservation successful')
    } else if (urlParams.has('error')) {
        alert('Unable to reserve. Please call 832-555-555 to make a reservation.')
    }
}


// Tabbed Menu
function openMenu(event, menuName) {
    let menuArray = document.getElementsByClassName("menu")
    for (i = 0; i < menuArray.length; i++) {
        menuArray[i].style.display = 'none'
    }
    let tablinks = document.getElementsByClassName("tablink")
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active-tab')
    }

    document.getElementById(menuName).style.display = 'block'
    event.currentTarget.classList.add('active-tab')
}

document.getElementById("mainlink").click()