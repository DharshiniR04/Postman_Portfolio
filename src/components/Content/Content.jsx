import React from 'react';
import './Content.css';
import Main from '../../pages/Main/Main';
import Guide from '../../pages/Guide/Guide';
import Contact from '../../pages/Contact/Contact';

const Content = ({ selected }) => {
  const renderContent = () => {
    switch (selected) {
      case 'guide':
        return <Guide/>;
      case 'contact':
        return <Contact/>;
      default:
        return <Main/>;
    }
  };

  return (
    <div className="content">
      {renderContent()}
    </div>
  );
};

export default Content;
