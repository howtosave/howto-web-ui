import { Fragment } from 'react'
import Link from 'next/link';

const Sample: React.FC<{}> = () => {
  return (
    <div className="bg-gray-50">
      <div className="inline-flex rounded-md shadow">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
        >
          Sample
        </Link>
      </div>
    </div>
  );
}

export default Sample;
