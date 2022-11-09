import React from 'react';
import Switch from "../components-headlessui/Switch/Switch";
import Table from '../component-pages/Table/Table';

const IndexPage = () => {
  const [switchChecked, setSwitchChecked] = React.useState(false);
  return (
    <div>
      <main className="px-4 py-6 sm:px-2">
        <h1>Switch</h1>
        <Switch checked={switchChecked} onChange={setSwitchChecked} />
        <h1>Table</h1>
        <Table />
      </main>
    </div>
  );
};

export default IndexPage
