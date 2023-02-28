<template>
    <div id="top-right-modal" tabindex="-1"
        class="fixed w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full ">
        <div class="relative w-full h-full max-w-sm md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mt-16">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                        Crear dispositivo
                    </h3>
                </div>
                <!-- Modal body -->
                <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-5">Nuevo
                    dispositivo</label>
                <div class="relative mb-4 ml-5 mr-5">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg width="24" data-darkreader-inline-stroke="" fill="none" stroke="currentColor"
                            stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z">
                            </path>
                        </svg>
                    </div>
                    <!-- Input de nueva sala-->
                    <input v-model="nombre_dispositivo" type="text" id="new_device"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Inserte nombre del nuevo dispositivo">
                </div>

                <label for="Devices" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccione tipo de
                    dispositivo</label>
                <select id="Devices" v-model="tipo"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected></option>
                    <option value="Sensor">Sensor</option>
                    <option value="Ejecutor">Ejecutor</option>
                </select>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="top-right-modal" type="button" @click="añadirDispositivo"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Añadir</button>
                    <button data-modal-hide="top-right-modal" type="button" @click="emit('cerrarModal')"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { añadir } from '../firebase/index.js';

const emit = defineEmits('cerrarModal');
const nombre_dispositivo = ref('');
const tipo = ref('');
const Room_name = ref(props.nombreSala);

const props = defineProps({
    nombreSala: String
});


const añadirDispositivo = () => {
    if (tipo.value == 'Sensor') {
        añadir('domotica', { Información: '', Nombre: nombre_dispositivo.value, Sala: Room_name.value, Tipo: tipo.value });
        console.log('Dispositivo: ' + nombre_dispositivo.value + " añadido");
    } else if (tipo.value == 'Ejecutor') {
        añadir('domotica', { Información: 'Apagado', Nombre: nombre_dispositivo.value, Sala: Room_name.value, Tipo: tipo.value });
        console.log('Dispositivo: ' + nombre_dispositivo.value + " añadido");
    }
};
</script>

<style lang="scss" scoped></style>