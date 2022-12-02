import {useCallback, useEffect, useMemo, useState} from 'react';

export const SCREEN_PHONE = 'phone';
export const SCREEN_TABLET = 'tablet';
export const SCREEN_DESKTOP = 'desktop';

export default function useScreen() {
    const getWindowDimensions = () => {
        const { innerWidth: width } = window;
        return width;
    };

    const [width, setWidth] = useState(getWindowDimensions());

    const media = {
        [SCREEN_PHONE]: 540,
        [SCREEN_TABLET]: 768,
        [SCREEN_DESKTOP]: 1100,
    };

    const getDeviceType = useCallback(() => {
        if (width <= media[SCREEN_PHONE]) {
            return SCREEN_PHONE;
        }
        if (width < media[SCREEN_DESKTOP]) {
            return SCREEN_TABLET;
        }
        return SCREEN_DESKTOP;
    }, [media, width]);

    const isPhone = useMemo(() => getDeviceType() === SCREEN_PHONE, [getDeviceType]);
    const isTablet = useMemo(() => getDeviceType() === SCREEN_TABLET, [getDeviceType]);
    const isDesktop = useMemo(() => getDeviceType() === SCREEN_DESKTOP, [getDeviceType]);

    useEffect(() => {
        function handleResize() {
            setWidth(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        isPhone,
        isTablet,
        isDesktop,
    };
}
