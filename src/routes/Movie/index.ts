import Loadable from 'react-loadable';

import Loading from '../../components/Loading';

const LoadableHome = Loadable({
  loader: () => import('./Movie'),
  loading: Loading,
});

export default LoadableHome;
