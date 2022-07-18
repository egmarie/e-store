const initialTodos = [
    {
      instance_id: 2323,
      timeAdded: '',
      product_id: 1,
      title: "prod name",
      pic: 'prod pic',
      price: 23.93,
      season: "spring"

     
    },
    {
      instance_id: 23443,
      timeAdded: '',
      product_id: 2,
      title: "prod name",
      pic: 'prod pic',
      price: 23.93,
      season: "Fall"

    },
  ];



const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((cartItem) => {
          if (cartItem.id === action.id) {
            return { ...cartItem, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      default:
        return state;
    }
  };