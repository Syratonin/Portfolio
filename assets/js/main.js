function showPopup(message) {
    alert(message);
}

function validateEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

function handleFormSubmit(ev) {

    const e = document.getElementById("email").value;
    let m = [];

    if (!validateEmail(e)) {
        m.push("Please enter a valid email");
        ev.preventDefault();
    }

    showPopup(
        m.length
            ? m.join("\n")
            : "OK"
    );
}