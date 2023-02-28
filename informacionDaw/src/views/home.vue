<template>
    <div v-if="tipo_device == 'Ejecutor'" class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div class=" max-w-sm p-6 m-auto text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ nombre_device }}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Tipo: {{ tipo_device }}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Información: {{ info_device }}
            </p>
        </div>
    </div>

    <div v-if="tipo_device == 'Sensor'" class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div
            class="top-0 left-0 right-0 bottom-0 max-w-sm p-6 m-auto text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ nombre_device }}</h5>
            <div>
                <label for="establecerInfo" class="mb-3 font-normal text-gray-700 dark:text-gray-400">Nuevo valor: </label>
                <input type="text" id="establecerInfo" v-model="info_sensor" class="mb-2">
            </div>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Tipo: {{ tipo_device }}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Información: {{ info_device }}
            </p>
            <button type="button" @click="cambiarInfo"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Establecer
            </button>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { actualizar, snapshot } from '../firebase/index.js';
import { onMounted, ref } from 'vue';

const route = useRoute();
const info_sensor = ref('');
const nombre_device = ref('');
const tipo_device = ref('');
const info_device = ref('');

onMounted(async () => {
    await snapshot('domotica', route.params.id_dispositivo, (device) => {
        const { Información, Tipo, Nombre } = device.data();
        nombre_device.value = Nombre;
        tipo_device.value = Tipo;
        info_device.value = Información;
    })
});

const cambiarInfo = async () => {
    await actualizar('domotica', route.params.id_dispositivo, {
        Información: info_sensor.value
    })
}
</script>
<style></style>