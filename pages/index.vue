<template>
  <div class="h-full w-full flex justify-center items-center">
    <div class="w-full">
      <Calendar @openModal="changeStatusOfModal" :timingScopes="timingScopes" @delete="deleteTimingScope" @update="updateTimingScope"/>
      <ModalCreateTimingScope :display="statusOfModal" @closeModal="changeStatusOfModal" @createTimingScope="addNewTimingScope"/>
    </div>
  </div>
</template>

<script>
import {DateTime} from "luxon";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'home',
  data() {
    return {
      statusOfModal: false,
      timingScopes : []
    }
  },
  methods: {
    updateTimingScope(id) {
      console.log("update");
    },
    deleteTimingScope(id) {
      this.timingScopes = this.timingScopes.filter(ts => ts.id !== id);
    },
    changeStatusOfModal(param) {
      this.statusOfModal = param;
    },
    addNewTimingScope(param) {
      //@TODO API CALL
      this.timingScopes.push({
        id: uuidv4(),
        title: param.title,
        date: param.datePicker.start,
        gridRow: {
          startPosition: (DateTime.fromISO(param.datePicker.start).diff(DateTime.now().startOf("day"), "hours").toObject()).hours*6*2+2,
          heightSize: (DateTime.fromISO(param.datePicker.end).diff(DateTime.fromISO(param.datePicker.start), "hours").toObject()).hours*6*2
        },
        color: param.color,
      })
    }
  }
}
</script>
