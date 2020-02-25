import SpotifyWebApi from 'react-native-spotify-web-api';
import {CLIENT_ID, CLIENT_SECRET, REDIRECT_URL} from 'react-native-dotenv';

export const scopes = [
  'user-read-private',
  'user-read-email',
  'ugc-image-upload',
  'user-modify-playback-state',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-top-read',
  'user-read-recently-played',
  'user-library-modify',
  'user-library-read',
  'user-follow-modify',
  'user-follow-read',
  'playlist-read-private',
  'playlist-modify-public',
  'playlist-modify-private',
  'playlist-read-collaborative',
  'user-read-private',
  'user-read-email',
  'app-remote-control',
  'streaming',
];

export const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URL,
});
