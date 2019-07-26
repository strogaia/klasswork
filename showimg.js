function show(n){
    document.body.innerHTML = ' ' // стирает все в теле
    document.write(`
    <p align="center">
        <img src="https://picsum.photos/id/10${n}/400/300">
    </p>
    <hr>
    <p align="center">
        <button onclick="show(1)">1</button>
        <button onclick="show(2)">2</button>
        <button onclick="show(3)">3</button>
    </p>
    `)
}

