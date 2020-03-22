
document.getElementById("save-button")
        .addEventListener('click', (event) => {
            console.log("executed")
            stringSorter.addString(document.getElementById('input').value)
    });
