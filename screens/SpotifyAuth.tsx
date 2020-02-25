import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {spotifyApi, scopes} from '../api/index';
import {View, Text} from 'react-native';

export const SpotifyAuth = () => {
  const [authorizeURL, setAuthURL] = useState('');
  const [authorizeCode, setAuthCode] = useState('');
  let isMounted: boolean = true;

  const getAuthCode = (): void => {
    if (authorizeURL && !authorizeCode && isMounted) {
      console.log('getAuthCode', authorizeURL);
      fetch('http://10.10.63.191:8888/acc')
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.code) {
            setAuthCode(responseJson.code);
            spotifyApi.authorizationCodeGrant(responseJson.code).then(
              function(data: any) {
                // Set the access token on the API object to use it in later calls
                spotifyApi.setAccessToken(data.body['access_token']);
                spotifyApi.setRefreshToken(data.body['refresh_token']);

                spotifyApi
                  .getMyTopArtists({limit: 50})
                  .then(data => console.log('data', data.body))
                  .catch(error => console.log('error', error));
              },
              function(err: any) {
                console.log('Something went wrong grant auth!', err);
              },
            );
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      getAuthCode();
    }
  };

  useEffect(() => {
    const state = 'some-state-of-my-choice';
    setAuthURL(spotifyApi.createAuthorizeURL(scopes, state));
  }, []);

  useEffect(() => {
    if (authorizeURL && !authorizeCode) {
      getAuthCode();
    }

    return () => {
      isMounted = false;
    };
  }, [authorizeURL, authorizeCode]);

  console.log('authorizeCode', authorizeCode);
  console.log('authorizeURL', authorizeURL);

  return authorizeURL && !authorizeCode ? (
    <View style={{width: '100%', height: '100%'}}>
      <WebView source={{uri: authorizeURL}} />
    </View>
  ) : null;
};
