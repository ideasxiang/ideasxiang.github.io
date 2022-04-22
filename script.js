window.onload = () => {
  const button = document.querySelector('button[data-action="change"]');
  button.innerText = "﹖";

  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [1, 2, 3];
}

var models = [
  {
    url: "./assets/magnemite/scene.gltf",
    scale: "4 4 4",
    info: "Mentaiko Prawn Twice-Baked Croissant",
    rotation: "0 180 0",
  },
  {
    url: "./assets/articuno/scene.gltf",
    scale: "4 4 4",
    rotation: "0 180 0",
    info: "Jasmine Tea",
  },
  {
    url: "./assets/dragonite/scene.gltf",
    scale: "0.1 0.1 0.1",
    rotation: "0 180 0",
    info: "Rocher Croissant",
  },
];

var modelIndex = 1;
var setModel = function (model, entity) {
  if (model.scale) {
    entity.setAttribute("scale", model.scale);
  }

  if (model.rotation) {
    entity.setAttribute("rotation", model.rotation);
  }

  if (model.position) {
    entity.setAttribute("position", model.position);
  }

  entity.setAttribute("gltf-model", model.url);

  const div = document.querySelector(".instructions");
  div.innerText = model.info;
};

function renderPlaces(places) {
  let scene = document.querySelector("a-marker");

  let model = document.createElement("a-entity");

  setModel(models[modelIndex], model);

  model.setAttribute("animation-mixer", "");

  document
    .querySelector('button[data-action="change"]')
    .addEventListener("click", function () {
      var entity = document.querySelector("a-entity");
      modelIndex++;
      var newIndex = modelIndex % models.length;
      setModel(models[newIndex], entity);
    });

  scene.appendChild(model);
}
