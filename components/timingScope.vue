<template>
  <li :class="`relative mt-px flex sm:col-start-${getDateNumberPosition}`" :style="`grid-row: ${gridRow.startPosition} / span ${gridRow.heightSize}`">
    <a href="#"
       :class="`group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-${color}-50 p-2 text-xs leading-5 hover:bg-${color}-100`">
      <p :class="`order-1 font-semibold text-${color}-700`">{{ title }}</p>
      <p :class="`text-${color}-500 group-hover:text-${color}-700`">
        <time :datetime="datetime">{{ getTime }}</time>
      </p>
    </a>
  </li>
</template>

<script>
import {DateTime} from "luxon";

export default {
  name: 'timingScope',
  props: {
    title: String,
    datetime: String,
    gridRow: Object,
    color: String
  },
  computed:{
    getTime(){
      return DateTime.fromISO(this.datetime).toFormat("HH:mm");
    },
    getDateNumberPosition(){
      return Math.ceil((DateTime.fromISO(this.datetime).diff(DateTime.now().startOf("week"), "day").toObject()).days)
    }
  }
}
</script>
