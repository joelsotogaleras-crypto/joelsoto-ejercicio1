function enmarcarTexto(texto) {
    
    const palabras = texto.trim().split(/\s+/);
    
    if (palabras.length === 1 && palabras[0] === "") {
        console.log("La cadena está vacía.");
        return;
    }
    
    
    let maxLen = 0;
    for (const palabra of palabras) {
        if (palabra.length > maxLen) {
            maxLen = palabra.length;
        }
    }
    
    
    const anchoTotal = maxLen + 6;
    
    
    const borde = "*".repeat(anchoTotal);
    
    
    console.log(borde);
    for (const palabra of palabras) {
    
        const palabraAlineada = palabra.padEnd(maxLen, " ");
        console.log(`*  ${palabraAlineada}  *`);
    }
    console.log(borde);
}


const textoPrueba = "Hola mundo desde el reto de programacion";
enmarcarTexto(textoPrueba);