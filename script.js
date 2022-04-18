const list = document.querySelectorAll('.list');
        const seeBtn = document.querySelector('.seemore');
        const text = document.querySelector('.textor');
        const moreText = document.querySelector('.moreText');
        const topicBtn = document.querySelector('.post');
        const createTopic = document.querySelector('.criar-topico');
        const sendTopic = document.querySelector('.preencher-topico');
        const sentTopic = document.querySelector('.sent');
        const sendBtn = document.querySelector('.sendbtn');
        const sentBtn = document.querySelector('.newPost');
        const oculta = document.querySelector('.oculta');

        const thread = document.querySelector('.colapsado');
        const section = document.querySelector('.commentSec');
        const answers = document.querySelector('.show-answers');

     
        //Função menu sidebar
        function itemAtivo(){
            list.forEach((item) =>
            item.classList.remove('ativado'));
            this.classList.add('ativado');
        }
        list.forEach((item) =>
        item.addEventListener('click', itemAtivo));

        //Função see more
        text.addEventListener('click',(e)=>{
            text.classList.toggle('show-more');
            if(text.classList.contains('show-more'))
            {
                moreText.style.display = "inline";
                seeBtn.style.display = "none";
            }
            else
            {
                moreText.style.display = "none";
                seeBtn.style.display = "inline";
            }
        });

        //Função criar topico
        function topicFunction(){
            sendTopic.style.display = "inline";
            createTopic.style.display = "none";
            sentTopic.style.display = "none";
        }
        topicBtn.addEventListener('click', topicFunction);
        sentBtn.addEventListener('click', topicFunction);
        //Função enviar topico
        function sendFunction(){
            sendTopic.style.display = "none";
            sentTopic.style.display = "inline";
            oculta.style.display = "inline";

        }
        sendBtn.addEventListener('click', sendFunction);

        //Função ver comentários
        function seeComments(){
            if(section.style.display == "none")
            {
                section.style.display = "flex";
            }
            else
            {
                section.style.display = "none";
            }
        }
        answers.addEventListener('click', seeComments);

    
