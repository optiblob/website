<template>
  <div class="flex h-full flex-col">
    <header
      class="fixed z-50 w-full bg-white flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6">
      <h1 class="text-lg font-semibold text-gray-900">
        <time datetime="2022-01">Novembre 2022</time>
      </h1>
      <div class="flex items-center">
        <div class="flex items-center rounded-md shadow-sm md:items-stretch">
          <button type="button"
                  class="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
            <span class="sr-only">Previous month</span>
            <!-- Heroicon name: mini/chevron-left -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
          <button type="button"
                  class="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block">
            Aujourd'hui
          </button>
          <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
          <button type="button"
                  class="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
            <span class="sr-only">Next month</span>
            <!-- Heroicon name: mini/chevron-right -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
        <div class="hidden md:ml-4 md:flex md:items-center">
          <button type="button"
                  @click="openModal"
                  class="ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Ajouter une plage horaire
          </button>
        </div>
        <div class="relative ml-6 md:hidden">
          <button type="button"
                  class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
                  id="menu-0-button" aria-expanded="false" aria-haspopup="true">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: mini/ellipsis-horizontal -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path
                d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
            </svg>
          </button>

          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div
            class="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
            <div class="py-1" role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                 id="menu-0-item-0">Create event</a>
            </div>
            <div class="py-1" role="none">
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                 id="menu-0-item-1">Go to today</a>
            </div>
            <div class="py-1" role="none">
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                 id="menu-0-item-2">Day view</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                 id="menu-0-item-3">Week view</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                 id="menu-0-item-4">Month view</a>
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                 id="menu-0-item-5">Year view</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="w-full z-40 flex flex-auto flex-col overflow-auto bg-white">
      <div style="width: 165%" class="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full">
        <div class="fixed z-50 top-16 mt-2 w-full flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
          <div
            class="select-none -mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
            <div class="col-end-1 w-14"></div>
            <div class="flex items-center justify-center py-3" v-for="day in days">
                  <span class="flex flex-row items-center">{{ day.shortTitle }}
                    <span
                      :class="`${day.isToday ? 'flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white' : 'items-center justify-center font-semibold text-gray-900'} ml-1.5`">{{
                        day.dateNumber
                      }}</span>
                  </span>
            </div>
          </div>
        </div>
        <div class="z-0 w-full flex flex-auto">
          <div class="left-0 z-0 w-14 flex-none bg-white ring-1 ring-gray-100"></div>
          <div class="grid flex-auto grid-cols-1 grid-rows-1">
            <!-- Horizontal lines -->
            <div class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                 style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))">
              <div class="row-end-1 h-7"></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  00:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  01:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  02:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  03:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  04:00
                </div>
              </div>
              <div ref="container"></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  05:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  06:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  07:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  08:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  09:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  10:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  11:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  12:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  13:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  14:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  15:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  16:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  17:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  18:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  19:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  20:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  21:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  22:00
                </div>
              </div>
              <div></div>
              <div>
                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  23:00
                </div>
              </div>
              <div></div>
            </div>

            <!-- Vertical lines -->
            <div
              class="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
              <div class="col-start-1 row-span-full"></div>
              <div class="col-start-2 row-span-full"></div>
              <div class="col-start-3 row-span-full"></div>
              <div class="col-start-4 row-span-full"></div>
              <div class="col-start-5 row-span-full"></div>
              <div class="col-start-6 row-span-full"></div>
              <div class="col-start-7 row-span-full"></div>
              <div class="col-start-8 row-span-full w-8"></div>
            </div>

            <!-- Events -->
            <ol class="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                style="grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto">
              <timing-scope v-for="(timing, iterator) in timingScopes" :title="timing.title" :datetime="timing.date"
                            :grid-row="timing.gridRow" :color="timing.color" v-bind:key="iterator"/>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {DateTime} from "luxon";

export default {
  name: 'calendar',
  props: {
    timingScopes: [],
  },
  data() {
    return {
      days: [{
        titre: "Lundi",
        shortTitle: "Lun",
        value: "Monday",
        dateNumber: null,
        isToday: false,
      }, {
        titre: "Mardi",
        shortTitle: "Mar",
        value: "Tuesday",
        dateNumber: null,
        isToday: false,
      }, {
        titre: "Mercredi",
        shortTitle: "Mer",
        value: "Wednesday",
        dateNumber: null,
        isToday: false,
      }, {
        titre: "Jeudi",
        shortTitle: "Jeu",
        value: "Thursday",
        dateNumber: null,
        isToday: false,
      }, {
        titre: "Vendredi",
        shortTitle: "Ven",
        value: "Friday",
        dateNumber: null,
        isToday: false,
      }, {
        titre: "Samedi",
        shortTitle: "Sam",
        value: "Saturday",
        dateNumber: null,
        isToday: false,
      }, {
        titre: "Dimanche",
        shortTitle: "Dim",
        value: "Sunday",
        dateNumber: null,
        isToday: false,
      }],
    }
  },
  methods: {
    openModal() {
      this.$emit("openModal", true);
    }
  },
  mounted() {
    const element = this.$refs.container;
    const top = element.offsetTop;
    window.scrollTo(0, top);
    this.days.forEach((day, iterator) => {
      day.dateNumber = DateTime.now().startOf("week").plus({"day": iterator}).toFormat("dd");
      if (day.dateNumber !== DateTime.now().toFormat("dd")) {
        return;
      }
      day.isToday = true;
    })
  }
}
</script>
