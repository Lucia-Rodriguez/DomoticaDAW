<template>
  <ModalSala v-if="crearSala" @cerrarModal="crearSala = false"></ModalSala>
  <div class="h-14 bg-gradient-to-r from-sky-500 to-indigo-500 mb-5">
    <nav
      class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DomoticaDaw</span>

        <div class="flex md:order-2">
          <button type="button" @click="crearSala = true"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Añadir Sala
          </button>
          <button type="button" @click="signOut()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
  <div>
    <Salas v-for="sala in arraySalas" :key="sala" :infoSala="sala.Nombre" :infoDevice="sala.Devices"
      :id_sala="sala.Id_sala" @mostrarModal="mostrarModal = true"></Salas>
  </div>
</template>

<script setup>
import { RouterView, useRouter } from "vue-router";
import { ref, onBeforeMount } from "vue";
import Salas from "../components/Salas.vue";
import ModalSala from "../components/ModalSala.vue";
import { snapshot } from "../firebase/index.js";

const router = useRouter();
const crearSala = ref(false);
const arraySalas = ref([]);

const signOut = () => {
  router.push("/");
};

/* Antes de que se monte la página completamente */
onBeforeMount(async () => {
  await snapshot("salas", (infoSalas) => {

    //Vaciamos arraySalas para que no lo duplique a la hora de refrescar la página
    arraySalas.value = [];

    infoSalas.forEach((sala) => {
      arraySalas.value.push({ Nombre: sala.data().Sala, Devices: [], Id_sala: sala.id });
    });

    snapshot("domotica", (infoDispositivos) => {

      //Vaciamos el array Devices para que no duplique los dispositivos
      arraySalas.value.forEach(element => {
        element.Devices = [];
      });

      arraySalas.value.forEach((element, idx) => {
        infoDispositivos.forEach((device) => {
          if (device.data().Sala == element.Nombre) {
            arraySalas.value[idx].Devices.push({ Informacion: device.data(), Id_Device: device.id });
          }
        });
      });
    });

  });
});
</script>

<style ></style>