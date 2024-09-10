

function convertToFeet() {
    
    const feet = parseFloat(document.getElementById('feet').value);
    const yards = parseFloat(document.getElementById('yards').value);
    document.getElementById('result').innerText= 'feet is equal to yards';
}
    
    

function clearFields() {
    document.getElementById("feet").value = "";
    document.getElementById("yards").value = "";
}