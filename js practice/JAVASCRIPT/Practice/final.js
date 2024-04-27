// Wrap your code in an event listener for DOMContentLoaded to ensure it runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    var textInput = document.getElementById("input");
    var result = document.getElementById("result");

    function showOutput() {
        result.textContent = textInput.value;
    }
});
