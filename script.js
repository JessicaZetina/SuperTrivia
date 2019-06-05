const nombreJugador = document.getElementById('playerName');

 const botonNombre = document.getElementById
 ("botonNombre")

 const botonTrivia1 = document.getElementById("trivia1")

 const botonTrivia2 = document.getElementById("trivia2")

 const botonRespuestas = document.getElementById("botonRespuestas")

 const content= document.getElementById ("contenido")

 const content2= document.getElementById ("contenido2")

 const aparecerTrivia1 = document.getElementById("aparecerTrivia1")

 const aparecerTrivia2 = document.getElementById("aparecerTrivia2")

 const primerSeccion = document.getElementById ("primerSeccion")

 const pregunta1trivia1 = document.getElementById ("pregunta1trivia1")

 const pregunta2trivia1 = document.getElementById ("pregunta2trivia1")

 const pregunta3trivia1 = document.getElementById ("pregunta3trivia1")

 const pregunta4trivia1 = document.getElementById ("pregunta4trivia1")

 const pregunta5trivia1 = document.getElementById ("pregunta5trivia1")

 const pregunta6trivia1 = document.getElementById ("pregunta6trivia1")

 const pregunta7trivia1 = document.getElementById ("pregunta7trivia1")

 const pregunta8trivia1 = document.getElementById ("pregunta8trivia1")

 const pregunta9trivia1 = document.getElementById ("pregunta9trivia1")

 const pregunta10trivia1 = document.getElementById ("pregunta10trivia1")

 const pregunta1trivia2 = document.getElementById ("pregunta1trivia2")

 const pregunta2trivia2 = document.getElementById ("pregunta2trivia2")

 const pregunta3trivia2 = document.getElementById ("pregunta3trivia2")

 const pregunta4trivia2 = document.getElementById ("pregunta4trivia2")

 const pregunta5trivia2 = document.getElementById ("pregunta5trivia2")

 const pregunta6trivia2 = document.getElementById ("pregunta6trivia2")

 const pregunta7trivia2 = document.getElementById ("pregunta7trivia2")

 const pregunta8trivia2 = document.getElementById ("pregunta8trivia2")

 const pregunta9trivia2 = document.getElementById ("pregunta9trivia2")

 const pregunta10trivia2 = document.getElementById ("pregunta10trivia2")

