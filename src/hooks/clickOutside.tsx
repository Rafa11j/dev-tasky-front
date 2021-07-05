import { useCallback, useEffect } from 'react';

interface IClickOutside {
  ref: React.MutableRefObject<HTMLElement>;
  action(): void;
}

export function useClickOutside({ ref, action }: IClickOutside): void {
  const handleClickOutside = useCallback(
    event => {
      if (!ref.current?.contains(event.target)) {
        action();
      }
    },
    [action, ref],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);
}
