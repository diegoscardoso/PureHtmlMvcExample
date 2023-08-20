document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("mvc-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        model.name = form.elements.name.value;;
        model.email = form.elements.email.value;;
        model.subscribe = form.elements.subscribe.checked;;
        model.birthdate = form.elements.birthdate.value;

        console.log(model.getFormData());
    });
});