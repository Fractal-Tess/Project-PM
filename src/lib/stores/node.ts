import { Store } from 'tauri-plugin-store-api';
import { app, path } from '@tauri-apps/api';
import type { Node } from '$types';
import { writable } from 'svelte/store';

const createStore = () => {
  let store: Store;
  const { subscribe, set, update } = writable<Node[]>();

  return {
    subscribe,
    init: async () => {
      const storePath =
        (await path.homeDir()) + (await app.getName()) + '/passwords.json';

      store = new Store(storePath);
      await store.load();
      let nodes = (await store.values()) as Node[] | null;
      if (!nodes) nodes = [];
      console.log(nodes);
      set(nodes);
    },
    // Creates a node (in memory only)
    createNode: (node: Node) => update(nodes => [...nodes, node]),
    // Deletes a node (in memory only)
    deleteNode: (id: string) =>
      update(nodes => nodes.filter(node => node.id !== id)),
    // Flushes current memory store to disk
    flush: async () => {
      update(nodes => {
        nodes.map(node => store.set(node.id, node));
        return nodes;
      });
      await store.save();
    }
  };
};

export const nodeStore = createStore();
