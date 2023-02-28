<template>
    <ModalDispositivo v-if="mostrarModal" @cerrarModal="mostrarModal = false" :nombreSala="infoSala"></ModalDispositivo>
    
    <ModalEditar v-if="mostrarModalEditar" @cerrarModalEditar="mostrarModalEditar = false" :nombreSala="infoSala" :id_sala="id_sala"
        :infoDispositivos="infoDevice"></ModalEditar>
    <div
        class=" max-w mb-3 ml-2 mr-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <div>
            <h5 class=" inline-flex mb-2 mr-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ infoSala
            }}</h5>
            <button type="button" @click="mostrarModalEditar = true"
                class="inline-flex items-center mb-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Editar
            </button>
        </div>

        <div>
            <CardDevice v-for="device in infoDevice" :key="device" :Nombre="device.Informacion.Nombre"
                :Tipo="device.Informacion.Tipo" :Informacion="device.Informacion.Información"
                :id_Dispositivo="device.Id_Device"></CardDevice>
        </div>
        <button type="button" @click="mostrarModal = true"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Crear Dispositivo
        </button>
        <button type="button" @click="eliminarSala"
            class="inline-flex items-center ml-2 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Eliminar sala
        </button>
    </div>
</template>

<script setup>
import CardDevice from "./CardDevice.vue";
import { ref } from 'vue';
import ModalDispositivo from "./ModalDispositivo.vue";
import ModalEditar from "./ModalEditar.vue";
import { borrar } from '../firebase/index.js';

const mostrarModal = ref(false);
const mostrarModalEditar = ref(false);
const emit = defineEmits(['mostrarModal', 'mostrarModalEditar']);

const props = defineProps({
    infoSala: String,
    infoDevice: Array,
    id_sala: String
});

const eliminarSala = () => {
    props.infoDevice.forEach(device => {
        device.Informacion.Sala == props.infoSala ? borrar('domotica', device.Id_Device) : '';
    });

    borrar('salas', props.id_sala);
    alert(props.infoSala + ' borrada');
}

const editarSala = () => {

}
</script>

<style></style>