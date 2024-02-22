import mitt from 'mitt';
export const eventBus = mitt();

import { reactive, readonly } from 'vue';

const state = reactive({
  isOpen: false
});

const methods = {
  open() {
    state.isOpen = true;
  },
  close() {
    state.isOpen = false;
  }
};

export default readonly({ state, methods });