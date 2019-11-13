import Loadable from 'react-loadable';

import Loading from '../../components/Loading';

const LoadableMovie = Loadable({
  loader: () => import('./Movie'),
  loading: Loading,
});

export default LoadableMovie;
