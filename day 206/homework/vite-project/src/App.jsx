import AuthProvider from "./AuthProvider"
import CartProvider from "./CartProvider"
import Everything from "./Everything"
import LanguageProvider from "./LanguageProvider"
import ThemeProvider from "./ThemeProvider"
import UserProvider from "./UserProvider"


function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <UserProvider>
            <CartProvider>
              <AuthProvider>
                <Everything />
              </AuthProvider>
            </CartProvider>
          </UserProvider>
        </LanguageProvider>
      </ThemeProvider>
    </>
  )
}

export default App
