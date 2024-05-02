document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("registration-form");
    var clearButton = document.getElementById("clear-button");

    clearButton.addEventListener("click", function() {
        form.reset();
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var mail = document.getElementById("mail").value;
        var grade = document.getElementById("grade").value;
        var comment = document.getElementById("comment").value;

        if (validate(mail, grade, comment)) {
            alert("Благодарим за Вашу оценку!")
        } else {
            alert("Пожалуйста, введите корректные данные.")
        }
    });

    function validate(mail, grade, comment) {
        var valid = true;

        if (mail.indexOf("@") !== -1) {
            document.getElementById("mail").style.backgroundColor = "";
        } else {
            document.getElementById("mail").style.backgroundColor = "brown";
            valid = false;
        }

        if (typeof grade !== 'number' || !Number.isInteger(grade)) {
            document.getElementById("grade").style.backgroundColor = "brown";
            valid = false;
        } else {
            document.getElementById("grade").style.backgroundColor = "";
        }

        if (comment.length < 5) {
            document.getElementById("comment").style.backgroundColor = "brown";
            valid = false;
        } else {
            document.getElementById("comment").style.backgroundColor = "";
        }

        return valid;
    }
});
