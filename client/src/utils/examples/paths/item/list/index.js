import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { FooterNav, DeleteControl } from 'features';
import { Layout } from 'features';
import { Button, Push, Icon } from 'utils/common-ui';
import { itemFetch, itemDelete, itemSelected } from 'state/actions/ItemActions';

/* ### UPDATES ###

For Allow state to update and based on the state (flag)
Change the user interface for the layout of the Cards in this page
They will have a checkbox by each of them and an "add to Program" button
will appear at the bottom of the screen when they have selected (1 or more) items
to add (this is all based on the idea that the user has navigated from the create 
program page and selected the button "add exercises to plan" botton)

*/

class ItemsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItem: false,
      selectedItem: '',
      controls: false
    };
    this.onPressDelete = this.onPressDelete.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
    this.toggleControls = this.toggleControls.bind(this);
  }

  onPressDelete(id) {
    this.props.itemDelete(id.uid);
  }

  componentDidMount() {
    console.log('isEdit', this.props.isEdit);
    if (!this.props.loggedIn) {
      this.props.history.push('/auth');
    } else {
      this.props.itemFetch();
    }
  }

  onPressItem(data) {
    this.props.itemSelected(data);
    this.props.history.push('/item');
  }

  renderItems(items) {
    if (this.props.items.length) {
      return <Push pull={64}>{items}</Push>;
    } else {
      return (
        <Push>
          <Button onPress={() => this.props.history.push('/item-create')}>
            Create Exercise <Icon name="add" />
          </Button>
        </Push>
      );
    }
  }

  toggleControls() {
    this.setState({
      controls: !this.state.controls
    });
  }
  render() {
    return <div>Items</div>;
  }
}

// render() {
//   const cardObj = this.props.items;
//   const selectionKeys = Object.keys(cardObj);
//   const items = selectionKeys.map((id, index) => {
//     const selectedCard = cardObj[id];
//     return (
//       <Card key={index}>
//         <Content onClick={() => this.onPressItem(selectedCard)}>
//           <span>
//             {selectedCard.name ? selectedCard.name : 'Name not provided'}
//           </span>
//         </Content>
//         <IconItem isActive={!this.state.controls}>
//           <Icon name="chevron_right" />
//         </IconItem>
//         <DeleteControl
//           isActive={this.state.controls}
//           onPress={() => this.onPressDelete(selectedCard)}
//         />
//       </Card>
//     );
//   });
//   return (
//     <Layout path="/home" basic asTheme={ThemeColors.grey} title="Exercises">
//       {this.renderItems(items)}
//       <FooterNav
//         isActive={true}
//         items={2}
//         primaryText={'Add'}
//         secondaryText={this.state.controls ? 'Cancel' : 'Edit'}
//         primaryIcon={'add'}
//         secondaryIcon={'edit'}
//         onPressPrimary={() => this.props.history.push('/item-create')}
//         onPressSecondary={this.toggleControls.bind(this)}
//       />
//     </Layout>
//   );
// }
// }

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    items: _.map(state.item.items, (val, uid) => {
      return { ...val, uid };
    }),
    isEdit: state.program.isEdit
  }),
  mapDispatchToProps: dispatch => ({
    itemFetch: () => dispatch(itemFetch()),
    itemSelected: data => dispatch(itemSelected(data)),
    itemDelete: id => dispatch(itemDelete(id))
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(ItemsPage);

export default withRouter(ConnectAppContainer);
