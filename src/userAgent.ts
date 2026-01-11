export function getBrowserName(): string {
  const userAgent = navigator.userAgent;
  
  if (userAgent.includes('Edg')) {
    return 'Microsoft Edge';
  } else if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
    return 'Google Chrome';
  } else if (userAgent.includes('Firefox')) {
    return 'Mozilla Firefox';
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    return 'Safari';
  } else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
    return 'Opera';
  } else {
    return 'Unknown Browser';
  }
}

export function getPlatformAndArchitecture(): string {
  const userAgent = navigator.userAgent;
  let platform = navigator.platform;
  let architecture = '';
  
  if (userAgent.includes('x64') || userAgent.includes('Win64') || userAgent.includes('x86_64')) {
    architecture = 'x64';
  } else if (userAgent.includes('arm64') || userAgent.includes('aarch64')) {
    architecture = 'arm64';
  } else if (userAgent.includes('x86') || userAgent.includes('i686')) {
    architecture = 'x86';
  } else if (userAgent.includes('arm')) {
    architecture = 'arm';
  }
  
  if (platform.includes('Win')) {
    platform = 'Windows';
  } else if (platform.includes('Mac')) {
    platform = 'macOS';
  } else if (platform.includes('Linux')) {
    platform = 'Linux';
  }
  
  return architecture ? `${platform}/${architecture}` : platform;
}
