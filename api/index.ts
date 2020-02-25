import SpotifyWebApi from 'react-native-spotify-web-api';

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
  clientId: '911f6bd56b5b49caa2ac9eb4dfacc80f',
  clientSecret: '1769e354f9fd495fb673bc85588471e8',
  redirectUri: 'http://10.10.63.191:8888',
});
