export const getCharactersState = store => store.characters;

export const getCharacterList = store => getCharactersState(store) ? getCharactersState(store).allIds : [];

export const getCharacterById = (store, id) =>
  getCharactersState(store) ? { ...getCharactersState(store).byIds[id], id} : {};

export const getCharacters = (store) =>
  getCharacterList(store).map(id => getCharacterById(store, id));
