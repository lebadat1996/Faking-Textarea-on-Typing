let stringFunny = "BẠN CÓ BIẾT KHÔNG ? BẠN LÀ ĐỒ NGỐC!!";
let count = 1;

function showText() {
    setTimeout(function () {
        if (count <= stringFunny.length) {
            document.getElementById("text-area").value = stringFunny.substr(0, count);
            count++;
        } else {
            count = 1
            showText();
        }
    },0)
}

function playGame() {
    window.addEventListener("keydown", showText);
}