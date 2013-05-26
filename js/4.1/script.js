function run() {
    var line = document.getElementById('line');

    line.style.width = document.getElementById('width').value;
    line.style.height = document.getElementById('height').value;

    var inputs = document.getElementsByName("margin");
    var selectedValue = -1;
    var input_len = inputs.length;
    for (var i = 0; i < input_len; i++) {
        if (inputs[i].checked)
        {
            selectedValue = inputs[i].value;
            break; // Не забываем выходить из цикла, если искомое значение получено
        }
    }

    line.className = selectedValue;
//    alert(document.getElementById('margin').value);

}