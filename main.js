$(document).ready(function() {

    $('#telefone').mask('(00) 0000-00009', { placeholder: "(00) 0000-0000" });

    $('#formulario').validate({
        rules: {
            nome: 'required',
            email: {
                required: true,
                email: true
            },
            telefone: {
                minlength: 15
            },
            mensagem: 'required'
        },
        messages: {
            nome: 'Por favor, informe o seu nome',
            email: {
                required: 'Por favor, informe o seu e-mail',
                email: 'Por favor, informe um e-mail válido'
            },
            telefone: {
                minlength: 'Por favor, informe um número de telefone válido'
            },
            mensagem: 'Por favor, escreva a sua mensagem'
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});