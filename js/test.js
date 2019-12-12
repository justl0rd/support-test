(function () {
    const btn = document.querySelectorAll('.test-btn');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function(){

            btn[i].parentElement.parentElement.style.display = "none";

            document.getElementById(`question-${btn[i].dataset.next}`).style.display = "block";
        });

    }

})();