import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'


const tracks = [
    {
      url: 'https://storage.googleapis.com/nicoroc_audio/nicobazzoni%20-%20OFF%20-%20MASTER%20.mp3',
      title: 'nicoroc - off',
      tags: ['off'],
    },
    {
      url: 'https://storage.googleapis.com/nicoroc_audio/nicobazzoni%20-%20KALKUTA%20-%20MASTER%20.mp3',
      title: 'nicoroc - kalkuta',
      tags: ['kalkuta'],
    },
    {
      url: 'https://storage.googleapis.com/nicoroc_audio/nicobazzoni%20-%20SEE%20YA%20THERE%20-%20MASTER.mp3',
      title: 'nicoroc - see ya there feat. fedi',
      tags: ['seeyathere'],
    },
    {
      url: 'https://storage.googleapis.com/nicoroc_audio/nicobazzoni%20-%20SKYLINE%20-%20MASTER%20.mp3',
      title: 'nicoroc - skyline',
      tags: ['skyline'],

    },
    {
      url: 'https://storage.googleapis.com/nicoroc_audio/nicobazzoni%20-%20SPIDER%20-%20MASTER%20.mp3',
      title: 'nicoroc - spider',
      tags: ['spider'],
    },
    {
      url: 'https://storage.googleapis.com/nicoroc_audio/nicobazzoni%20-%20TRON%20-%20MASTER%20.mp3',
      title: 'nicoroc - tron',
      tags: ['tron'],
    },

  ]

  const colors = `html {
          --tagsBackground: #18191f;
          --tagsText: #ffffff;
          --tagsBackgroundHoverActive: #575a77;
          --tagsTextHoverActive: #ffffff;
          --searchBackground: #18191f;
          --searchText: #ffffff;
          --searchPlaceHolder: #575a77;
          --playerBackground: #18191f;
          --titleColor: #ffffff; 
          --timeColor: #ffffff;
          --progressSlider: #e9dcf8;
          --progressUsed: #ffffff;
          --progressLeft: #151616;
          --volumeSlider: #e9dcf8;
          --volumeUsed: #ffffff;
          --volumeLeft:  #151616;
          --playlistBackground: #18191f;
          --playlistText: #575a77;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #ffffff;
      }`









export default function Music() {
    return (
        <main className=''>
        <div>
      <Player className='space-x-2' trackList={tracks} customColorScheme={colors} />
        </div>  
     </main>
    );
  
}