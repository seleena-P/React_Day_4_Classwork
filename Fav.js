import React, { useState } from 'react';
import {TextField,Button} from '@mui/material'
import { Autocomplete } from '@mui/material';

const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

function Fav() {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    document.write(`Hello. ${name}! Your favorite fruit is ${fruit}.`);
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <h3 className='text-primary'>Enter your name and favourite fruit:</h3>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        data-testid="name"
      /><br></br>
      <Autocomplete
        options={fruitOptions}
        value={fruit} className='mt-4'
        onChange={(event, value) => setFruit(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a fruit"
            data-testid="autocomplete"
          />
        )}
      /><br></br>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default Fav;