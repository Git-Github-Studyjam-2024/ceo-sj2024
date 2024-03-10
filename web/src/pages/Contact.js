import React, { useState } from 'react';
import './Contact.css'
const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Đã gửi:', { name, message });
    setName('');
    setMessage('');
  };

  return (
    <div className='w-100 d-flex justify-content-center flex-column align-items-center'>
      <h1 className='text-white'>Liên hệ</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='text-dark mb-2'htmlFor="name">Tên:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='text-dark mb-2'htmlFor="message">Nội dung:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-success" type="submit">Gửi</button>

      </form>
    </div>
  );
};

export default Contact;
