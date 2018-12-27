import swal from 'sweetalert2';
import {
  decorate, observable, action, computed,
} from 'mobx';
import axios from 'axios';

class ItemStore {
  // This elements of this array will be the items and it will
  // will be reviewd
    itemList = []

    onChange(event) {
      const { value, name } = event.target;
      this[name] = value;
    }

    // put the data from specificItem function and put them in array
    updateDesc = (res) => {
      this.descriptionItem = res;
    }

    // get the data of specific item
    specificItem = (id) => {
      axios.get(`/items/${id}`).then((res) => {
        this.updateDesc(res.data.description);
      });
    }

    // The function that added new item to the database
    addItem = () => {
      const obj = {
        name: this.item,
        description: this.desc,
      };
      const { name, description } = obj;
      if ((name !== '' && name !== undefined) && (description !== '' && description !== undefined)) {
        axios.post('/items', obj).then((res) => {
          if (res.status === 201) {
            this.itemList.push(res.data);
          } else {
            swal({
              title: 'Error',
              text: 'Please check fields and add data',
              type: 'warning',
              confirmButtonText: 'Ok',
            });
          }
        });
      } else {
        swal({
          title: 'Error',
          text: 'Please check fields and add data',
          type: 'warning',
          confirmButtonText: 'Ok',
        });
      }
    };

    // function that get the numbers of items
    get numberOfItems() { return this.itemList.length; }
}


decorate(ItemStore, {
  itemList: observable,
  addItem: action,
  numberOfItems: computed,
  updateDesc: action,
  specificItem: action,
  descriptionItem: observable,
});
const store = new ItemStore();
export default store;
