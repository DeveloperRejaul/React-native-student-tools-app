export let ar = [];
export const handelData = (id, numGrade) => {
  for (let i = 1; i <= id; i++) {
    if ((id == i) & (numGrade != null)) {
      ar[i - 1] = numGrade;
    }
  }
};
