import { SECTIONS_DATA } from "data/sections.data";
import { createSelector } from "reselect";

const INITIAL_STATE = {
  sections: SECTIONS_DATA,
}

const directoryReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
}

const selectDirectory = (state: any) => state.directory;

const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)

export { directoryReducer, selectDirectorySections };
