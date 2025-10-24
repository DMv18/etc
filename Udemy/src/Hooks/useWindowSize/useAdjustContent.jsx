import { useEffect } from 'react';
import useWindowSize from '@hooks/useWindowSize/useWindowSize.jsx';

function useAdjustContent({contenedor}) {
  const { width, height } = useWindowSize();

  useEffect(() => {
    const contentElement = document.getElementById(contenedor);
    if (!contentElement) return;

   
    const rect = contentElement.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const scale = Math.min(width / rect.width, height / rect.height, 1);

    contentElement.style.transformOrigin = 'top center';
    contentElement.style.transform = `scale(${scale})`;
    
    contentElement.style.overflow = 'hidden';
  }, [width, height]);
}

export default useAdjustContent;
