'use babel';

import RahasiaAplikasiSlotOnlineGacorJituView from './rahasia-aplikasi-slot-online-gacor-jitu-view';
import { CompositeDisposable } from 'atom';

export default {

  rahasiaAplikasiSlotOnlineGacorJituView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.rahasiaAplikasiSlotOnlineGacorJituView = new RahasiaAplikasiSlotOnlineGacorJituView(state.rahasiaAplikasiSlotOnlineGacorJituViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.rahasiaAplikasiSlotOnlineGacorJituView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'rahasia-aplikasi-slot-online-gacor-jitu:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.rahasiaAplikasiSlotOnlineGacorJituView.destroy();
  },

  serialize() {
    return {
      rahasiaAplikasiSlotOnlineGacorJituViewState: this.rahasiaAplikasiSlotOnlineGacorJituView.serialize()
    };
  },

  toggle() {
    console.log('RahasiaAplikasiSlotOnlineGacorJitu was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
