let array = "";
const merk = document.getElementById("merk");
const model = document.getElementById("model");
const kleur = document.getElementById("kleur");
let kenteken = "7TTR51";

const getInfo = () => {
  axios
    .get(
      `https://api.overheid.io/voertuiggegevens/${kenteken}?ovio-api-key=af1caa6fb9e71193dc355a4132c5c091bd640d1e1890df5d0f29872e3a6b2692`
    )
    .then((resp) => {
      console.log(resp);
      array = resp;
    });
};
getInfo();

const setInfo = () => {
  const path = array.data;
  merk.innerHTML = path.merk;
  model.innerHTML = path.type;
  kleur.innerHTML = path.kenteken;
};
