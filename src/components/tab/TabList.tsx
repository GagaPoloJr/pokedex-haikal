import React from 'react';

interface tabListProps {
  indexTab: number;
  setOpenTab: (index: number) => void;
}

const TabList = ({ indexTab, setOpenTab }: tabListProps) => {
  const tabItems = [
    { index: 4, label: 'About' },
    { index: 1, label: 'Abilities' },
    { index: 2, label: 'Moves' },
    { index: 3, label: 'Base Stats' },
  ];
  return (
    <>
      <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-y-5" role="tablist">
        {tabItems.map((item) => (
          <li key={item.index} className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`text-xs font-bold px-5 py-3 shadow-lg rounded-full block leading-normal ${
                indexTab === item.index
                  ? 'text-white bg-yellow-500 border-2 border-yellow-500'
                  : 'text-white-600 bg-transparent border-2 border-yellow-500'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(item.index);
              }}
              href={`#link${item.index}`}
              role="tablist"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TabList;
