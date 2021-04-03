import { useEffect, useState } from 'react';

const SIZES =  {
  mobile : '768px',
  tablet : '1024px',
  widescreen : '1224px',
}

export const MediaQuery = {
  mobile: `(max-width: ${SIZES.mobile})`,
  tablet: `(min-width: ${SIZES.mobile}) and (max-width: ${SIZES.tablet})`,
  mobileOrTablet: `(max-width: ${SIZES.tablet})`,
  widescreen: `(min-width: ${SIZES.widescreen})`,
};

// from https://github.com/beautifulinteractions/beautiful-react-hooks
export const useMediaQuery = (mediaQuery) => {
  const [isVerified, setIsVerified] = useState(!!window.matchMedia(mediaQuery).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches);

    mediaQueryList.addListener(documentChangeHandler);

    documentChangeHandler();
    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [mediaQuery]);

  return isVerified;
};

/**
 * Lock body scroll once on mobile
 * This hook is used to prevent body scroll once on mobile.
 * Mainly used in fullscreen modal (station picker, travelers-selection)
 */
export const useLockedBodyScrollOnMobile = () => {
  const isMobileDevice = useMediaQuery(MediaQuery.mobileOrTablet);

  useEffect(() => {
    if (isMobileDevice) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileDevice]);
};

export const LockBodyScrollOnMobile = () => {
  useLockedBodyScrollOnMobile();

  return null;
};

/**
 * This hook is used to detect outside click of a container node
 * @param node
 * @param onOutsideClick
 */
export const useOutsideClickDetector = (
  node,
  onOutsideClick
) => {
  const isMobileDevice = useMediaQuery(MediaQuery.mobileOrTablet);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (isMobileDevice) return;

      const root = document.getElementById('root');
      const target = event.target ;

      if (node?.current?.contains(target) || !root?.contains(target)) {
        // inside click
        return;
      }
      // outside click
      if (onOutsideClick) onOutsideClick();
    };

    if (!isMobileDevice) document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isMobileDevice, node, onOutsideClick]);
};
