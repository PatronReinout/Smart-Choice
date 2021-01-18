let array = "";
const merk = document.getElementById("merk");
const massa_rijklaar = document.getElementById("massa_rijklaar");
const prijs = document.getElementById("prijs");
let kenteken = "";
console.log(kenteken);




const getInfo = () => {
  kenteken = document.getElementById("kenteken").value;
  
  axios
    .get(
      `https://api.overheid.io/voertuiggegevens/${kenteken}?ovio-api-key=af1caa6fb9e71193dc355a4132c5c091bd640d1e1890df5d0f29872e3a6b2692`
    )
    .then((resp) => {
      console.log(resp);
      array = resp;
       setInfo();
    });
};


const setInfo = () => {
  console.log(kenteken);
  const path = array.data;
  merk.innerHTML = "<b>Merk auto: </b>" + path.merk;
  massa_rijklaar.innerHTML = "<b>Gewicht: </b>" + path.massa_rijklaar + "kg";
  prijs.innerHTML = "<b>Nieuwprijs: </b> €" + path.catalogusprijs;
 };



