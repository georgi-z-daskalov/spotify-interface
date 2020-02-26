import React from 'react';
import {WebView} from 'react-native-webview';
import {spotifyApi, scopes} from '../api/index';
import {View} from 'react-native';
import {REDIRECT_URL} from 'react-native-dotenv';
import {Button} from 'react-native-elements';
import {goToHome} from '../components/navigation';

interface ISpotifyAuthState {
  authorizeURL: string;
  authorizeCode: string;
}

export default class SpotifyAuth extends React.PureComponent {
  _isMounted = false;
  state: ISpotifyAuthState = {
    authorizeURL: '',
    authorizeCode: '',
  };

  getAuthCode = (): void => {
    const {authorizeCode, authorizeURL} = this.state;
    if (!authorizeCode) {
      console.log('getAuthCode', authorizeURL);
      console.log('REDIRECT_URL', REDIRECT_URL);
      fetch(REDIRECT_URL + '/acc')
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.code) {
            spotifyApi
              .authorizationCodeGrant(responseJson.code)
              .then(data => {
                console.log('responseJson.code', responseJson.code);
                console.log('data access_token', data.body.access_token);
                // Set the access token on the API object to use it in later calls

                spotifyApi.setAccessToken(data.body['access_token']);
                spotifyApi.setRefreshToken(data.body['refresh_token']);
                if (this._isMounted) {
                  this.setState(
                    {
                      authorizeCode: responseJson.code,
                    },
                    goToHome,
                  );
                }
              })
              .catch(err => {
                console.log('Something went wrong with grant auth!', err);
              });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  componentDidMount() {
    this._isMounted = true;
    const state = 'some-state-of-my-choice';
    this.setState({
      authorizeURL: spotifyApi.createAuthorizeURL(scopes, state),
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {authorizeURL, authorizeCode} = this.state;

    console.log('authorizeCode', authorizeCode);
    console.log('authorizeURL', authorizeURL);
    return (
      <View style={{width: '100%', height: '100%'}}>
        <WebView source={{uri: authorizeURL}} />
        <Button disabled={!authorizeURL} onPress={this.getAuthCode} title="Go to app" />
      </View>
    );
  }
}
