import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Chefs() {

  const chefs = useSelector((state: any) => state.chefs.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {chefs.map((chef: any, key: number) => (
          <div key={key} style={{ display: "flex", gap: "20px", background: "grey", justifyContent: 'center' }}>
            <div>{chef.name}</div>
            <div>{chef.imgUrl}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
