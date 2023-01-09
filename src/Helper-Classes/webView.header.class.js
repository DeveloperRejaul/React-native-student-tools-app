class webViewHeader {
  #newStr;
  constructor(text) {
    this.#newStr = text;
  }

  str() {
    const pattarn = /\s/gi;
    const str = this.#newStr.split(pattarn);

    if (str.length >= 3) {
      let headerTitle = str
        .filter((ele, i) => i <= 2)
        .reduce((acc, cur) => (acc += ` ${cur}`));
      return `${headerTitle}..`;
    } else {
      return this.#newStr;
    }
  }
}

export {webViewHeader};
