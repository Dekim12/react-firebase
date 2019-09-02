import React from 'react';

const Notification = ({ notifications }) => {
  return (
    <div className='section'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Notification</span>
          <ul className='notification'>
            {notifications &&
              notifications.map(item => (
                <li key={item.id} style={{ marginTop: 10 }}>
                  <span className='pink-text'>{item.user} </span>
                  <span>{item.content}</span>
                  <div className='grey-text note-date'>
                    {item.time
                      .toDate()
                      .toString()
                      .slice(4, 21)}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
