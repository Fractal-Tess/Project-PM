import { writable } from 'svelte/store';
import type { Node } from '$types';
import { nodeStore } from './node';

const createStore = () => {
  const { subscribe, set, update } = writable<Node>();
  return {
    subscribe,
    set,
    update,
    load: async (nodeId: string) => {
      const node = await nodeStore.getNode(nodeId);
      set(node);
    }
  };
};

export const nodeEditorStore = createStore();
