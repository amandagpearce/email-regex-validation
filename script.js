let form = document.getElementById('form');

let Validate = () => {
    let warning = document.getElementById('warning');
    var email = document.getElementById('email');
    var provRgx = /^[\w-\.]+@([gmail+\.]|[outlook+\.]|[hotmail+\.])+[\w-]{2,4}$/;

    if(!email.value.match(provRgx)) 
        {
        event.preventDefault();
        warning.classList.remove('hidden');
        email.focus();
        return false;
        }

    else
        {  
        form.submit();
        }
    }