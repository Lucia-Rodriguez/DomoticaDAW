<template>
    <div id="top-right-modal" data-modal-placement="top-right" tabindex="-1"
        class="fixed top-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full ">
        <div class="relative w-full h-full max-w-sm md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mt-16">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                        Editar sala
                    </h3>
                </div>
                <!-- Modal body -->
                <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-5">Nuevo
                    nombre a {{ nombreSala }}</label>
                <div class="relative mb-4 ml-5 mr-5">
                    <!-- Input de nueva sala-->
                    <input v-model="nombre_sala" type="text" id="new_name_room"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Inserte nuevo nombre de la sala">
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="top-right-modal" type="button" @click="editarSala"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Editar</button>
                    <button data-modal-hide="top-right-modal" type="button" @click="emit('cerrarModalEditar')"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { actualizar } from '../firebase/index.js';

const emit = defineEmits('cerrarModalEditar');
const nombre_sala = ref("");

const props = defineProps({
    nombreSala: String,
    infoDispositivos: Array,
    id_sala: String,
});

const editarSala = () => {

    console.log(props.dispositivos);
    props.infoDispositivos.forEach(device => {
        device.Informacion.Sala == props.nombreSala ? actualizar('domotica', device.Id_Device, { Sala: nombre_sala.value })
            : '';
    });

    actualizar('salas', props.id_sala, { Sala: nombre_sala.value });

    console.log('Modificación realizada');
    emit('cerrarModal');
};
</script>

<style></style>