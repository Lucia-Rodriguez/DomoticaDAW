<template>
    <div v-if="Tipo == 'Ejecutor'"
        class=" inline-block max-w-sm p-6 mr-2 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ Nombre }}</h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tipo: {{ Tipo }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Informacion: {{ Informacion }}</p>
        <button type="button" @click="verInfo"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ver info
        </button>
        <button type="button" @click="cambiarEstado"
            class="inline-flex items-center ml-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            On/Off
        </button>
        <div>
            <button type="button" @click="eliminarDispositivo"
                class="inline-flex items-center mt-2 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Eliminar
            </button>
        </div>
    </div>
    <div v-if="Tipo == 'Sensor'"
        class=" inline-block max-w-sm p-6 mr-2 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ Nombre }}</h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tipo: {{ Tipo }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Informacion: {{ Informacion }}</p>
        <button type="button" @click="verInfo"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Cambiar valor
        </button>
        <div>
            <button type="button" @click="eliminarDispositivo"
                class="inline-flex items-center mt-2 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bgred-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Eliminar
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { actualizar, borrar } from '../firebase/index.js';

const estado = ref('');

const props = defineProps({
    Nombre: String,
    Informacion: String,
    Tipo: String,
    id_Dispositivo: String
});

/*Aquí cambiamos el estado del ejecutor*/
const cambiarEstado = () => {
    props.Informacion == 'Apagado' ? actualizar('domotica', props.id_Dispositivo, { Información: 'Encendido' })
        : actualizar('domotica', props.id_Dispositivo, { Información: 'Apagado' });
}

const verInfo = () => {
    window.open(`http://localhost:5174/${props.id_Dispositivo}`, '_black')
}

const eliminarDispositivo= () => {
    borrar('domotica', props.id_Dispositivo);
    alert(props.Nombre+' borrado');
}
</script>

<style></style>