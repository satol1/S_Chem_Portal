import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

export type RouteType = 
  | 'home'
  | 'trainers-catalog'
  | 'ovr-trainer'
  | 'inorg-31-trainer'
  | 'reactions-np-trainer'
  | 'np-test-14-1-trainer'
  | 'skill-map'
  | 'study-blocks';

export interface RouteMatch {
  route: RouteType;
  path: string;
  skillId?: string;
  blockId?: string;
  topicId?: string;
  studyMode?: 'list' | 'block' | 'theory' | 'practice';
}

interface RouterContextType {
  currentPath: string;
  match: RouteMatch;
  navigate: (path: string, options?: { replace?: boolean }) => void;
  goHome: () => void;
  openTrainersCatalog: () => void;
  openTrainerTopic: (topicId: string) => void;
  openSkillMap: (skillId?: string) => void;
  openStudyBlock: (blockId?: string, topicId?: string, mode?: 'theory' | 'practice') => void;
}

export function getRouteFromLocation(): string {
  const hash = window.location.hash;
  if (hash.startsWith('#/')) {
    return hash.slice(1); // e.g. "/trainers/ovr" or "/study"
  }
  // If hash is a simple section anchor like "#teachers"
  if (hash.startsWith('#')) {
    return '/';
  }
  // Fallback to pathname
  return window.location.pathname || '/';
}

/**
 * Parse URL pathname or hash path into structured RouteMatch
 */
export function parseRoute(rawPath: string): RouteMatch {
  // Normalize path by stripping trailing slashes except root and extracting path part
  const pathWithoutQuery = rawPath.split('?')[0].split('#')[0] || '/';
  const cleanPath = pathWithoutQuery.length > 1 && pathWithoutQuery.endsWith('/') 
    ? pathWithoutQuery.slice(0, -1) 
    : pathWithoutQuery;

  if (cleanPath === '/study' || cleanPath.startsWith('/study/')) {
    const parts = cleanPath.split('/').filter(Boolean); // ['study', 'blockId', 'topicId', 'mode']
    const blockId = parts[1];
    let topicId = parts[2];
    let studyMode: 'list' | 'block' | 'theory' | 'practice' = 'list';

    if (blockId) {
      if (topicId) {
        if (topicId === 'practice' || parts[3] === 'practice') {
          studyMode = 'practice';
          if (topicId === 'practice') topicId = parts[1]; // fallback
        } else {
          studyMode = 'theory';
        }
      } else {
        studyMode = 'block';
      }
    }

    return { 
      route: 'study-blocks', 
      path: cleanPath,
      blockId,
      topicId,
      studyMode
    };
  }

  if (cleanPath === '/trainers' || cleanPath === '/trainers/') {
    return { route: 'trainers-catalog', path: '/trainers' };
  }

  if (cleanPath === '/trainers/ovr') {
    return { route: 'ovr-trainer', path: '/trainers/ovr' };
  }

  if (cleanPath === '/trainers/inorganic-31') {
    return { route: 'inorg-31-trainer', path: '/trainers/inorganic-31' };
  }

  if (cleanPath === '/trainers/reactions') {
    return { route: 'reactions-np-trainer', path: '/trainers/reactions' };
  }

  if (cleanPath === '/trainers/np-test-14-1') {
    return { route: 'np-test-14-1-trainer', path: '/trainers/np-test-14-1' };
  }

  if (cleanPath === '/skill-map') {
    return { route: 'skill-map', path: '/skill-map' };
  }

  if (cleanPath.startsWith('/skill-map/')) {
    const skillId = cleanPath.replace('/skill-map/', '');
    return { route: 'skill-map', path: cleanPath, skillId };
  }

  return { route: 'home', path: '/' };
}

const RouterContext = createContext<RouterContextType | null>(null);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => getRouteFromLocation());

  const match = useMemo(() => parseRoute(currentPath), [currentPath]);

  const navigate = useCallback((path: string, options?: { replace?: boolean }) => {
    let targetRoutePath = path;
    let hashSection = '';

    if (path.includes('#')) {
      const [pPart, hPart] = path.split('#');
      targetRoutePath = pPart === '' || pPart === '/' ? '/' : pPart;
      hashSection = hPart;
    }

    // Format target hash for browser URL
    const targetHash = targetRoutePath === '/' 
      ? (hashSection ? `#${hashSection}` : '#/') 
      : (hashSection ? `#${targetRoutePath}#${hashSection}` : `#${targetRoutePath}`);

    if (options?.replace) {
      window.history.replaceState({}, '', targetHash);
    } else {
      window.history.pushState({}, '', targetHash);
    }
    
    setCurrentPath(targetRoutePath);

    if (hashSection) {
      setTimeout(() => {
        const el = document.getElementById(hashSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Listen for browser Back/Forward & HashChange navigation
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getRouteFromLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const goHome = useCallback(() => navigate('/'), [navigate]);
  const openTrainersCatalog = useCallback(() => navigate('/trainers'), [navigate]);

  const openTrainerTopic = useCallback((topicId: string) => {
    if (topicId === 'ovr-29') navigate('/trainers/ovr');
    else if (topicId === 'inorg-31-np') navigate('/trainers/inorganic-31');
    else if (topicId === 'reactions-np') navigate('/trainers/reactions');
    else if (topicId === 'np-test-14-1') navigate('/trainers/np-test-14-1');
    else navigate('/trainers');
  }, [navigate]);

  const openSkillMap = useCallback((skillId?: string) => {
    if (skillId) {
      navigate(`/skill-map/${skillId}`);
    } else {
      navigate('/skill-map');
    }
  }, [navigate]);

  const openStudyBlock = useCallback((blockId?: string, topicId?: string, mode?: 'theory' | 'practice') => {
    if (blockId && topicId) {
      if (mode === 'practice') {
        navigate(`/study/${blockId}/${topicId}/practice`);
      } else {
        navigate(`/study/${blockId}/${topicId}`);
      }
    } else if (blockId) {
      navigate(`/study/${blockId}`);
    } else {
      navigate('/study');
    }
  }, [navigate]);

  const value = useMemo(
    () => ({
      currentPath,
      match,
      navigate,
      goHome,
      openTrainersCatalog,
      openTrainerTopic,
      openSkillMap,
      openStudyBlock,
    }),
    [currentPath, match, navigate, goHome, openTrainersCatalog, openTrainerTopic, openSkillMap, openStudyBlock]
  );

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, onClick, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    
    // Allow ctrl+click or meta+click to open in new tab
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
