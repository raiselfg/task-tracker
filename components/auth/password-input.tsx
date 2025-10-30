'use client';

import { useState } from 'react';
import { Input } from '../ui/input';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface Props {
  field: object;
}

export const PasswordInput = ({ field }: Props) => {
  const [isVissible, setIsVissible] = useState<boolean>(false);

  return (
    <>
      {isVissible ? (
        <div className="relative">
          <Input
            className="pr-9"
            type="text"
            required
            placeholder="***"
            {...field}
          />
          <FaEyeSlash
            className="absolute top-1/2 right-1 translate-[-50%]"
            onClick={() => setIsVissible(false)}
          />
        </div>
      ) : (
        <div className="relative">
          <Input
            className="pr-9"
            type="password"
            required
            placeholder="***"
            {...field}
          />
          <FaEye
            className="absolute top-1/2 right-1 translate-[-50%]"
            onClick={() => setIsVissible(true)}
          />
        </div>
      )}
    </>
  );
};
