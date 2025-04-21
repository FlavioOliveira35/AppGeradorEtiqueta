    function atualizaCodigo22() {
      const codigo11 = document.getElementById("codigo11").value;
      const codigo22 = document.getElementById("codigo22");
      codigo22.innerHTML = "";
      let opcoesc = [];
      if (codigo11 === "Florianopolis") {
        opcoesc = ["", "Florianópolis","Biguaçu","Palhoça","São Jose","Criciuma","Içara","Tubarão","Imbituba","Garopaba"];
      } else if (codigo11 === "Blumenau") {
        opcoesc = ["", "Blumenau", "Itajai","Navegantes","camboriu","Balneario Camboriu","Brusque","Pomerode","Rio do Sul","Gaspar","Indaial"];
      } else if (codigo11 === "Joinville") {
        opcoesc = ["", "Joinville", "Jaragua do Sul","São Bento do Sul","Mafra"];
      } else if (codigo11 === "Chapeco") {
        opcoesc = ["", "Chapeco", "Concórdia","Capinzal","Fraiburgo"];
      } else if (codigo11 === "Lages") {
        opcoesc = ["", "Lages"];     
      } else {
        opcoesc = ["-- Selecione Cluster primeiro --"];
      }
      opcoesc.forEach(opcaoc => {
        const optc = document.createElement("option");
        optc.text = opcaoc;
        codigo22.add(optc);
      });
    }

    function atualizaCodigo22222() {
      const codigo11111 = document.getElementById("codigo11111").value;
      const codigo22222 = document.getElementById("codigo22222");
      codigo22222.innerHTML = "";
      let opcoersu = [];
      if (codigo11111 === "Curitiba") {
        opcoersu = ["", "Curitiba","São Jose dos Pinhais","Pinhais","Colombo","Campo Largo","Araucaria"];
      } else if (codigo11111 === "Porto Alegre") {
        opcoersu = ["", "Porto Alegre", "Tramandai","Capao da Canoa","Osorio","Guaiba","Xangri la","Viamão","Torres","Charqueadas"];
      } else if (codigo11111 === "Londrina") {
        opcoersu = ["", "Londrina", "Apucarana","Rolandia","Arapongas","cambe"];
      } else if (codigo11111 === "Canoas") {
        opcoersu = ["", "Canoas", "Esteio","Cachoeirinha","Gravatai","Alvorada"];
      } else if (codigo11111 === "Maringa") {
        opcoersu = ["", "Maringa","Campo Mourão","Cianorte","Amuarama","Marialva","Paranavai"];
      } else if (codigo11111 === "Caxias do Sul") {
        opcoersu = ["", "Caxias do Sul","Erechim","Lajeado","Vacaria","Carazinho","São Marcos","Carlos Barbosa","Flores da Cunha","Garibaldi","Lagoa Vermelha","Gramado","Canela","Veranopolis","Estrela","Nova Petropolis","Sarandi","Teutonia"]; 
      } else if (codigo11111 === "Santa Maria") {
        opcoersu = ["", "Cachoeira do Sul","Santa Maria","Uruguaiana","Ijui","Santana do Livramento","Alegrete","Santo Angelo","Verancio Aires","Santa Rsoa","Tres de Maio","Palmeira das Missoes","Sant Ana do Livramento"]; 
      } else if (codigo11111 === "Novo hamburgo") {
        opcoersu = ["", "Novo hamburgo","São Leopoldo","Ivoti","Taquara","Dois Irmãos","Igrejinha","Campo Bom","Estancia Velha"];
      } else if (codigo11111 === "Foz do Iguaçu") {
        opcoersu = ["", "Foz do Iguaçu"];  
      } else if (codigo11111 === "Cascavel") {
        opcoersu = ["", "Cascavel","Toledo","Pato Branco","FranciscoBeltrão"];  
      } else if (codigo11111 === "Pelotas") {
        opcoersu = ["", "Pelotas","bage","Camaqua"];
      } else if (codigo11111 === "Ponta Grossa") {
        opcoersu = ["", "Ponta Grossa","Guarapuava"];  
      } else {      
          opcoersu = ["-- Selecione Cluster primeiro --"];
      
      }

      opcoersu.forEach(opcaorsul => {
        const optrsul = document.createElement("option");
        optrsul.text = opcaorsul;
        codigo22222.add(optrsul);
      });
    }

