export { HotBar };

class HotBar {

 
  legenda = document.getElementById('pagina_nome');
  hotBar = document.getElementById('hot_bar');
  
  pag = document.querySelectorAll('.menu_bar button');
  

  nomeDaPagina() {
    this.setinha();
    this.mudarSessao()

    this.pag.forEach((icone) => {
      icone.addEventListener('mouseenter', () => {
        console.log();
        switch (icone.getAttribute('id')) {
          case 'telaPrincipal':
            this.legenda.textContent = 'Tela Principal';
            break;


          case 'sobreMim':
            this.legenda.textContent = 'Sobre Mim';
            break;

          case 'vitrineDeProjetos':
            this.legenda.textContent = 'Vitrine de Projetos';
            break;

          case 'contato':
            this.legenda.textContent = 'Fale comigo';
            break;

          default:
            break;
        }
      });
    });
  }

  setinha() {
    const slots = this.hotBar.querySelectorAll('.slot');
    let qualSlot = 0;
    window.addEventListener('keydown', (chave) => {
      
      selecionado(chave.key);
    }) 
    const setinhaNome = () => {
      switch (this.pag[qualSlot]?.getAttribute('id')) {
        case 'telaPrincipal':
          this.legenda.textContent = 'Tela Principal';
          
          break;

          case 'sobreMim':
          this.legenda.textContent = 'Sobre Mim';
          break;

          case 'vitrineDeProjetos':
          this.legenda.textContent = 'Vitrine de Projetos';
          break;
          
        case 'contato':
          this.legenda.textContent = 'Fale comigo';
          break;
          
        default:
          break;
      }
    };
    
    function selecionado(chave) {
      
      if (qualSlot <= -1 || qualSlot >= 10) {
        qualSlot = 0;
        
        return;
      }
      --qualSlot;
      
      if (chave == 'ArrowLeft') {
        
        --qualSlot;
        slots.forEach((slot) => {
          slot.removeAttribute('id', 'selecionado');
        });

        setinhaNome();
        slots[qualSlot]?.setAttribute('id', 'selecionado');
      }

      if (chave == 'ArrowRight') {
       
        slots.forEach((slot) => {
          slot.removeAttribute('id', 'selecionado');
        });
        ++qualSlot;
        slots[qualSlot]?.setAttribute('id', 'selecionado');
        setinhaNome();
      }

      if(chave == 'Enter'){
        slots.forEach((slot)=>{
          if(slot.hasAttribute('id', 'selecionado')){
            slot.querySelector('button').click()
            
          }
        }

        )
      }

      ++qualSlot;
    }
  }
  
  mudarSessao(){
    const pag= this.pag
    
    pag.forEach((butao)=>{
      butao.addEventListener('click', ()=>{this.selecao(butao)})});
  }
  
  selecao(butao){
       
        let ID =  butao.getAttribute('id')
        const sect = Array.from(document.querySelectorAll('section'))
        let selecionarTela = ()=>{
           
           sect[0].setAttribute('class', 'naoSelecionado')
           sect[1].setAttribute('class', 'naoSelecionado')
           sect[2].setAttribute('class', 'naoSelecionado')
           sect[3].setAttribute('class', 'naoSelecionado')
           
          }
          
          switch (ID) {
            case 'telaPrincipal':
              selecionarTela()
              sect[0].removeAttribute('class', 'naoSelecionado')
              break
              case 'sobreMim':
                selecionarTela()
                sect[1].removeAttribute('class', 'naoSelecionado')
      
                break;

                case 'contato':
                  selecionarTela()
                  sect[2].removeAttribute('class', 'naoSelecionado')
                break;

              case 'vitrineDeProjetos':
                selecionarTela()
                sect[3].removeAttribute('class', 'naoSelecionado')
              break;


              default:
                break;
            }
        
           
            
    }
  
  
  
}


