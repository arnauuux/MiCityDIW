document.addEventListener('DOMContentLoaded', function() {
    const rainButton = document.getElementById("rainButton");
    const snowButton = document.getElementById("snowButton");
    const rainContainer = document.querySelector(".rain-container");
    const snowflakesContainer = document.querySelector(".snowflakes");

    // Función para activar la animación de lluvia
    function startRainAnimation() {
      rainContainer.style.display = "block";
      snowflakesContainer.style.display = "none";
      createRaindrops();
    }

    // Función para activar la animación de nieve
    function startSnowAnimation() {
      rainContainer.style.display = "none";
      snowflakesContainer.style.display = "block";
      createSnowflakes();
    }

    // Escuchar clic en el botón de lluvia para iniciar la animación
    rainButton.addEventListener("click", startRainAnimation);

    // Escuchar clic en el botón de nieve para iniciar la animación
    snowButton.addEventListener("click", startSnowAnimation);

    // Función para crear copos de nieve
    function createSnowflakes() {
      const numFlakes = 50; // Número de copos de nieve
      const maxDelay = 5000; // Retraso máximo antes de aparecer un nuevo copo de nieve (en milisegundos)

      for (let i = 0; i < numFlakes; i++) {
        setTimeout(() => {
          const snowflake = document.createElement("div");
          snowflake.classList.add("snowflake");
          snowflake.style.left = Math.random() * 100 + "vw";
          snowflake.style.animationDuration = (Math.random() * 5 + 3) + "s"; // Duración de la animación entre 3 y 8 segundos
          snowflake.style.animationDelay = -(Math.random() * maxDelay) + "ms"; // Retraso aleatorio antes de que aparezca el copo de nieve
          snowflakesContainer.appendChild(snowflake);
        }, Math.random() * maxDelay);
      }
    }

    // Función para crear gotas de lluvia
    function createRaindrops() {
      const numDrops = 100; // Número de gotas de lluvia
      const maxDelay = 5000; // Retraso máximo antes de aparecer una nueva gota de lluvia (en milisegundos)

      for (let i = 0; i < numDrops; i++) {
        setTimeout(() => {
          const raindrop = document.createElement("div");
          raindrop.classList.add("raindrop");
          raindrop.style.left = Math.random() * 100 + "vw";
          raindrop.style.animationDelay = -(Math.random() * maxDelay) + "ms"; // Retraso aleatorio antes de que aparezca la gota de lluvia
          rainContainer.appendChild(raindrop);
        }, Math.random() * maxDelay);
      }
    }
});
