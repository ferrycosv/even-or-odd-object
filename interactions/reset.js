// hint: use a "change" event
document.getElementById("reset-button")
        .addEventListener('click',  () => {
                console.log("reset request")
                stringSorter.reset();
        });