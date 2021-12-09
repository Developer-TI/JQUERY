const btn = document.querySelector("#send");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.querySelector("#name");
  const value = name.value;
  //const name = document.getElementById(xml);
  //const value = name.value;


  $.ajax(value)
    .done(function (xml) {
      $(xml).find("Task").each(function () {

        $("#cards").append(`<div class="card">
                              
                     <table class="table table-responsive">
                      
                      <tbody>                         
                          <tr>
                              <td width="150" height="60">${$(this).find("Satellite").text()}</td>
                              <td width="150" height="60">${$(this).find("StartTime").text()}</td>
                              <td width="150" height="60">${$(this).find("EndTime").text()}</td>
                              <td width="150" height="60">${$(this).find("AntennaID").text()}</td>
                              <td width="150" height="60">${$(this).find("Instrument").text()}</td> </p>
                          </tr>
                     </tbody>
                     </table>                          
                  </div>
                 ` );


      });

    })
    .fail(function () {
      alert("Ocorreu um erro na leitura do arquivo XML.")
    })

  /*
                            */
  /*   $("#cards").append(`<div class="card">
    Satélite:    <class=Satellite> ${$(this).find("Satellite").text()}
    Hora Inicial:<class=StartTime> ${$(this).find("StartTime").text()}
    Hora Final:  <class=EndTime> ${$(this).find("EndTime").text()}
    Antena:      <class=AntennaID> ${$(this).find("AntennaID").text()}
    Receptor:    <class=Instrument> ${$(this).find("Instrument").text()}
     </div>
  ` );
  });
  
  }) box-shadow: 0px 0px 5px rgb(121, 176, 240); */

}
)