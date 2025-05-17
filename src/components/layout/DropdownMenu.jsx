// First, create a new component for the dropdown menu
// src/components/layout/DropdownMenu.jsx
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const DropdownMenu = ({ isActive }) => {
  const teamCategories = [
    { title: 'Under 13', path: '/team/under-13' },
    { title: 'Under 17', path: '/team/under-17' },
    { title: 'Under 20', path: '/team/under-20' },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className={`flex items-center space-x-1 text-white font-bold 
        transition-all duration-300 hover:text-[#DC2626] group tracking-wider ${
          isActive ? 'text-[#DC2626]' : ''
        }`}>
        <span>TEAM</span>
        <FaChevronDown className="h-4 w-4" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-black border border-gray-800 
          rounded-md shadow-lg focus:outline-none z-50">
          <div className="py-1">
            {teamCategories.map((category) => (
              <Menu.Item key={category.title}>
                {({ active }) => (
                  <Link
                    to={category.path}
                    className={`${
                      active ? 'bg-gray-900 text-[#DC2626]' : 'text-white'
                    } block px-4 py-2 text-sm hover:text-[#DC2626] transition-colors duration-300`}
                  >
                    {category.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;