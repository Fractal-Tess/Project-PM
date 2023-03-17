import { writable } from 'svelte/store';
import type { Node } from '$types';

const createStore = () => {
  const { subscribe, set, update } = writable<Node>({
    label: 'unset',
    id: 'test id'
  });
  return {
    subscribe,
    set,
    update
  };
};

export const newNode = createStore();
