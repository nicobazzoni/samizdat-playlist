import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'


const tracks = [
    {
      url: 'https://storage.googleapis.com/nicoroc_audio/NICO%20-%20NAVY%20ZR%20MIX4.mp3',
      title: 'nicoroc - navy',
      tags: ['rap'],
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