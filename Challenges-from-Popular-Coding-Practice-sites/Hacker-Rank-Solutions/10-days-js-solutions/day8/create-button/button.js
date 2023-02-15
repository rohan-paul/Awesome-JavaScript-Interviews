var btn = document.getElementById("btn");
        btn.addEventListener("click", function() {
            var currentBtnValue = this.innerHTML;
            this.innerHTML = parseInt(currentBtnValue)++;
        });