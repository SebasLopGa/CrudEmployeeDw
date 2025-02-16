$(document).ready(function () {
    $("#employeeForm").submit(function (e) {
        let isValid = true;
        const errorMessages = [];

        $("input[required]").each(function () {
            if ($(this).val().trim() === "") {
                isValid = false;
                errorMessages.push(`El campo ${$(this).attr("name")} es requerido`);
                $(this).addClass("is-invalid");
            } else {
                $(this).removeClass("is-invalid");
            }
        });

        const name = $("#Name").val();
        if (name) {
            const nameRegex = /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/;
            if (!nameRegex.test(name)) {
                isValid = false;
                errorMessages.push("El nombre solo debe contener letras");
                $("#Name").addClass("is-invalid");
            } else {
                $("#Name").removeClass("is-invalid");
            }
        }

        const birthDate = $("#BirthDate").val();
        if (birthDate) {
            const date = new Date(birthDate);
            if (isNaN(date.getTime())) {
                isValid = false;
                errorMessages.push("Formato de fecha inválido");
                $("#BirthDate").addClass("is-invalid");
            } else {
                $("#BirthDate").removeClass("is-invalid");
            }
        }

        const salary = $("#Salary").val();
        if (salary) {
            if (!/^\d+(\.\d{1,2})?$/.test(salary)) {
                isValid = false;
                errorMessages.push("El salario debe ser un número válido con hasta 2 decimales");
                $("#Salary").addClass("is-invalid");
            } else {
                $("#Salary").removeClass("is-invalid");
            }
        }

        const email = $("#Email").val();
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                isValid = false;
                errorMessages.push("Formato de email inválido");
                $("#Email").addClass("is-invalid");
            } else {
                $("#Email").removeClass("is-invalid");
            }
        }

        if (!isValid) {
            e.preventDefault();
            const errorList = errorMessages.map(msg => `<li>${msg}</li>`).join("");
            $("#validationSummary").html(`<ul class="text-danger">${errorList}</ul>`);
        }
    });
});