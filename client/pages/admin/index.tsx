import React from 'react';
import './style.scss';
import Link from 'next/link';

interface Props {}

const Admin: React.FC<Props> = () => {
  return (
    <div className="admin">
      Админка{' '}
      <Link href="/">
        <a>go /</a>
      </Link>
    </div>
  );
};

export default Admin;
