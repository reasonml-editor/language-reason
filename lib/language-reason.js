'use babel';

import LanguageReasonView from './language-reason-view';
import { CompositeDisposable } from 'atom';

export default {

  languageReasonView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.languageReasonView = new LanguageReasonView(state.languageReasonViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.languageReasonView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'language-reason:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.languageReasonView.destroy();
  },

  serialize() {
    return {
      languageReasonViewState: this.languageReasonView.serialize()
    };
  },

  toggle() {
    console.log('LanguageReason was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
