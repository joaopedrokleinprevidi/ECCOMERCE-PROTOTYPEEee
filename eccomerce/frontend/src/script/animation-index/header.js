// ACCOUNT OPTIONS HEADER

const accountHeader = document.getElementById("accountHeader");
const containerAccountOptions = document.querySelector(
  ".container-account-options"
);

accountHeader.addEventListener("mouseover", () => {
  containerAccountOptions.style.display = "block";
});

containerAccountOptions.addEventListener("mouseover", () => {
  containerAccountOptions.style.display = "block";
});

containerAccountOptions.addEventListener("mouseout", () => {
  containerAccountOptions.style.display = "none";
});

accountHeader.addEventListener("mouseout", () => {
  setTimeout(() => {
    if (!containerAccountOptions.matches(":hover")) {
      containerAccountOptions.style.display = "none";
    }
  }, 200); // Adicione um pequeno atraso para evitar que o container desapareça imediatamente
});

containerAccountOptions.addEventListener("mouseout", () => {
  setTimeout(() => {
    if (!containerAccountOptions.matches(":hover")) {
      containerAccountOptions.style.display = "none";
    }
  }, 200); // Adicione um pequeno atraso para evitar que o container desapareça imediatamente
});

// SERVICE OPTIONS HEADER

const serviceHeader = document.getElementById("serviceHeader");
const containerServiceOptions = document.querySelector(
  ".container-service-options"
);

serviceHeader.addEventListener("mouseover", () => {
  containerServiceOptions.style.display = "block";
});

containerServiceOptions.addEventListener("mouseover", () => {
  containerServiceOptions.style.display = "block";
});

containerServiceOptions.addEventListener("mouseout", () => {
  containerServiceOptions.style.display = "none";
});

serviceHeader.addEventListener("mouseout", () => {
  setTimeout(() => {
    if (!containerServiceOptions.matches(":hover")) {
      containerServiceOptions.style.display = "none";
    }
  }, 200); // Adicione um pequeno atraso para evitar que o container desapareça imediatamente
});

containerServiceOptions.addEventListener("mouseout", () => {
  setTimeout(() => {
    if (!containerServiceOptions.matches(":hover")) {
      containerServiceOptions.style.display = "none";
    }
  }, 200); // Adicione um pequeno atraso para evitar que o container desapareça imediatamente
});
