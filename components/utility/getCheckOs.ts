export default function useCheckOs() {
  const agent: any = typeof window !== 'undefined' && window.navigator.userAgent;

  if (/iPhone|iPad|iPod|Android/i.test(agent)) {
    return true;
  } else {
    return false;
  }
}