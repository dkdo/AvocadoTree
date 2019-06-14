import { CHARACTER_ORDER } from "../../shared/constants";

export const getCharactersState = store => store.characters;

export const getCharacterList = store => getCharactersState(store) ? getCharactersState(store).allIds : [];

export const getCharacterById = (store, id) =>
  getCharactersState(store) ? { ...getCharactersState(store).byIds[id], id } : {};

export const getCharacters = (store, characterOrder) => {
  const allCharacters = getCharacterList(store).map(id => getCharacterById(store, id));
  switch (characterOrder) {
    case CHARACTER_ORDER.INITIATIVE:
      return allCharacters.sort((a, b) => b.initiative - a.initiative);
    default:
      return allCharacters;
  }
};

export const getCharacterNames = store =>
  getCharacterList(store).map(id => getCharacterById(store, id).name);

export const getReorderingStatus = store =>
  store.characterOrder.reordering;
