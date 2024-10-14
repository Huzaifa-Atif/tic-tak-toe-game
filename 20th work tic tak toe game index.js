var game = true;

function handleClick(cell) {
    if (game === true) {
        cell.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/009/663/249/original/tick-icon-transparent-free-png.png')";
        cell.style.backgroundSize = "cover"
    } else {
        cell.style.backgroundImage = "url('https://www.clipartmax.com/png/full/388-3887666_wrong-icon-with-png-and-vector-format-for-free-unlimited-wrong-icon.png')";
        cell.style.backgroundSize = "cover"
    }
    game = !game; 
    console.log(game); 
}







