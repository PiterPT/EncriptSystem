 function processText() {
        const input = document.getElementById('input').value;
        const mode = document.getElementById('mode').value;
        const shift = parseInt(document.getElementById('chave').value)||0;
        
        let result = "";

        for (let i = 0; i < input.length; i++) {
            let charCode = input.charCodeAt(i);
            
            if (mode === 'encrypt') {
                result += String.fromCharCode(charCode + shift);
            } else {
                result += String.fromCharCode(charCode - shift);
            }
        }

        document.getElementById('output').value = result;
    }

    function copyResult() {
        const outputText = document.getElementById('output');
        if (!outputText.value) return;
        
        outputText.select();
        document.execCommand('copy');
        
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerText;
        btn.innerText = "Copiado!";
        setTimeout(() => btn.innerText = originalText, 2000);
    }