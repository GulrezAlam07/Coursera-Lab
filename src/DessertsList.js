function DessertsList(props) {
  // Implement the component here.
  const lowCaloriesDeserts = props.data

  .filter((desert) =>{
    return desert.calories <500; } )
  .sort((a,b) => {
    return a.calories - b.calories;
  })
  .map((desert) => {
    return (
      <li>{desert.name} - {desert.calories} cal.</li>
    )
  }
  )
  return <ul>{lowCaloriesDeserts }</ul>
}

export default DessertsList;
