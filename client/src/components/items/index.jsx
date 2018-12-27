/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Fragment, Component } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from '../common/button';
import Input from '../common/input';
import Textarea from '../common/textarea';
import './style.css';

class Item extends Component {
  // invoke addItem function from the stores
  addItem = () => {
    this.props.store.addItem();
  };

  // View the items from the database
  componentDidMount = async () => {
    const data = await axios('/items');
    const finalData = data.data;
    this.props.store.itemList = finalData;
  }

  render() {
    const { store } = this.props;
    return (
      <Fragment>
        <div className="sidebar">
          <h2>
number of items is
            {' '}
            {/* Numbers of item from store */}
            <span>{store.numberOfItems}</span>
          </h2>
          <ul className="list">
            {store.itemList.map(value => (
              <div onClick={() => store.specificItem(value.id)} className="item" key={value.id}>
                <h4 className="list-item">
                  {value.name}
                </h4>
              </div>))}
          </ul>
          <div className="footer">
            <address>mohanned al-hanafi</address>
          </div>
        </div>
        <div className="entry-form">
          <div className="form-1">
            <Input
              type="text"
              label="Title"
              placeholder="enter the title"
              name="item"
              onChange={event => store.onChange(event)}
            />
            <Textarea
              placeholder="enter the description"
              label="Description"
              name="desc"
              onChange={event => store.onChange(event)}
            />
            <Button value="Add" onClick={this.addItem} />
          </div>
          <hr />
          <div className="description">
            <p>
              {' '}
              {/* Get the description of specific item from store */}
              {store.descriptionItem}
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

Item.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default observer(Item);