//-----------------------------------------------
//--------------------------------------------



    function atualizaCodigo2() {
      const codigo1 = document.getElementById("codigo1").value;
      const codigo2 = document.getElementById("codigo2");
      codigo2.innerHTML = "";
      let opcoes = [];
      if (codigo1 === "abalroamento") {
        opcoes = ["", "Cabo baixo"];
      } else if (codigo1 === "Furto") {
        opcoes = ["", "Cabo", "CEO", "CTO", "Splitter"];
      } else if (codigo1 === "Acidente") {
        opcoes = ["", "Carga Alta"],"Linha de pipa";
      } else if (codigo1 === "Descarga") {
        opcoes = ["", "Atmosférica", "Elétrica"];
      } else if (codigo1 === "Vandalismo") {
        opcoes = ["", "Tentativa de furto","Depredado"];
      } else if (codigo1 === "Troca de poste") {
        opcoes = ["", "Rompimento"];
      } else if (codigo1 === "Degradação/Infiltração") {
        opcoes = ["", "CEO", "CTO", "DGOI"];
      } else if (codigo1 === "Defeito Splitter") {
        opcoes = ["", "Atenuado", "Fibra Curta", "Saída do Splitter", "Sem sinal"];
      } else if (codigo1 === "Falha em atividade anterior") {
        opcoes = ["", "Atenuação", "Desorganização do", "Fibra Invertida", "Fibra Quebrada"];
      } else if (codigo1 === "Obras de Terceiros") {
        opcoes = ["", "Outras Obras", "Poda de árvores", "troca de postes não programada"];
      } else if (codigo1 === "INTERPÉRIE") {
        opcoes = ["", "Desgate por Tempo"];
      } else if (codigo1 === "Ataques de Animais") {
        opcoes = ["", "Abelhas","Formiga","Roedores","Outros"];
      } else if (codigo1 === "Sem defeito para rede") {
        opcoes = ["", "Encontrado Ok","Drop Rompido","Falta de Energia","Falha na central"];
  
      } else {        
          opcoes = ["-- Selecione Causa primeiro --"];  
      }
      opcoes.forEach(opcao => {
        const opt = document.createElement("option");
        opt.text = opcao;
        codigo2.add(opt);
      });
    }
  
    function selecionarPrazo(btn, valor) {
      document.querySelectorAll('.prazo-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      document.getElementById("prazoSelecionado").value = valor;
      const justificativa = document.getElementById("justificativa");
      const labelJustificativa = document.getElementById("labelJustificativa");
      if (valor === "Fora do Prazo") {
        justificativa.style.display = "block";
        labelJustificativa.style.display = "block";
      } else {
        justificativa.style.display = "none";
        labelJustificativa.style.display = "none";
        justificativa.value = "";
      }
    }
  
    
    function gerarProtocolo() {
      const data = new Date();
      return `PROTOCOLO-${data.getFullYear()}${String(data.getMonth()+1).padStart(2,'0')}${String(data.getDate()).padStart(2,'0')}-${Math.floor(Math.random()*10000)}`;
    }
  
    function copiarTexto() {
      document.getElementById("btnsubmit").click()
      const getVal = id => document.getElementById(id)?.value || "";
  
      const protocolo = gerarProtocolo();
      const dataHora = new Date().toLocaleString("pt-BR");
  
      /*if (!getVal("ocorrencia")) {
        alert("Por favor, preencha o campo de ocorrência.");
        return;
      }*/

      let cidade10 = "";
      if(getVal("codigo22") === "" && getVal("codigo22222") === "") {
        cidade10 = getVal("codigo22222livre")
      } else if(getVal("codigo22") === "" && getVal("codigo22222livre") === "") {
        cidade10 = getVal("codigo22222")
      } else {
        cidade10 = getVal("codigo22")
      }
  
      const texto = `🚨 TESTAR E ENCERRAR 🚨
  
  OCORRÊNCIA: ${getVal("ocorrencia")}
  HORARIO: ${(dataHora)}
  EMPRESA: ${getVal("eps")} ${getVal("eps_rs")}  ${getVal("epslivre")} 
  ARD: ${getVal("ard")}
  SP: ${getVal("sp")}
  CAUSA : ${getVal("codigo1")}
  SUB CAUSA : ${getVal("codigo2")}
  TRATATIVA: ${getVal("tratativa")}
  MOTIVO DA CAUSA: ${getVal("MOTIVO")}
  MATERIAIS UTILIZADOS: ${getVal("materiais")}  
  ENDEREÇO: ${getVal("endereco")} Nº ${getVal("NUMERODAFACHADA")}    
  CIDADE: ${cidade10}   
  BAIRRO: ${getVal("bairro")}  
  TÉCNICOS: ${getVal("TECNICO")}
  ENTREGA NO PRAZO?: ${getVal("prazoSelecionado")}
  ${(getVal("prazoSelecionado") === "Fora do Prazo") ? `Justificativa: ${getVal("justificativa")}` : ""}`;
      
  navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado! Agora cole no WhatsApp.");

        const whatsappURL = `whatsapp://send?text=${encodeURIComponent(texto)}`;
        window.location.href = whatsappURL;

      });
    }

    

      function prepararEnvio() {
        // Copia os valores dos campos para os inputs ocultos do formulário
        document.getElementById("emailOcorrencia").value = document.getElementById("ocorrencia").value;
        document.getElementById("emailCluster").value = document.getElementById("codigo11").value;
        
      }

  var modoedicao = false;
  

  function alternarCaixas() {
  const caixa1 =  document.getElementById("Caixa1")
  const caixa2 =  document.getElementById("Caixa2")  
  const caixa3 =  document.getElementById("Caixa3")
  const botao =  document.getElementById("botaoEditar")
  const botaolivre =  document.getElementById("botaoEditarlivre")

    //resetar valores
    const reset = document.getElementById("codigo22")
   reset.value = reset.defaultValue;
   const reset2 = document.getElementById("codigo22222")
   reset2.value = reset2.defaultValue;
   const reset3 = document.getElementById("codigo22222livre")
   reset3.value = reset3.defaultValue;
   const reset4 = document.getElementById("eps")
   reset4.value = reset4.defaultValue;
   const reset5 = document.getElementById("eps_rs")
   reset5.value = reset5.defaultValue;
   const reset6 = document.getElementById("epslivre")
   reset6.value = reset6.defaultValue;


  
 if (modoedicao) {
  caixa1.style.display = "flex";
  caixa2.style.display = "none";
  botao.textContent = "SC";
  caixa3.style.display = "none";
  botaolivre.textContent = "Editar OFF";
  
 } else {
  caixa1.style.display = "none";
  caixa2.style.display = "flex";
  botao.textContent = "Sul";
  caixa3.style.display = "none";
  botaolivre.textContent = "Editar OFF";
  
 }
 modoedicao = !modoedicao;
 
  }

  var modoedicaolivre = true;
  function alternarCaixaslivre() {
  const caixa1 =  document.getElementById("Caixa1")
  const caixa2 =  document.getElementById("Caixa2")
  const caixa3 =  document.getElementById("Caixa3")
  const botao =  document.getElementById("botaoEditar")
  const botaolivre =  document.getElementById("botaoEditarlivre")

   //resetar valores
   const reset = document.getElementById("codigo22")
   reset.value = reset.defaultValue;
   const reset2 = document.getElementById("codigo22222")
   reset2.value = reset2.defaultValue;
   const reset3 = document.getElementById("codigo22222livre")
   reset3.value = reset3.defaultValue;
   const reset4 = document.getElementById("eps")
   reset4.value = reset4.defaultValue;
   const reset5 = document.getElementById("eps_rs")
   reset5.value = reset5.defaultValue;
   const reset6 = document.getElementById("epslivre")
   reset6.value = reset6.defaultValue;
 

 
  
 //if (modoedicaolivre) {
  caixa1.style.display = "none";
  caixa2.style.display = "none";
  caixa3.style.display = "flex";
  //botao.style.display = "none";   
  botaolivre.textContent = "Editar ON";
  
 //} else {
  //caixa1.style.display = "flex";
 // caixa2.style.display = "none";
 // caixa3.style.display = "none";
  //botao.style.display = "flex";  
  //botaolivre.textContent = "Editar2";
  //window.location.href  = "https://flaviooliveira35.github.io/GeradorEtiquetasV2/" REINICIAR
 
  
// }
 //modoedicaolivre = !modoedicaolivre;
  }

 

  function iniciarApp() {
    const splash = document.getElementById("telaAbertura");
    splash.style.opacity = 1;
    // Faz uma transição suave ao sumir
    const fade = setInterval(() => {
      if (splash.style.opacity > 0) {
        splash.style.opacity -= 0.03;
      } else {
        clearInterval(fade);
        splash.style.display = "none";
        document.getElementById("app").style.display = "block";
      }
    }, 30);
  }

  function reiniciar() {
window.location.href  = "https://flaviooliveira35.github.io/AppGeradorEtiqueta/"
  }

