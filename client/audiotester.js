import alt from 'alt-client';
import view from './view.js';

alt.onServer('system:BeginGameplay', function() {
    view.emit('debug:audio:Show');
});
