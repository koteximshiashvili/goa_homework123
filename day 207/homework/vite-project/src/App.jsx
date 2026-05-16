import AddToCart from "./AddToCart";
import UserButton from "./UserButton";
import Cart from "./Cart";
import UserProvider from "./UserProvider";
import CartProvider from "./CartProvider";
function App() {

  return (
    <>
      <UserProvider>
        <CartProvider>
          <div>
            <UserButton />
          </div>

          <div>
            <AddToCart />
            <Cart />
          </div>
        </CartProvider>
      </UserProvider>
    </>
  )
}

export default App
