class Item {
  constructor(n, w) {
    this.name = n;
    this.winsFrom = w;
  }
}

const items = [
  new Item('Rock', 'Scissors'),
  new Item('Paper', 'Rock'),
  new Item('Scissors', 'Paper'),
];
export default items;