import { v4 as uuidv4 } from 'uuid';

const generateId = () => {
    const newId = uuidv4();
    return newId
  };


export { generateId }