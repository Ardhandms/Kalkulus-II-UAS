function crossProduct() {
    let vector1 = document.getElementById("vector1").value.split(",");
    let vector2 = document.getElementById("vector2").value.split(",");
    let result = [];
    result[0] = parseFloat(vector1[1]) * parseFloat(vector2[2]) - parseFloat(vector1[2]) * parseFloat(vector2[1]);
    result[1] = parseFloat(vector1[2]) * parseFloat(vector2[0]) - parseFloat(vector1[0]) * parseFloat(vector2[2]);
    result[2] = parseFloat(vector1[0]) * parseFloat(vector2[1]) - parseFloat(vector1[1]) * parseFloat(vector2[0]);
    document.getElementById("result").value = result[0] + "i + " + result[1] + "j + " + result[2] + "k";
}

function reset() {
    document.getElementById("vector1").value = "";
    document.getElementById("vector2").value = "";
    document.getElementById("result").value = "";
}