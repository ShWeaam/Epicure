import { useSelector } from 'react-redux'
export default function Dishes() {

    const dishes = useSelector((state: any) => state.dishes.value);
  
    return (
      <div>
        <div>
          {dishes.map((dish: any, key: number) => (
            <div key={key} style={{ display: "flex", gap: "20px", background: "grey", justifyContent: 'center' }}>
              <div>{dish.name}</div>
              <div>{dish.imgUrl}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  