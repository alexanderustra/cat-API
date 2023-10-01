document.addEventListener('DOMContentLoaded',()=>{
    
    function generateFact() {
        //--------------------- Random Fact ------------------------//
        fetch('https://catfact.ninja/fact?max_length=100', {
        method: 'GET', 
        headers: {
            'Accept': 'application/json',
            'X-CSRF-TOKEN': 'HxLjw079zaqsD2xiyBEqpcJXlCZtFHkfli1ed2q7'
        }
})
        .then(response => response.json())
        .then(data => {
            document.getElementById('fact-container').innerHTML = data.fact;
        })
        .catch(error => {
            console.error('Se produjo un error:', error);
        });
    }
    // --------------- Random Img -------------------//
    function generateImg() {
        document.getElementById('image').src = 'loading.gif';
      
        setTimeout(function () {
          const randomImg = 'https://cataas.com/cat/gif?' + Math.random();
          document.getElementById('image').src = randomImg;
        }, 200); 
      }
    
    document.getElementById('new-fact').addEventListener('click',()=>{
        generateFact();
        generateImg()
    })
})