<template>
  <div :class="`relative ${display ? 'z-50' : 'z-0'}`" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div
      :class="`${display ? 'ease-in duration-200' : 'ease-out duration-300'} opacity-${display ? '100' : '0'} fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`"></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          :class="`${display ? 'ease-in duration-200' : 'ease-out duration-300'} ${display ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'} relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6`">
          <div class="">
            <div class="text-center sm:mt-0 sm:ml-4 sm:text-left">
              <p class="text-xl font-medium leading-6 text-gray-900" id="modal-title">Ajouter une plage horaire</p>
              <hr class="my-2">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Titre</label>
                  <div class="mt-1">
                    <input type="text" name="titre" id="titre"
                           class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                           placeholder="Aller chercher les enfants" v-model="title">
                  </div>
                </div>
                <div class="flex flex-row justify-between w-full">
                  <div class="w-1/2">
                    <label class="block text-sm font-medium text-gray-700">Date de début</label>
                    <date-picker
                      inputClass="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      id="startDate"
                      v-model="datePicker.start" format="DD/MM/YYYY HH:mm" value-type="format"
                      :hour-options="datePicker.hours"
                      type="datetime"
                      placeholder="Sélectionne une date"></date-picker>
                  </div>
                  <div class="w-1/2 flex flex-col items-end">
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Date de fin</label>
                      <date-picker
                        inputClass="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        id="endDate"
                        v-model="datePicker.end" format="DD/MM/YYYY HH:mm" type="datetime"
                        :hour-options="datePicker.hours"
                        placeholder="Sélectionne une date"></date-picker>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Color</label>
                  <fieldset class="mt-2">
                    <div class="space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
                      <div class="flex items-center">
                        <input id="gray" name="color" type="radio" checked class="hidden" value="gray" v-model="color">
                        <label for="gray"
                               class="h-5 w-5 bg-gray-100 border border-gray-200 rounded ring-gray-300"></label>
                      </div>
                      <div class="flex items-center">
                        <input id="blue" name="color" type="radio" class="hidden" value="blue" v-model="color">
                        <label for="blue"
                               class="h-5 w-5 bg-blue-100 border border-blue-200 rounded ring-blue-300"></label>
                      </div>
                      <div class="flex items-center">
                        <input id="red" name="color" type="radio" class="hidden" value="red" v-model="color">
                        <label for="red" class="h-5 w-5 bg-red-100 border border-red-200 rounded ring-red-300"></label>
                      </div>
                      <div class="flex items-center">
                        <input id="pink" name="color" type="radio" class="hidden" value="pink" v-model="color">
                        <label for="pink"
                               class="h-5 w-5 bg-pink-100 border border-pink-200 rounded ring-pink-300"></label>
                      </div>
                      <div class="flex items-center">
                        <input id="yellow" name="color" type="radio" class="hidden" value="yellow" v-model="color">
                        <label for="yellow"
                               class="h-5 w-5 bg-yellow-100 border border-yellow-200 rounded ring-yellow-300"></label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row sm:justify-end">
            <button @click="closeModal" type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm">
              Annuler
            </button>
            <button type="button"
                    @click="create"
                    class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
              Créer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {DateTime} from "luxon";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: 'modalCreateTimingScope',
  components: {DatePicker},
  props: {
    display: Boolean,
  },
  data() {
    return {
      title: null,
      datePicker: {
        start: null,
        end: null,
        hours: Array.from({ length: 20 }).map((_, i) => i + 5),
      },
      color: null,
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
    create() {
      this.datePicker = {
        start: DateTime.fromJSDate(this.datePicker.start).toISO(),
        end: DateTime.fromJSDate(this.datePicker.end).toISO(),
      }
      this.$emit("createTimingScope", {title: this.title, datePicker: this.datePicker, color: this.color})
      this.$emit("closeModal", false);
    }
  }
}
</script>

<style>
input[type="radio"]:checked + label {
  @apply ring-2 fill-current !important;
}
</style>
