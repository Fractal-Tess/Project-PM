import { writable } from 'svelte/store';
import type { Node } from '$types';

const createStore = () => {
  const { subscribe, set, update } = writable<Node>({
    label: 'unset',
    id: 'unset'
  });
  return {
    subscribe,
    set,
    update
  };
};

export const nodeCreationStore = createStore();
