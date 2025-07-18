import React from 'react';
import Select from 'react-select';

const UserSelector = ({ users, onSelect }) => {
  const options = users.map((user) => ({
    value: user._id,
    label: user.name,
  }));

  return (
    <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#333' }}>
        Select a user:
      </label>
      <Select
        options={options}
        onChange={(selectedOption) =>
          onSelect(selectedOption ? selectedOption.value : '')
        }
        placeholder="-- Select --"
        styles={{
          control: (base, state) => ({
            ...base,
            width: '70%',
            margin: 'auto',
            fontSize: '0.85rem',
            minHeight: '32px',
            borderColor: state.isFocused ? '#007bff' : '#ccc',
            boxShadow: state.isFocused ? '0 0 5px rgba(0, 123, 255, 0.3)' : 'none',
            '&:hover': { borderColor: '#0056b3' },
          }),
          option: (base, state) => ({
            ...base,
            fontSize: '0.85rem',
            backgroundColor: state.isFocused ? '#e7f1ff' : '#fff',
            color: '#000',
            cursor: 'pointer',
          }),
          menu: (base) => ({
            ...base,
            maxHeight: '120px',
            overflowY: 'auto',
          }),
        }}
      />
    </div>
  );
};

export default UserSelector;
