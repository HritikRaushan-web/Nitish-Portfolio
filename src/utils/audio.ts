// Audio Manager for NITISH KUMAR — THE SERIES
// Plays the EXACT soundtrack from the viral Instagram Reel (DePJT2NJvz_)
// along with the authentic Netflix "Ta-dum" cinematic chime.

let audioCtx: AudioContext | null = null;
let reelAudio: HTMLAudioElement | null = null;
let taDumAudio: HTMLAudioElement | null = null;
let customAudio: HTMLAudioElement | null = null;
let isSoundMuted = false;
let userHasInteracted = false;

// Check localStorage for saved sound preference
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('hritik_sound_muted') || localStorage.getItem('nitish_sound_muted');
  isSoundMuted = saved === 'true';
}

export function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtxClass) {
      audioCtx = new AudioCtxClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

// Unlock audio on first user touch/click/keypress anywhere on page
export function initUserInteractionListener() {
  if (typeof window === 'undefined' || userHasInteracted) return;

  const unlock = () => {
    userHasInteracted = true;
    const ctx = getAudioContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
    // Auto-start reel audio on first user interaction if not muted
    if (!isSoundMuted) {
      startAmbientMusic();
    }
    window.removeEventListener('pointerdown', unlock);
    window.removeEventListener('keydown', unlock);
    window.removeEventListener('click', unlock);
  };

  window.addEventListener('pointerdown', unlock, { once: true });
  window.addEventListener('keydown', unlock, { once: true });
  window.addEventListener('click', unlock, { once: true });
}

// Global Mute Toggle
export function toggleSound(): boolean {
  isSoundMuted = !isSoundMuted;
  if (typeof window !== 'undefined') {
    localStorage.setItem('hritik_sound_muted', isSoundMuted ? 'true' : 'false');
  }

  if (isSoundMuted) {
    stopAmbientMusic();
  } else {
    playTaDum();
    startAmbientMusic();
  }

  return !isSoundMuted;
}

export function getIsSoundMuted(): boolean {
  return isSoundMuted;
}

/**
 * Plays the iconic Netflix "Ta-Dum" audio intro.
 */
export function playTaDum() {
  if (isSoundMuted) return;

  try {
    if (!taDumAudio) {
      taDumAudio = new Audio('/assets/netflix-ta-dum.wav');
      taDumAudio.volume = 0.9;
    }
    taDumAudio.currentTime = 0;
    const playPromise = taDumAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Audio element play blocked, falling back to Web Audio synth:', err);
        synthTaDum();
      });
    }
  } catch (e) {
    synthTaDum();
  }
}

/**
 * Pure Web Audio API synthesis fallback for "Ta-Dum"
 * Guaranteed to produce sound with 0 external dependencies.
 */
function synthTaDum() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Hit 1: Low percussive "Ta"
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(80, now);
    osc1.frequency.exponentialRampToValueAtTime(38, now + 0.18);
    gain1.gain.setValueAtTime(0.7, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.38);

    // Hit 2: Deep resonant "DUM"
    const t2 = now + 0.18;
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(115, t2);
    osc2.frequency.exponentialRampToValueAtTime(45, t2 + 0.8);
    gain2.gain.setValueAtTime(0.9, t2);
    gain2.gain.exponentialRampToValueAtTime(0.001, t2 + 1.4);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(t2);
    osc2.stop(t2 + 1.5);

    // Cinematic Swell & Shimmer
    const chord = [146.8, 185.0, 220.0, 293.7];
    chord.forEach((freq) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(freq, t2);
      g.gain.setValueAtTime(0.01, t2);
      g.gain.linearRampToValueAtTime(0.12, t2 + 0.15);
      g.gain.exponentialRampToValueAtTime(0.0001, t2 + 2.0);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t2);
      o.stop(t2 + 2.1);
    });
  } catch (err) {
    console.warn('Audio synthesis note:', err);
  }
}

/**
 * Starts the EXACT audio track extracted from the Instagram reel!
 */
export function startAmbientMusic() {
  if (isSoundMuted || typeof window === 'undefined') return;

  if (customAudio && !customAudio.paused) {
    return; // User has custom track playing
  }

  if (!reelAudio) {
    // Primary: exact reel audio track from DePJT2NJvz_
    reelAudio = new Audio('/assets/reel-audio.m4a');
    reelAudio.loop = true;
    reelAudio.volume = 0.55;
    reelAudio.addEventListener('error', () => {
      // Fallback to mp4 container or ambient wav if m4a unsupported
      if (reelAudio) {
        reelAudio.src = '/assets/reel-audio.mp4';
        reelAudio.play().catch(() => {});
      }
    });
  }

  reelAudio.play().catch((err) => {
    console.warn('Playback blocked by browser autoplay policy until interaction:', err);
  });
}

export function stopAmbientMusic() {
  if (reelAudio) {
    reelAudio.pause();
  }
  if (customAudio) {
    customAudio.pause();
  }
}

/**
 * Plays subtle UI click sound
 */
export function playUiClick() {
  if (isSoundMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.05);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.06);
  } catch (e) {}
}

/**
 * Allows the user to load their OWN custom audio file (MP3/WAV)
 */
export function playCustomAudio(fileUrl: string) {
  if (isSoundMuted) return;
  stopAmbientMusic();
  if (customAudio) {
    customAudio.pause();
    customAudio = null;
  }
  customAudio = new Audio(fileUrl);
  customAudio.loop = true;
  customAudio.volume = 0.6;
  customAudio.play().catch((err) => console.warn('Custom audio playback note:', err));
}
