import React, { Component } from 'react';
import { connect } from 'react-redux';
import shades from '@bupa-digital/shades/react';
import { asRem, Icon, Theme, Button, ThemeColors } from 'utils/common-ui';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

const UploadContainer = shades.div({
  borderRadius: Theme.border.defaultRadius,
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: asRem(16),
  position: 'relative',
  overflow: 'hidden',
  border: Theme.border.basic,
  background: ThemeColors.white,
  boxSizing: 'border-box'
});

const FileInputHidden = shades.input({
  fontSize: asRem(100),
  position: 'absolute',
  left: 0,
  top: 0,
  opacity: 0
});

const ImageBox = shades.div({
  display: 'block',
  width: asRem(100),
  height: asRem(100)
});

const ImageItem = shades.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});

class UploadBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(e) {
    console.log('clicked image');
    let image = '';
    if (e.target.files[0]) {
      image = e.target.files[0];
    }
    this.handleUpload(image);
  }

  handleUpload(image) {
    const storage = firebase.storage();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
    });
  }

  render() {
    console.log('image', this.state.image, 'possible url?', this.state.url);
    return (
      <div>
        <UploadContainer>
          <div className="upload-btn-wrapper">
            <Button onPress={this.handleUpload}>
              Upload <Icon name="cloud_upload" />
            </Button>
            <FileInputHidden type="file" onChange={e => this.handleChange(e)} />
          </div>

          {this.state.url && this.state.url.length > 0 ? (
            <ImageBox>
              <ImageItem alt="profile" title="profile" src={this.state.url} />
            </ImageBox>
          ) : (
            <ImageBox>
              <img
                alt="profile"
                title="temp"
                src={
                  this.state.url
                    ? this.state.url
                    : 'http://placehold.it/150x150'
                }
              />
            </ImageBox>
          )}
        </UploadContainer>
      </div>
    );
  }
}

const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    user: state.auth
  }),
  mapDispatchToProps: dispatch => ({
    setSideMenu: () => console.log('hello')
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(UploadBarContainer);

export const UploadBar = withRouter(ConnectAppContainer);

/* 

const ref = firebase.storage().ref();
const file = document.querySelector('#photo').files[0]
const name = (+new Date()) + '-' + file.name;
const metadata = {
  contentType: file.type
};
const task = ref.child(name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    console.log(url);
    document.querySelector('#someImageTagID').src = url;
  })
  .catch(console.error);
  */
