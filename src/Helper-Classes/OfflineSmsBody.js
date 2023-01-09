class SmsBody {
  // Define Private Proparty
  #_BOARD;
  #_ROLL;
  #_YEAR;

  constructor(BOARD, ROLL, YEAR) {
    this.#_BOARD = BOARD;
    this.#_ROLL = ROLL;
    this.#_YEAR = YEAR;
  }

  PSC() {
    return `DPE ${this.#_ROLL} ${this.#_YEAR}`;
  }
  JSC() {
    return `JSC ${this.#_BOARD} ${this.#_ROLL} ${this.#_YEAR}`;
  }
  SSC() {
    return `SSC ${this.#_BOARD} ${this.#_ROLL} ${this.#_YEAR}`;
  }
  HSC() {
    return `HSC ${this.#_BOARD} ${this.#_ROLL} ${this.#_YEAR}`;
  }
  H1() {
    return `NU H1 ${this.#_ROLL}`;
  }
  H2() {
    return `NU H2 ${this.#_ROLL}`;
  }
  H3() {
    return `NU H3 ${this.#_ROLL}`;
  }
  H4() {
    return `NU H4 ${this.#_ROLL}`;
  }
}
export default SmsBody;
