import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Dastakhat`;
    }
  }, [title]);
};

export default useDocumentTitle;