let count= 0;

  const getName = () => {
    primerSeccion.classList.add("desaparecer");
    botonTrivia1.classList.remove("desaparecer")
    botonTrivia2.classList.remove("desaparecer")
    content.classList.remove("desaparecer")
    content.innerHTML = "Hola! " + nombreJugador.value + " Que trivia jugaremos hoy?"
 }
  const mostrarTrivia1 = () => {
    aparecerTrivia1.classList.remove("desaparecer")
    content.classList.add("desaparecer")
    botonTrivia1.classList.add("desaparecer")
    botonTrivia2.classList.add("desaparecer")
    botonRespuestas.classList.remove("desaparecer")

  }

 const mostrarTrivia2 = () => {
    aparecerTrivia2.classList.remove("desaparecer")
    content.classList.add("desaparecer")
    botonTrivia1.classList.add("desaparecer")
    botonTrivia2.classList.add("desaparecer")
    botonRespuestas.classList.remove("desaparecer")
 }


 botonNombre.addEventListener("click",getName)
 botonTrivia1.addEventListener("click",mostrarTrivia1)
 botonTrivia2.addEventListener("click",mostrarTrivia2)

 pregunta1trivia1.addEventListener("change", ()=> {
  const respuesta1_1 = pregunta1trivia1.value;
  if(respuesta1_1 === "Grecia"){
    count++
     }
 })

 pregunta2trivia1.addEventListener("change", ()=> {
  const respuesta2_1 = pregunta2trivia1.value;
  if(respuesta2_1 === "Italia"){
    count++
     }
 })

 pregunta3trivia1.addEventListener("change", ()=> {
  const respuesta3_1 = pregunta3trivia1.value;
  if(respuesta3_1 === "Rusia"){
    count++
     }
 })

 pregunta4trivia1.addEventListener("change", ()=> {
  const respuesta4_1 = pregunta4trivia1.value;
  if(respuesta4_1 === "Francia"){
    count++
     }
 })

 pregunta5trivia1.addEventListener("change", ()=> {
  const respuesta5_1 = pregunta5trivia1.value;
  if(respuesta5_1 === "China"){
    count++
     }
 })

 pregunta6trivia1.addEventListener("change", ()=> {
  const respuesta6_1 = pregunta6trivia1.value;
  if(respuesta6_1 === "India"){
    count++
     }
 })

 pregunta7trivia1.addEventListener("change", ()=> {
  const respuesta7_1 = pregunta7trivia1.value;
  if(respuesta7_1 === "EstadosUnidos"){
    count++
     }
 })

 pregunta8trivia1.addEventListener("change", ()=> {
  const respuesta8_1 = pregunta8trivia1.value;
  if(respuesta8_1 === "Mexico"){
    count++
     }
 })

 pregunta9trivia1.addEventListener("change", ()=> {
  const respuesta9_1 = pregunta9trivia1.value;
  if(respuesta9_1 === "Inglaterra"){
    count++
     }
 })

 pregunta10trivia1.addEventListener("change", ()=> {
  const respuesta10_1 = pregunta10trivia1.value;
  if(respuesta10_1 === "Egipto"){
    count++
     }
 })

 pregunta1trivia2.addEventListener("change", ()=> {
  const respuesta1_2 = pregunta1trivia2.value;
  if(respuesta1_2 === "Camaleon"){
    count++
     }
 })

 pregunta2trivia2.addEventListener("change", ()=> {
  const respuesta2_2 = pregunta2trivia2.value;
  if(respuesta2_2 === "Jirafa"){
    count++
     }
 })

 pregunta3trivia2.addEventListener("change", ()=> {
  const respuesta3_2 = pregunta3trivia2.value;
  if(respuesta3_2 === "2años"){
    count++
     }
 })

 pregunta4trivia2.addEventListener("change", ()=> {
  const respuesta4_2 = pregunta4trivia2.value;
  if(respuesta4_2 === "Hormiga"){
    count++
     }
 })

 pregunta5trivia2.addEventListener("change", ()=> {
  const respuesta5_2 = pregunta5trivia2.value;
  if(respuesta5_2 === "AvispaDeMar"){
    count++
     }
 })

 pregunta6trivia2.addEventListener("change", ()=> {
  const respuesta6_2 = pregunta6trivia2.value;
  if(respuesta6_2 === "Negra"){
    count++
     }
 })

 pregunta7trivia2.addEventListener("change", ()=> {
  const respuesta7_2 = pregunta7trivia2.value;
  if(respuesta7_2 === "Cerdo"){
    count++
     }
 })

 pregunta8trivia2.addEventListener("change", ()=> {
  const respuesta8_2 = pregunta8trivia2.value;
  if(respuesta8_2 === "EstrellaDeMar"){
    count++
     }
 })

 pregunta9trivia2.addEventListener("change", ()=> {
  const respuesta9_2 = pregunta9trivia2.value;
  if(respuesta9_2 === "Grillo"){
    count++
     }
 })

 pregunta10trivia2.addEventListener("change", ()=> {
  const respuesta10_2 = pregunta10trivia2.value;
  if(respuesta10_2 === "Cocodrilo"){
    count++
     }
 })

 botonRespuestas.addEventListener("click",  ()=> {
   const conteoAciertos = count;

   aparecerTrivia1.classList.add("desaparecer")
   aparecerTrivia2.classList.add("desaparecer")
   contenido2.classList.remove("desaparecer")
   botonRespuestas.classList.add("desaparecer")
   botonTrivia1.classList.remove("desaparecer")
   botonTrivia2.classList.remove("desaparecer")
 })
