import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m"
    defaultPosition="bottom"
    defaultIsVisible={!false}
    defaultSize={0.3}
  >
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
);
