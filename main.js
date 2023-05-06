var input = document.getElementById("input");
var result = document.getElementById("result");
var label = document.getElementById("label");
var qrCode = document.getElementById("qrCode");
var masterContainer = document.getElementById("masterContainer");

result.addEventListener("click", () => {

    if (document.getElementById("input").value !== "") {
        label.innerHTML = input.value;
        label.style.display = "inline-block"
        qrCode.src = "https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=" + document.getElementById("input").value;
        qrContainer.style.display = "block";
        masterContainer.style.display = "block";
    }
})
