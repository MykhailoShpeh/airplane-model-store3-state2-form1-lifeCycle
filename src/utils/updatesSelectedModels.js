export const updateSelectedModels = (indicesSelectedModels, aircrafts) => {
    return indicesSelectedModels.flatMap((item) => aircrafts.filter((el) => item === el.id))
  } 