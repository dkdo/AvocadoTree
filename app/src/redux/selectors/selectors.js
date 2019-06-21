export const getCharactersState = store => store.characters;

export const getCharacterList = store => getCharactersState(store) ? getCharactersState(store).orderedIds : [];

export const getCharacterById = (store, id) =>
  getCharactersState(store) ? { ...getCharactersState(store).byIds[id], id } : {};

export const getCharacters = (store) =>
  getCharacterList(store).map(id => getCharacterById(store, id));

export const getCharacterNames = store =>
  getCharacterList(store).map(id => getCharacterById(store, id).name);

export const getReorderingStatus = store =>
  store.characterOrder.reordering;
