import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `Dastakhat | ${title}`;
    }
  }, [title]);
};

export default useDocumentTitle;