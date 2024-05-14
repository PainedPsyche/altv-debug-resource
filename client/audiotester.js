import alt from 'alt-client';
import native from 'natives';

import view from './view.js';

const soundList = JSON.parse(alt.File.read('./data/soundNames.json'));

alt.onServer('system:BeginGameplay', function() {
    view.emit('debug:audio:LoadData', soundList);
});

alt.onServer('debug:AudioTester', function() {
    alt.emit('debug:audio:Show');
});

alt.on('debug:audio:Show', function() {
    view.emit('debug:audio:Show');
    view.focus();
    alt.toggleGameControls(false);
    alt.showCursor(true);
});

view.on('debug:audio:DataLoaded', function() {
});

view.on('debug:audio:Play', function(name, ref) {
    native.playSoundFrontend(-1, name, ref, 1);
});

view.on('debug:audio:Close', function() {
    view.emit('debug:audio:Hide');
    view.unfocus();
    alt.toggleGameControls(true);
    alt.showCursor(false);
});