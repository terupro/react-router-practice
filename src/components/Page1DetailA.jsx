import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Page1DetailA = () => {

   const navigation = useNavigate()
   const onClickBack = () => navigation(-1);

  return (
    <div>
      <h1>Page1 DetailA</h1>
      <br />
      <button onClick={onClickBack}>もどる</button>
    </div>
  )
}
