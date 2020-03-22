// hint: use a "change" event
document.getElementById("active-array-selection")
        .addEventListener('change', (event) =>  { 
            stringSorter.setActive(event)
            stringSorter.renderActiveList();
        });