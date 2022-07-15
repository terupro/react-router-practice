import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export const Page1 = () => {
  const navigation = useNavigate()
  const onClickDetailA = () => navigation('/page1/detailA');
  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: '/page1/detailA'}}>DetailA</Link>
      <br />
      <Link to='/page1/detailB'>DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  )
}
