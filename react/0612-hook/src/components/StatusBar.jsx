import React from 'react'
import { useOnlineStatus } from '../Hook/useOnlineStatus'

export const StatusBar = () => {
  const isOnline = useOnlineStatus();

  return (
    <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
  );
}
