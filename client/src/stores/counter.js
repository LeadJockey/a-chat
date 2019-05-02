import { observable, action } from "mobx";

class CountStore {
  @observable count = 0;

  constructor(root) {
    this.root = root;
  }

  @action increase = () => {
    this.count += 1;
  };

  @action decrease = () => {
    this.count -= 1;
  };
}

export default CountStore;
