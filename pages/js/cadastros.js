$(function() {

  $("#dsNomeCompleto").on('change', function() {		
    if ($("#dsNomeCompleto").val() === ''){
      document.getElementById('dsNomeCompleto').style.border='thin solid red';
      alert("O Campo do Nome não pode estar vazio!");
    }
    else{
      document.getElementById('dsNomeCompleto').style.border='thin solid green';
    }
	});

  $("#nuTelefone").on('change', function() {		
    if ($("#nuTelefone").val() === ''){
      document.getElementById('nuTelefone').style.border='thin solid red';
      alert("O Campo do Telefone não pode estar vazio!");
    }
    else{
      document.getElementById('nuTelefone').style.border='thin solid green';
    }
	});

  $("#dtNascimento").on('change', function() {		
    if ($("#dtNascimento").val() === ''){
      document.getElementById('dtNascimento').style.border='thin solid red';
      alert("O Campo da Data de Nascimento não pode estar vazio!");
    }
    else{
      document.getElementById('dtNascimento').style.border='thin solid green';
    }
	});

  $("#dsCidade").on('change', function() {		
    if ($("#dsCidade").val() === ''){
      document.getElementById('dsCidade').style.border='thin solid red';
      alert("O Campo da Cidade não pode estar vazio!");
    }
    else{
      document.getElementById('dsCidade').style.border='thin solid green';
    }
	});

  $("#dsEstado").on('change', function() {		
    if ($("#dsEstado").val() === ''){
      document.getElementById('dsEstado').style.border='thin solid red';
      alert("O Campo do Estado não pode estar vazio!");
    }
    else{
      document.getElementById('dsEstado').style.border='thin solid green';
    }
	});

  $("#dsEndereco").on('change', function() {		
    if ($("#dsEndereco").val() === ''){
      document.getElementById('dsEndereco').style.border='thin solid red';
      alert("O Campo de Endereço não pode estar vazio!");
    }
    else{
      document.getElementById('dsEndereco').style.border='thin solid green';
    }
	});

  $("#btnSalvarCadFunc").on('click', function() {
    if($("#nuTelefone").val() != ''){
      if($("#dtNascimento").val() != ''){
        if($("#dtNascimento").val() != ''){
          if($("#dsCidade").val() != ''){
            if($("#dsEstado").val() != ''){
              if($("#dsEndereco").val() != ''){
                alert("Cadastro realizado com sucesso!");
              }
              else{
                alert("Os campos não estão preenchidos corretamente!");
              }
            }
            else{
              alert("Os campos não estão preenchidos corretamente!");
            }
          }
          else{
            alert("Os campos não estão preenchidos corretamente!");
          }
        }
        else{
          alert("Os campos não estão preenchidos corretamente!");
        }
      }
      else{
        alert("Os campos não estão preenchidos corretamente!");
      }
    }
    else{
      alert("Os campos não estão preenchidos corretamente!");
    }
  }); 
     
  });

  $(function () {

    $("#dsNomeCompleto").on('change', function() {		
      if ($("#dsNomeCompleto").val() === ''){
        document.getElementById('dsNomeCompleto').style.border='thin solid red';
        alert("O Campo do Nome não pode estar vazio!");
      }
      else{
        document.getElementById('dsNomeCompleto').style.border='thin solid green';
      }
    });
    
    $("#nuTelefone").on('change', function() {		
      if ($("#nuTelefone").val() === ''){
        document.getElementById('nuTelefone').style.border='thin solid red';
        alert("O Campo do Telefone não pode estar vazio!");
      }
      else{
        document.getElementById('nuTelefone').style.border='thin solid green';
      }
    });
    
    $("#nuTelefoneEmergencia").on('change', function() {		
      if ($("#nuTelefoneEmergencia").val() === ''){
        document.getElementById('nuTelefoneEmergencia').style.border='thin solid red';
        alert("O Campo do Telefone não pode estar vazio!");
      }
      else{
        document.getElementById('nuTelefoneEmergencia').style.border='thin solid green';
      }
    });
    
    $("#dtNascimento").on('change', function() {		
      if ($("#dtNascimento").val() === ''){
        document.getElementById('dtNascimento').style.border='thin solid red';
        alert("O Campo da Data de Nascimento não pode estar vazio!");
      }
      else{
        document.getElementById('dtNascimento').style.border='thin solid green';
      }
    });
    
    $("#dsEstado").on('change', function() {		
      if ($("#dsEstado").val() === ''){
        document.getElementById('dsEstado').style.border='thin solid red';
        alert("O Campo do Estado não pode estar vazio!");
      }
      else{
        document.getElementById('dsEstado').style.border='thin solid green';
      }
    });
    
    $("#dsCidade").on('change', function() {		
      if ($("#dsCidade").val() === ''){
        document.getElementById('dsCidade').style.border='thin solid red';
        alert("O Campo da Cidade não pode estar vazio!");
      }
      else{
        document.getElementById('dsCidade').style.border='thin solid green';
      }
    });
    
    $("#dsEndereco").on('change', function() {		
      if ($("#dsEndereco").val() === ''){
        document.getElementById('dsEndereco').style.border='thin solid red';
        alert("O Campo de Endereço não pode estar vazio!");
      }
      else{
        document.getElementById('dsEndereco').style.border='thin solid green';
      }
    });
    
    $("#nuEndereco").on('change', function() {		
      if ($("#nuEndereco").val() === ''){
        document.getElementById('nuEndereco').style.border='thin solid red';
        alert("O Campo de Endereço não pode estar vazio!");
      }
      else{
        document.getElementById('nuEndereco').style.border='thin solid green';
      }
    });
    
    $("#dsEnderecoComplemento").on('change', function() {		
      if ($("#dsEnderecoComplemento").val() === ''){
        document.getElementById('dsEnderecoComplemento').style.border='thin solid red';
        alert("O Campo de Endereço não pode estar vazio!");
      }
      else{
        document.getElementById('dsEnderecoComplemento').style.border='thin solid green';
      }
    });
    
    $("#btnSalvarCadCliente").on('click',function() {
    if($("#dsNomeCompleto").val() != ''){
      if($("#nuTelefone").val() != ''){
        if($("#nuTelefoneEmergencia").val() != ''){
          if($("#dtNascimento").val() != ''){
            if($("#dsEstado").val() != ''){
              if($("#dsCidade").val() != ''){
                if($("#dsEndereco").val() != ''){
                  if($("#nuEndereco").val() != ''){
                    if($("#dsEnderecoComplemento").val() != ''){
                      alert("Cadastro realizado com sucesso!");
                    }
                    else{
                      alert("Os campos não estão preenchidos corretamente!");
                    }
                  }
                  else{
                    alert("Os campos não estão preenchidos corretamente!");
                  }
                }
                else{
                  alert("Os campos não estão preenchidos corretamente!");
                    }
              }
              else{
                alert("Os campos não estão preenchidos corretamente!");
              }
            }
            else{
              alert("Os campos não estão preenchidos corretamente!");
            }
          }
          else{
            alert("Os campos não estão preenchidos corretamente!");
          }
        }
        else{
          alert("Os campos não estão preenchidos corretamente!");
        }
      }
      else{
        alert("Os campos não estão preenchidos corretamente!");
      }
    }
    else{
      alert("Os campos não estão preenchidos corretamente!");
    }
  }); 
  
  });