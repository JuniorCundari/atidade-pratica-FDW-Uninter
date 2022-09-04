// script para consumir a API do GitHub pegando 3 projetos do meu repositório.

// pega/seleciona a tag de lista ordenada, que é onde será adicionado a seção do portfólio
const ol = document.querySelector('ol')

function getApiReposGitHub() {
// fazendo a requisição para a API do GitHub usando a fetch API do JS
  fetch('https://api.github.com/users/JuniorCundari/repos')
    .then(async response => {
      if(!response.ok) {
        throw new Error(response.status)
      }

      const data = await response.json()

      data.filter((item) => {
        let li = document.createElement('li')

// verifica se o id do repo é igual e acrescenta as tags da seção no corpo do html
        if (item.id === 413651830) {
          li.innerHTML = `
            <div class="container-project">
              <h3>${item.name}</h3>
              <p>Projeto desenvolvido na maratona da Rocketseat.</p>
              <p>É um projeto para o desenvolvedor cuidar e organizar suas finanças.</p>
              <div class="image-project">
                <img src="../assets/dev-finance.jpg" alt="Imagem do Projeto dev finance">
              </div>
              <span>Criação: ${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
              <div class="technologies">
                <h4>Tecnologias usadas:</h4>
                  <img
                  src="../assets/icons8-javascript.svg"
                  alt="Logo JavaScript">
                  <img src="../assets/icons8-html-5.svg"
                    alt="Logo HTML">
                  <img src="../assets/icons8-css3.svg"
                    alt="Logo CSS">
              </div>
              <div class="technologies">
                <h4>Link para o repositório:</h4>
                  <a
                    href="${item.html_url}" 
                    target="_blank"
                    rel="external"
                  >
                    <img
                        src="../assets/icons8-github.svg"
                        alt="Logo GitHub"
                      >
                  </a>
              </div>
            </div>
            `;
            
            ol.appendChild(li);
        } else if(item.id === 446398757) {
          li.innerHTML = `
          <div class="container-project">
            <h3>${item.name}</h3>
            <p>Projeto de página de login.</p>
            <p>Página de login com intuito de praticar.</p>
            <div class="image-project">
              <img src="../assets/login-form.png" alt="Imagem do Projeto login form">
            </div>
            <span>Criação: ${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
            <div class="technologies">
              <h4>Tecnologias usadas:</h4>
              <img src="../assets/icons8-html-5.svg"
                  alt="Logo HTML">
              <img src="../assets/icons8-css3.svg"
                  alt="Logo CSS">
            </div>
            <div class="technologies">
              <h4>Link para o repositório:</h4>
              <a
                  href="${item.html_url}" 
                  target="_blank"
                  rel="external"
              >
                  <img
                    src="../assets/icons8-github.svg"
                    alt="Logo GitHub"
                  >
              </a>
            </div>
          </div>
          `;
            
            ol.appendChild(li);
        } else if(item.id === 449930625) {
          li.innerHTML = `
            <div class="container-project">
              <h3>${item.name}</h3>
              <p>Página de links para redes sociais.</p>
              <p>Projeto desenvolvido com o intuito de praticar.</p>
              <div class="image-project">
                <img src="../assets/social.png" alt="Imagem do Projeto social links tree">
              </div>
              <span>Criação: ${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
              <div class="technologies">
                <h4>Tecnologias usadas:</h4>
                  <img src="../assets/icons8-html-5.svg"
                    alt="Logo HTML">
                  <img src="../assets/icons8-css3.svg"
                    alt="Logo CSS">
              </div>
              <div class="technologies">
                <h4>Link para o repositório:</h4>
                  <a
                    href="${item.html_url}" 
                    target="_blank"
                    rel="external"
                  >
                    <img
                        src="../assets/icons8-github.svg"
                        alt="Logo GitHub"
                      >
                  </a>
              </div>
            </div>
            `;
            
            ol.appendChild(li);
        }
      })
// captura o erro caso tenha
    }).catch((error) => console.log(error))
}

// chamando a função
getApiReposGitHub();
