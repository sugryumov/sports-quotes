import Link from 'next/link';
import '../style.scss';
import Head from '../components/head';

export default () => (
  <div className="App">
    <Link href="/admin">
      <a>go to admin panel</a>
    </Link>
    <Head title="sport quotes" />
  </div>
);
