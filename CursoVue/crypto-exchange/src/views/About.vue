<template>
  <div class="flex-col items-center">
    <h1 class="text-gray-700 text-6xl">
      Crypto Exchange v1.0.0
    </h1>
    <p class="text-gray-600 text-xl text-center">
      Proyecto para obtener la cotizacion de las cryptomonedas mas importantes a
      traves del API Rest de Coincap
    </p>
    <!-- Este component ya no se importa porque el router.js 
    Vue.use(Router); esa linea se encarga de importarlo globalmente -->
    <router-link to="/" class="mt-5 text-xl text-green-600 hover:underline">
      Volver a la pagina de inicio</router-link
    >
  </div>
</template>
