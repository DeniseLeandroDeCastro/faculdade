use bdparticipantescurso;

/*Usando o INNER JOIN*/
    select cpf, nomeparticipante, nome, cargahoraria
      from inscricao ins
inner join curso c
        on ins.codcurso = c.cod
	   and c.cargahoraria = 80;
  

  

  
  
  
  







