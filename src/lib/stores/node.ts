import { Store } from 'tauri-plugin-store-api';
import { app, path } from '@tauri-apps/api';
import type { Node } from '$types';
import { writable } from 'svelte/store';

const createStore = () => {
  let store: Store;
  let filter: string;
  let allNodes: Node[];

  const { subscribe, set, update } = writable<Node[]>();

  const flush = async () =>
    await Promise.all(allNodes.map(node => store.set(node.id, node)));
  const applyFilter = () => {
    const storeNodes = filter
      ? allNodes.filter(node => node.label.includes(filter))
      : allNodes;
    set(storeNodes);
  };
  return {
    subscribe,
    init: async () => {
      const storePath =
        (await path.homeDir()) + (await app.getName()) + '/passwords.json';

      store = new Store(storePath);
      await store.save();
      await store.load();
      allNodes = ((await store.values()) as Node[] | null) || [];
      set(allNodes);
    },

    deleteNode: async (nodeId: string) => {
      // Filter out the deleted node
      allNodes = allNodes.filter(node => node.id !== nodeId);

      // Flush to disk
      flush();

      // Apply filter to store (if any)
      applyFilter();
    },

    createNode: (node: Node) => {
      // Add the new node to all nodes
      allNodes = [...allNodes, node];
      // Flush to disk
      flush();

      // Flush to disk
      applyFilter();
    },
    getNode: async (nodeId: string) => {
      return (await store.get(nodeId)) as Node;
    },
    setFilter: (_filter: string) => {
      filter = _filter;
      applyFilter();
    }
  };
};

export const nodeStore = createStore();
