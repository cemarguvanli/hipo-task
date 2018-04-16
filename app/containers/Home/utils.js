import storage from 'helpers/storage';

const RECENT_SEARCH_KEY = 'recentSearches';

export const getFeaturedPhoto = (featured = {}) => {
  const dummy = 'https://www.specialtyfood.com/media/cache/79/ee/79eee71d3e594b9be7bae7585c282baf.png';
  if (featured.items && featured.count >= 1) {
    const [photo] = featured.items;
    return `${photo.prefix}290${photo.suffix}`;
  }
  return dummy;
};

export const setRecentSearch = (item) => {
  const items = storage.get(RECENT_SEARCH_KEY);
  if (items && items.length) {
    const filteredItems = items.filter((dt) => dt.pretty !== item.pretty);
    if (filteredItems.length === 10) filteredItems.pop();

    return storage.set(RECENT_SEARCH_KEY, [item, ...filteredItems]);
  }
  return storage.set(RECENT_SEARCH_KEY, [item]);
};

export const getRecentSearches = () => (storage.get(RECENT_SEARCH_KEY) || []);
