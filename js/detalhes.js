export { Detalhes };

class Detalhes {
  qrCode() {
    this.definicao();
    const social = document.querySelectorAll("button");
    const qr = document.getElementById("qr");

    social.forEach((rede) => {
      rede.addEventListener("mouseenter", () => mostraQR(rede));
    });
    function mostraQR(rede) {
      switch (rede.getAttribute("id")) {
        case "linkedin":
          qr.innerHTML = ` <img src="../assets/qr/qrcode_linkedinho.png" alt="">'`;
          break;
        case "instagram":
          qr.innerHTML = ` <img src="../assets/qr/qrcode_insta.png" alt="">'`;
          break;
        case "github":
          qr.innerHTML = ` <img src="../assets/qr/qrcode_github.png" alt="">'`;
          break;

        default:
          qr.innerHTML = "";
          break;
      }
    }
  }

  definicao() {
    const niveis = document.querySelectorAll(".nivel");
    const definicao = document.getElementById("definicao");

    niveis.forEach((nivel) => {
      const pontos = Array.from(nivel.children);
      pontos[0].classList.add("fraco");
      pontos[1].classList.add("medio");
      pontos[2].classList.add("bom");
      pontos[3].classList.add("excepcional");
      pontos[4].classList.add("extraordinario");

      pontos.map((ponto) => {
        ponto.addEventListener("mouseenter", () => {
          descricao(ponto);
        });
      });

      function descricao(ponto) {
        switch (ponto.className) {
          case "xp fraco":
            definicao.innerHTML = `<p>
                            fraco: Noção completamente básica no assunto
                        </p>`;
            break;
          case "xp medio":
            definicao.innerHTML = `<p>
                            Médio: Consegue manter um assunto sobre, pórem nada muito profundo e técnico
                        </p>`;
            break;
          case " bom":
            definicao.innerHTML = `<p>
                            Bom: Já tem alguns anos de experiencia no assunto
                        </p>`;
            break;
          case "excepcional":
            definicao.innerHTML = `<p>
                            Excepcional: Conhecimento mais minucioso sobre o assunto, capaz de palestar por horas 
                        </p>`;
            break;
          case "extraordinario":
            definicao.innerHTML = `<p>
                            Extraordinário: Conhecimento absoluto, capaz de escrever um livro de mil páginas sobre o assunto e ainda ter o que falar
                        </p>`;
            break;

          default:
            break;
        }
      }
    });
  }
}
