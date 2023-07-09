const MIN_ALZA = 1;
const MAX_ALZA = 100;

let accionesML = 100;
let accionesAMZ = 100;

let aumento = 0;

const alzamercadolibre = () => accionesML > 0


const accionesiguales = ()=> accionesML>0 && accionesAMZ>0


const calcularAlza = () => Math.ceil(Math.random()*(MAX_ALZA - MIN_ALZA) + MIN_ALZA);

while(accionesiguales()){
    aumento +=1;
    let alzaML = calcularAlza();
    let alzaAMZ = calcularAlza();
    
    console.log("------ Aumento " + aumento + "-------")

    if(alzaML == alzaAMZ){
        console.log("Siga Siga");
    } else if(alzaML > alzaAMZ){
        accionesAMZ -= alzaML;
        console.log("Sube en alza Mercadolibre " + alzaML);
        console.log("Alza Mercadolibre es " + accionesML);
        //document.write('<div class="card"><img src="img/mercadolibre.webp"></div>')
    
        if(accionesAMZ< 0){
            accionesAMZ = 0;
        }
        console.log("Sube en alza Amazon " + accionesAMZ);
        
    }else {
        accionesML -= alzaAMZ;
        console.log("Sube en alza " + alzaAMZ);
        console.log("Alza Amazon es " + accionesAMZ);
        //document.write('<div class="card"><img src="img/amazon.jpeg"></div>')
    if(accionesML < 0){
            alzaML = 0;
        }
        console.log("Alza Mercadolibre es " + accionesML);
    }}

    console.log("---------------------")

if(alzamercadolibre()){
    console.log("Mercadolibre en alza al finalizar el dia")
    document.write('<div class="ganador"><img src="img/mercadolibre.webp"></div>')

}else {
    console.log("Amazon en alza al finalizar el dia")
    document.write('<div class="ganador"><img src="img/amazon.jpeg"></div>')
}