document.getElementById('header').innerHTML = localStorage['header'] || 'Welcome!';   
document.getElementById('edit').innerHTML = localStorage['content'] || 'This text is automatically saved every second. \nType away :)';                                                                           


setInterval(function() {
    localStorage['header'] = document.getElementById('header').innerHTML; 
    localStorage['content'] = document.getElementById('edit').innerHTML; 
}, 1000);

/// By @Affinix
