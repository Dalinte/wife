import './Layout.scss'
import Scene from "../Model/Scene/Scene.jsx";
import Chat from "../Chat/Chat.jsx";
import MusicPlayer from "../MusicPlayer/MusicPlayer.jsx";
import Donate from "../Donate/Donate.jsx";
import {Leva} from "leva";

function Layout() {
    return (
      <div className="layout">
          <div className="layout__canvas-container">
              <Scene/>
              <div className='gui-container'>
                  <Leva/>
              </div>
          </div>
          <div className="layout__chat">
              <Chat/>
          </div>
          <div className="layout__music-player">
              <MusicPlayer/>
          </div>
          <div className="layout__donate">
              <Donate/>
          </div>
      </div>
    )
}

export default Layout
